const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { crearGestorProgreso } = require("../www/progreso.js");
const values = new Map();
const storage = { getItem: k => values.get(k) ?? null, setItem: (k, v) => values.set(k, v) };
const p = crearGestorProgreso(storage);
const bank = Object.freeze([Object.freeze({ id: 1 }), Object.freeze({ id: 2 }), Object.freeze({ id: 3 })]);
assert.equal(p.obtenerRepaso("a", bank).length, 0);
p.registrarRespuesta({ asignaturaId: "a", preguntaId: 1, correcta: false });
p.registrarRespuesta({ asignaturaId: "a", preguntaId: 2, correcta: true });
assert.deepEqual(p.obtenerRepaso("a", bank).map(x => x.id), [1]);
p.registrarRespuesta({ asignaturaId: "a", preguntaId: 1, correcta: true, sinAyuda: false });
assert.equal(p.obtenerAsignatura("a").preguntas[1].racha, 0);
assert.equal(p.obtenerRepaso("a", bank).length, 0);
assert.deepEqual(p.obtenerRepaso("a", bank, Date.now() + 86400001).map(x => x.id), [1, 2]);
p.registrarRespuesta({ asignaturaId: "a", preguntaId: 2, correcta: true });
assert.equal(p.obtenerAsignatura("a").preguntas[2].racha, 2);
assert.deepEqual(p.obtenerRepaso("a", bank, Date.now() + 86400001).map(x => x.id), [1]);
for (const modo of ["estudio", "examen", "repaso"]) p.guardarSesionActiva({ asignaturaId: "a", modo, preguntas: [{ id: 1, ordenOpciones: [2, 0, 1] }] });
const reload = crearGestorProgreso(storage);
assert.equal(reload.obtenerSesionActiva("a", "repaso").modo, "repaso");
reload.eliminarSesionActiva("a", "repaso");
assert.ok(reload.obtenerSesionActiva("a", "estudio"));
assert.ok(reload.obtenerSesionActiva("a", "examen"));

// Integración del motor: crear repaso, salir y recuperar el orden de respuestas.
const engine = {
  document: { addEventListener() {}, getElementById: () => ({ classList: { add() {}, remove() {} }, style: {} }) },
  ProgresoEstudio: reload,
  bancoDePreguntas: { a: [{ id: 1, pregunta: "Fixture", opciones: ["A", "B", "C"], correcta: 1 }] }
};
vm.createContext(engine);
vm.runInContext(fs.readFileSync(path.resolve(__dirname, "../www/script.js"), "utf8"), engine);
vm.runInContext(`
  aplicarUIsegunModo = () => {};
  cargarPregunta = () => {};
  cerrarModalConfig = () => {};
  asignaturaSeleccionada = "a";
`, engine);
reload.registrarRespuesta({ asignaturaId: "a", preguntaId: 1, correcta: false });
engine.iniciarRepasoInteligente();
assert.ok(reload.obtenerSesionActiva("a", "repaso"));
vm.runInContext(`
  preguntasActuales[0] = reconstruirPreguntaSesion(preguntasActuales[0], [2, 0, 1]);
  erroresEstudio[0] = [0];
  guardarSesionActiva();
  preguntasActuales = [];
  continuarSesionDeAsignatura("a", "repaso");
`, engine);
assert.equal(vm.runInContext("preguntasActuales[0].correcta", engine), 2);
assert.equal(vm.runInContext("erroresEstudio[0][0]", engine), 0);
assert.equal(vm.runInContext("modo", engine), "repaso");
assert.equal(engine.bancoDePreguntas.a[0].correcta, 1);
assert.ok(reload.obtenerSesionActiva("a", "estudio"));
assert.ok(reload.obtenerSesionActiva("a", "examen"));

async function testOffline() {
  const root = path.resolve(__dirname, "../www");
  const events = {};
  const scope = "https://example.com/ProyectoAppDAM/";
  const cacheEntries = new Map();
  const cacheStores = new Map([["another-app", new Map()]]);
  let fail = false;
  const context = {
    URL, Request,
    self: { registration: { scope }, clients: { claim: async () => {} }, addEventListener: (name, handler) => events[name] = handler },
    caches: {
      open: async key => {
        cacheStores.set(key, cacheEntries);
        return {
          addAll: async requests => {
            if (fail) throw new Error("network unavailable");
            for (const req of requests) cacheEntries.set(req.url, { cached: req.url });
          },
          match: async key => cacheEntries.get(key)
        };
      },
      keys: async () => [...cacheStores.keys()],
      delete: async key => cacheStores.delete(key)
    },
    fetch: async () => { throw new Error("offline"); }
  };
  vm.createContext(context);
  context.importScripts = name => vm.runInContext(fs.readFileSync(path.join(root, name), "utf8"), context);
  vm.runInContext(fs.readFileSync(path.join(root, "sw.js"), "utf8"), context);
  for (const name of context.self.OFFLINE_ASSETS) assert.ok(fs.existsSync(path.join(root, name)), name);
  for (const name of ["index.html", "script.js", "progreso.js", "style.css", "images/programacion/pregunta88.png"]) assert.ok(context.self.OFFLINE_ASSETS.includes(name));
  let work;
  fail = true;
  events.install({ waitUntil: promise => work = promise });
  await assert.rejects(work);
  fail = false;
  events.install({ waitUntil: promise => work = promise });
  await work;
  events.activate({ waitUntil: promise => work = promise });
  await work;
  assert.ok(cacheStores.has("another-app"));
  for (const [url, mode, expected] of [[scope + "?design=liquid-glass", "navigate", "index.html"], [scope + "style.css?v=123", "cors", "style.css"]]) {
    events.fetch({ request: { url, mode, method: "GET" }, respondWith: promise => work = promise });
    assert.equal((await work).cached, scope + expected);
  }
  console.log("Repaso y modo offline: pruebas correctas.");
}
testOffline().catch(error => { console.error(error); process.exitCode = 1; });
