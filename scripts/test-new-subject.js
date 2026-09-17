const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { cargarContenido, calcularHuellaContenidoEvaluable } = require("./validate-content.js");
const root = path.resolve(__dirname, "..");
const { catalogo, bancoDePreguntas } = cargarContenido();
// Protege también la incorporación anterior de Multimedia (760 preguntas).
assert.equal(calcularHuellaContenidoEvaluable(catalogo.filter(a => !["serviciosProcesos", "desarrolloInterfaces"].includes(a.id))),
  "71b75def7dc4a448f6c3a5572b9fcd95cd2fe2acce862d9ff61cc0c310c65e52");
// La nueva asignatura no permite modificar las 770 preguntas ya incorporadas.
assert.equal(calcularHuellaContenidoEvaluable(catalogo.filter(a => a.id !== "desarrolloInterfaces")),
  "31d2e6c9049e08a585cfaa66544ed97a6d52c6c53da60b2533554b20b5f00211");
const testServicios = JSON.parse(fs.readFileSync(path.join(root, "contenido/tests/serviciosProcesos/u1-test1.json"), "utf8"));
const servicios = catalogo.find(a => a.id === "serviciosProcesos");
assert.deepEqual(servicios.preguntas, testServicios.preguntas.map(({ numeroOriginal, ...p }) => p));
assert.deepEqual(servicios.preguntas.map(p => p.id), Array.from({ length: 10 }, (_, i) => 41 + i));
assert.deepEqual(bancoDePreguntas.serviciosProcesos.map(p => p.correcta), [0, 0, 0, 2, 3, 1, 1, 1, 3, 0]);
assert.ok(servicios.preguntas[0].opciones.slice(0, 3).every(opcion => opcion.includes("a la secundaria")));
assert.ok(servicios.preguntas[7].opciones[0].includes("a medida que"));
// La incorporación de una asignatura NO permite actualizar las 750 preguntas anteriores.
const anteriores = ["sistemas", "bases", "entornos", "programacion", "empleabilidad", "lenguajeMarcas"];
assert.equal(calcularHuellaContenidoEvaluable(catalogo.filter(a => anteriores.includes(a.id))),
  "339c3bcc2e35d4fad7909677446f215ccbd170151184424668498d091c933ba1");
const test = JSON.parse(fs.readFileSync(path.join(root, "contenido/tests/multimediaMoviles/u1-test1.json"), "utf8"));
const nueva = catalogo.find(a => a.id === "multimediaMoviles");
assert.deepEqual(nueva.preguntas, test.preguntas.map(({ numeroOriginal, ...p }) => p));
assert.deepEqual(nueva.preguntas.map(p => p.id), Array.from({ length: 10 }, (_, i) => 41 + i));
assert.deepEqual(bancoDePreguntas.multimediaMoviles.map(p => p.correcta), [2, 3, 1, 1, 2, 2, 3, 0, 2, 0]);
assert.ok(nueva.preguntas.find(p => p.id === 49).pregunta.includes("UMTS"));
const testInterfaces = JSON.parse(fs.readFileSync(path.join(root, "contenido/tests/desarrolloInterfaces/u1-test1.json"), "utf8"));
const interfaces = catalogo.find(a => a.id === "desarrolloInterfaces");
assert.deepEqual(interfaces.preguntas, testInterfaces.preguntas.map(({ numeroOriginal, ...p }) => p));
assert.deepEqual(interfaces.preguntas.map(p => p.id), Array.from({ length: 10 }, (_, i) => 41 + i));
assert.deepEqual(bancoDePreguntas.desarrolloInterfaces.map(p => p.correcta), [1, 2, 3, 1, 0, 2, 3, 3, 1, 0]);
assert.equal(interfaces.preguntas[3].respuesta_correcta, interfaces.preguntas[3].opciones[1]);
assert.equal(interfaces.preguntas[9].respuesta_correcta, "A. El prototipo");

