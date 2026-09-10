const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { cargarContenido, calcularHuellaContenidoEvaluable } = require("./validate-content.js");
const root = path.resolve(__dirname, "..");
const { catalogo, bancoDePreguntas } = cargarContenido();
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

const elements = new Map();
function element(id) {
  if (!elements.has(id)) elements.set(id, { classList: { add() {}, remove() {}, toggle() {} }, style: {} });
  return elements.get(id);
}
const context = {
  console,
  preguntasMultimediaMoviles: nueva.preguntas,
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