const elements = new Map();
function element(id) {
  if (!elements.has(id)) elements.set(id, { classList: { add() {}, remove() {}, toggle() {} }, style: {} });
  return elements.get(id);
}
const context = {
  console,
  preguntasMultimediaMoviles: nueva.preguntas,
  preguntasServiciosProcesos: servicios.preguntas,
  preguntasDesarrolloInterfaces: interfaces.preguntas,
  bancoDePreguntas,
  document: { addEventListener() {}, getElementById: element },
  alert: message => { throw new Error(message); }
};
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(root, "www/asignaturas.js"), "utf8"), context);
vm.runInContext(fs.readFileSync(path.join(root, "www/script.js"), "utf8"), context);
assert.equal(context.estaExamenDisponible("multimediaMoviles"), false);
for (const id of anteriores) assert.equal(context.estaExamenDisponible(id), true);
vm.runInContext(`
  resaltarAsignaturaSeleccionada = () => {};
  sincronizarConfigRango = () => {};
  sincronizarConfigAsignatura = () => {};
  actualizarPreviewTotal = () => {};
  mostrarSelectorModo = () => {};
  aplicarUIsegunModo = () => {};
  cargarPregunta = () => {};
  seleccionarAsignatura("multimediaMoviles");
`, context);
assert.equal(element("btn-modo-examen").disabled, true);
context.abrirModalConfig("examen");
context.iniciarTest("multimediaMoviles", "examen");
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
context.iniciarTest("multimediaMoviles", "estudio");
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 41)", context));
vm.runInContext(`
  config.usarRango = true;
  config.rangoDesde = 1;
  config.rangoHasta = 10;
  config.mezclarPreguntas = false;
  iniciarTest("multimediaMoviles", "estudio");
`, context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
vm.runInContext(`
  modoPendiente = "examen";
  continuarSesionGuardada();
  seleccionarAsignatura("sistemas");
`, context);
assert.equal(element("btn-modo-examen").disabled, false);
// Simulación aislada: ningún ID ficticio se escribe en el contenido de la app.
vm.runInContext(`
  const asignaturaPrueba = obtenerAsignatura("multimediaMoviles");
  asignaturaPrueba.preguntas = [...asignaturaPrueba.preguntas, ...Array.from({length:39}, (_, i) => ({id: i + 1}))];
`, context);
assert.equal(context.estaExamenDisponible("multimediaMoviles"), false);
vm.runInContext('asignaturaPrueba.preguntas.push({id: 40});', context);
assert.equal(context.estaExamenDisponible("multimediaMoviles"), true);
console.log("Nueva asignatura: JSON, IDs, respuestas, estudio y bloqueo/reactivación del examen verificados. Bancos anteriores intactos.");

vm.runInContext(`
  preguntasActuales = [];
  seleccionarAsignatura("serviciosProcesos");
  modoPendiente = "estudio";
`, context);
assert.equal(element("btn-modo-examen").disabled, true);
assert.equal(context.estaExamenDisponible("serviciosProcesos"), false);
context.abrirModalConfig("examen");
context.iniciarTest("serviciosProcesos", "examen");
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('modoPendiente = "examen"; continuarSesionGuardada();', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
context.iniciarTest("serviciosProcesos", "estudio");
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
vm.runInContext('config.usarRango = false; iniciarTest("serviciosProcesos", "estudio");', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
for (const p of servicios.preguntas) {
  const shuffled = context.barajarOpcionesPregunta(bancoDePreguntas.serviciosProcesos.find(q => q.id === p.id));
  assert.equal(shuffled.opciones[shuffled.correcta], p.respuesta_correcta);
}
vm.runInContext(`
  const serviciosPrueba = obtenerAsignatura("serviciosProcesos");
  serviciosPrueba.preguntas = [...serviciosPrueba.preguntas, ...Array.from({length:39}, (_, i) => ({id: i + 1}))];
`, context);
assert.equal(context.estaExamenDisponible("serviciosProcesos"), false);
vm.runInContext('serviciosPrueba.preguntas.push({id: 40});', context);
assert.equal(context.estaExamenDisponible("serviciosProcesos"), true);
console.log("Servicios y procesos: 10 preguntas, soluciones, estudio y examen condicionado verificados.");

vm.runInContext(`
  preguntasActuales = [];
  seleccionarAsignatura("desarrolloInterfaces");
  modoPendiente = "estudio";
`, context);
assert.equal(element("btn-modo-examen").disabled, true);
assert.equal(context.estaExamenDisponible("desarrolloInterfaces"), false);
context.abrirModalConfig("examen");
context.iniciarTest("desarrolloInterfaces", "examen");
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('modoPendiente = "examen"; continuarSesionGuardada();', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
context.iniciarTest("desarrolloInterfaces", "estudio");
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 41)", context));
for (const p of interfaces.preguntas) {
  const shuffled = context.barajarOpcionesPregunta(bancoDePreguntas.desarrolloInterfaces.find(q => q.id === p.id));
  assert.equal(shuffled.opciones[shuffled.correcta], p.respuesta_correcta);
}
vm.runInContext(`
  const interfacesPrueba = obtenerAsignatura("desarrolloInterfaces");
  interfacesPrueba.preguntas = [...interfacesPrueba.preguntas, ...Array.from({length:39}, (_, i) => ({id: i + 1}))];
`, context);
assert.equal(context.estaExamenDisponible("desarrolloInterfaces"), false);
vm.runInContext('interfacesPrueba.preguntas.push({id: 40});', context);
assert.equal(context.estaExamenDisponible("desarrolloInterfaces"), true);
console.log("Desarrollo de interfaces: 10 preguntas, soluciones, estudio y examen condicionado verificados.");
