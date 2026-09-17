const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { cargarContenido, calcularHuellaContenidoEvaluable } = require("./validate-content.js");
const root = path.resolve(__dirname, "..");
const { catalogo, bancoDePreguntas } = cargarContenido();
const catalogoAntesNuevasU2 = catalogo.map((asignatura) =>
  ["multimediaMoviles", "serviciosProcesos", "desarrolloInterfaces", "accesoDatos", "sistemasGestionEmpresarial"].includes(asignatura.id)
    ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 50) }
    : asignatura);
const catalogoAntesServiciosU2 = catalogo.map((asignatura) =>
  ["serviciosProcesos", "desarrolloInterfaces", "accesoDatos", "sistemasGestionEmpresarial"].includes(asignatura.id)
    ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 50) }
    : asignatura);
const catalogoAntesInterfacesU2 = catalogo.map((asignatura) =>
  ["desarrolloInterfaces", "accesoDatos", "sistemasGestionEmpresarial"].includes(asignatura.id)
    ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 50) }
    : asignatura);
const catalogoAntesAccesoU2 = catalogo.map((asignatura) =>
  ["accesoDatos", "sistemasGestionEmpresarial"].includes(asignatura.id)
    ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 50) }
    : asignatura);
const catalogoAntesGestionU2 = catalogo.map((asignatura) => asignatura.id === "sistemasGestionEmpresarial"
  ? { ...asignatura, preguntas: asignatura.preguntas.filter(pregunta => pregunta.id <= 50) }
  : asignatura);
// Protege también la incorporación anterior de Multimedia (760 preguntas).
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesNuevasU2.filter(a => !["serviciosProcesos", "desarrolloInterfaces", "accesoDatos", "sistemasGestionEmpresarial"].includes(a.id))),
  "71b75def7dc4a448f6c3a5572b9fcd95cd2fe2acce862d9ff61cc0c310c65e52");
// La nueva asignatura no permite modificar las 770 preguntas ya incorporadas.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesNuevasU2.filter(a => !["desarrolloInterfaces", "accesoDatos", "sistemasGestionEmpresarial"].includes(a.id))),
  "31d2e6c9049e08a585cfaa66544ed97a6d52c6c53da60b2533554b20b5f00211");
// Acceso a datos no permite modificar las 780 preguntas incorporadas previamente.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesNuevasU2.filter(a => !["accesoDatos", "sistemasGestionEmpresarial"].includes(a.id))),
  "3506ac008a7f41f7c56b1d608bbf31602b49eaf6c3b85a1b2d33eaa23c7e571a");
// Sistemas de gestión empresarial no permite modificar las 790 preguntas anteriores.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesNuevasU2.filter(a => a.id !== "sistemasGestionEmpresarial")),
  "5be30c132000175960719ba7c8b5f7a140f8e5db583cffb9efeb2b9cd3926ca6");
// La U2 no permite modificar las 800 preguntas existentes antes de su incorporación.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesNuevasU2),
  "12c1962fa60d910486aeb2d16d94fe5497ac9b71d46f3b8ec5680cc4cb58ce4c");
// La U2 de Servicios y procesos tampoco puede alterar las 810 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesServiciosU2),
  "652337139f51e1abac0b9562e36b27e8cbd6b09ba4fb5f6416ad3107f5748857");
// La U2 de Desarrollo de interfaces no puede alterar las 820 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesInterfacesU2),
  "cadebd48c99711ad5ebb1f56b4b5fdec54276042f53bf1c48159badcf4453c9a");
// La U2 de Acceso a datos no puede alterar las 830 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesAccesoU2),
  "0c47ea626aef5677176dde74bcab417e05c44b0fffa63fd792b4244dd0ad47cb");
// La U2 de Sistemas de gestión empresarial no puede alterar las 840 preguntas ya existentes.
assert.equal(calcularHuellaContenidoEvaluable(catalogoAntesGestionU2),
  "4476aa403fb0bfa6d2f2d437b9ef1908941d33d82d7d4084569d35c05032d238");
const testsServicios = ["u1-test1.json", "u2-test1.json"].flatMap((nombre) =>
  JSON.parse(fs.readFileSync(path.join(root, "contenido/tests/serviciosProcesos", nombre), "utf8")).preguntas);
const servicios = catalogo.find(a => a.id === "serviciosProcesos");
assert.deepEqual(servicios.preguntas, testsServicios.map(({ numeroOriginal, ...p }) => p));
assert.deepEqual(servicios.preguntas.map(p => p.id), Array.from({ length: 20 }, (_, i) => 41 + i));
assert.deepEqual(bancoDePreguntas.serviciosProcesos.map(p => p.correcta),
  [0, 0, 0, 2, 3, 1, 1, 1, 3, 0, 1, 3, 3, 3, 1, 0, 1, 0, 2, 3]);
assert.ok(servicios.preguntas[0].opciones.slice(0, 3).every(opcion => opcion.includes("a la secundaria")));
assert.ok(servicios.preguntas[7].opciones[0].includes("a medida que"));
assert.equal(servicios.preguntas.find(p => p.id === 53).respuesta_correcta, "D. Todas las opciones anteriores son correctas.");
assert.equal(servicios.preguntas.find(p => p.id === 54).pregunta, "¿Cuándo utilizaremos notifyAll() y cuándo notify()?");
assert.ok(servicios.preguntas.find(p => p.id === 56).opciones[2].includes("finalizará"));
assert.ok(servicios.preguntas.find(p => p.id === 56).opciones[3].includes("finalizarán"));
// La incorporación de una asignatura NO permite actualizar las 750 preguntas anteriores.
const anteriores = ["sistemas", "bases", "entornos", "programacion", "empleabilidad", "lenguajeMarcas"];
assert.equal(calcularHuellaContenidoEvaluable(catalogo.filter(a => anteriores.includes(a.id))),
  "339c3bcc2e35d4fad7909677446f215ccbd170151184424668498d091c933ba1");
const testsMultimedia = ["u1-test1.json", "u2-test1.json"].flatMap((nombre) =>
  JSON.parse(fs.readFileSync(path.join(root, "contenido/tests/multimediaMoviles", nombre), "utf8")).preguntas);
const nueva = catalogo.find(a => a.id === "multimediaMoviles");
assert.deepEqual(nueva.preguntas, testsMultimedia.map(({ numeroOriginal, ...p }) => p));
assert.deepEqual(nueva.preguntas.map(p => p.id), Array.from({ length: 20 }, (_, i) => 41 + i));
assert.deepEqual(bancoDePreguntas.multimediaMoviles.map(p => p.correcta),
  [2, 3, 1, 1, 2, 2, 3, 0, 2, 0, 2, 2, 0, 0, 1, 1, 1, 3, 3, 2]);
assert.ok(nueva.preguntas.find(p => p.id === 49).pregunta.includes("UMTS"));
assert.equal(nueva.preguntas.find(p => p.id === 51).respuesta_correcta, "C. Marshmallow.");
assert.equal(nueva.preguntas.find(p => p.id === 52).respuesta_correcta, "C. Carpeta res/Gradle.");
const testsInterfaces = ["u1-test1.json", "u2-test1.json"].flatMap((nombre) =>
  JSON.parse(fs.readFileSync(path.join(root, "contenido/tests/desarrolloInterfaces", nombre), "utf8")).preguntas);
const interfaces = catalogo.find(a => a.id === "desarrolloInterfaces");
assert.deepEqual(interfaces.preguntas, testsInterfaces.map(({ numeroOriginal, ...p }) => p));
assert.deepEqual(interfaces.preguntas.map(p => p.id), Array.from({ length: 20 }, (_, i) => 41 + i));
assert.deepEqual(bancoDePreguntas.desarrolloInterfaces.map(p => p.correcta),
  [1, 2, 3, 1, 0, 2, 3, 3, 1, 0, 2, 1, 1, 3, 3, 2, 0, 2, 0, 2]);
assert.equal(interfaces.preguntas[3].respuesta_correcta, interfaces.preguntas[3].opciones[1]);
assert.equal(interfaces.preguntas[9].respuesta_correcta, "A. El prototipo");
assert.equal(interfaces.preguntas.find(p => p.id === 58).respuesta_correcta, "C. Son elementos contenedores.");
assert.equal(interfaces.preguntas.find(p => p.id === 58).pregunta, "Los layouts son:");
assert.ok(interfaces.preguntas.find(p => p.id === 59).opciones[2].includes("simultáneas"));
assert.equal(interfaces.preguntas.find(p => p.id === 60).opciones[1], "B. Se recomienda evitar la POO.");
const testsAccesoDatos = ["u1-test1.json", "u2-test1.json"].flatMap((nombre) =>
  JSON.parse(fs.readFileSync(path.join(root, "contenido/tests/accesoDatos", nombre), "utf8")).preguntas);
const accesoDatos = catalogo.find(a => a.id === "accesoDatos");
assert.deepEqual(accesoDatos.preguntas, testsAccesoDatos.map(({ numeroOriginal, ...p }) => p));
assert.deepEqual(accesoDatos.preguntas.map(p => p.id), Array.from({ length: 20 }, (_, i) => 41 + i));
assert.deepEqual(bancoDePreguntas.accesoDatos.map(p => p.correcta),
  [3, 0, 1, 3, 0, 3, 1, 3, 2, 3, 0, 1, 2, 0, 2, 2, 2, 0, 3, 1]);
assert.equal(accesoDatos.preguntas[4].respuesta_correcta, "A. Atomic.");
assert.equal(accesoDatos.preguntas[8].respuesta_correcta, "C. Bases de datos NoSQL.");
assert.equal(accesoDatos.preguntas.find(p => p.id === 57).respuesta_correcta, "C. Las dos anteriores son válidas.");
assert.equal(accesoDatos.preguntas.find(p => p.id === 58).pregunta, "RandomAccessFile es una clase para:");
assert.equal(accesoDatos.preguntas.find(p => p.id === 59).pregunta, "Try, catch y finally se emplean para:");
const testsGestion = ["u1-test1.json", "u2-test1.json"].flatMap((nombre) =>
  JSON.parse(fs.readFileSync(path.join(root, "contenido/tests/sistemasGestionEmpresarial", nombre), "utf8")).preguntas);
const gestion = catalogo.find(a => a.id === "sistemasGestionEmpresarial");
assert.deepEqual(gestion.preguntas, testsGestion.map(({ numeroOriginal, ...p }) => p));
assert.deepEqual(gestion.preguntas.map(p => p.id), Array.from({ length: 20 }, (_, i) => 41 + i));
assert.deepEqual(bancoDePreguntas.sistemasGestionEmpresarial.map(p => p.correcta),
  [3, 1, 0, 2, 0, 2, 3, 1, 1, 3, 3, 3, 1, 1, 0, 2, 2, 0, 3, 3]);
assert.equal(gestion.preguntas[7].pregunta, "Las siglas ERP corresponden con:");
assert.equal(gestion.preguntas[7].respuesta_correcta, "B. Sistemas de colaboración empresarial.");
assert.equal(gestion.preguntas.find(p => p.id === 53).respuesta_correcta, "B. Data Warehouse.");
assert.equal(gestion.preguntas.find(p => p.id === 59).respuesta_correcta, "D. A y B son correctas.");
assert.equal(gestion.preguntas.find(p => p.id === 60).respuesta_correcta, "D. A y B son correctas.");

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
  preguntasAccesoDatos: accesoDatos.preguntas,
  preguntasSistemasGestionEmpresarial: gestion.preguntas,
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
assert.equal(vm.runInContext("preguntasActuales.length", context), 20);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 41 && p.id <= 60)", context));
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
vm.runInContext('config.usarRango = false; iniciarTest("serviciosProcesos", "estudio");', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 20);
vm.runInContext(`
  config.usarRango = true;
  config.rangoDesde = 11;
  config.rangoHasta = 20;
  config.mezclarPreguntas = false;
  iniciarTest("serviciosProcesos", "estudio");
`, context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 51 && p.id <= 60)", context));
vm.runInContext("config.usarRango = false", context);
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
console.log("Servicios y procesos: 20 preguntas, soluciones, estudio y examen condicionado verificados.");

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
vm.runInContext('config.usarRango = false; iniciarTest("desarrolloInterfaces", "estudio");', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 20);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 41 && p.id <= 60)", context));
vm.runInContext(`
  config.usarRango = true;
  config.rangoDesde = 11;
  config.rangoHasta = 20;
  config.mezclarPreguntas = false;
  iniciarTest("desarrolloInterfaces", "estudio");
`, context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 51 && p.id <= 60)", context));
vm.runInContext("config.usarRango = false", context);
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
console.log("Desarrollo de interfaces: 20 preguntas, soluciones, estudio y examen condicionado verificados.");

vm.runInContext(`
  preguntasActuales = [];
  seleccionarAsignatura("accesoDatos");
  modoPendiente = "estudio";
`, context);
assert.equal(element("btn-modo-examen").disabled, true);
assert.equal(context.estaExamenDisponible("accesoDatos"), false);
context.abrirModalConfig("examen");
context.iniciarTest("accesoDatos", "examen");
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('modoPendiente = "examen"; continuarSesionGuardada();', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('config.usarRango = false; iniciarTest("accesoDatos", "estudio");', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 20);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 41 && p.id <= 60)", context));
vm.runInContext(`
  config.usarRango = true;
  config.rangoDesde = 11;
  config.rangoHasta = 20;
  config.mezclarPreguntas = false;
  iniciarTest("accesoDatos", "estudio");
`, context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 51 && p.id <= 60)", context));
vm.runInContext("config.usarRango = false", context);
for (const p of accesoDatos.preguntas) {
  const shuffled = context.barajarOpcionesPregunta(bancoDePreguntas.accesoDatos.find(q => q.id === p.id));
  assert.equal(shuffled.opciones[shuffled.correcta], p.respuesta_correcta);
}
vm.runInContext(`
  const accesoDatosPrueba = obtenerAsignatura("accesoDatos");
  accesoDatosPrueba.preguntas = [...accesoDatosPrueba.preguntas, ...Array.from({length:39}, (_, i) => ({id: i + 1}))];
`, context);
assert.equal(context.estaExamenDisponible("accesoDatos"), false);
vm.runInContext('accesoDatosPrueba.preguntas.push({id: 40});', context);
assert.equal(context.estaExamenDisponible("accesoDatos"), true);
console.log("Acceso a datos: 20 preguntas, soluciones, estudio y examen condicionado verificados.");

vm.runInContext(`
  preguntasActuales = [];
  seleccionarAsignatura("sistemasGestionEmpresarial");
  modoPendiente = "estudio";
`, context);
assert.equal(element("btn-modo-examen").disabled, true);
assert.equal(context.estaExamenDisponible("sistemasGestionEmpresarial"), false);
context.abrirModalConfig("examen");
context.iniciarTest("sistemasGestionEmpresarial", "examen");
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('modoPendiente = "examen"; continuarSesionGuardada();', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 0);
vm.runInContext('config.usarRango = false; iniciarTest("sistemasGestionEmpresarial", "estudio");', context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 20);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 41 && p.id <= 60)", context));
vm.runInContext(`
  config.usarRango = true;
  config.rangoDesde = 11;
  config.rangoHasta = 20;
  config.mezclarPreguntas = false;
  iniciarTest("sistemasGestionEmpresarial", "estudio");
`, context);
assert.equal(vm.runInContext("preguntasActuales.length", context), 10);
assert.ok(vm.runInContext("preguntasActuales.every(p => p.id >= 51 && p.id <= 60)", context));
vm.runInContext("config.usarRango = false", context);
for (const p of gestion.preguntas) {
  const shuffled = context.barajarOpcionesPregunta(bancoDePreguntas.sistemasGestionEmpresarial.find(q => q.id === p.id));
  assert.equal(shuffled.opciones[shuffled.correcta], p.respuesta_correcta);
}
vm.runInContext(`
  const gestionPrueba = obtenerAsignatura("sistemasGestionEmpresarial");
  gestionPrueba.preguntas = [...gestionPrueba.preguntas, ...Array.from({length:39}, (_, i) => ({id: i + 1}))];
`, context);
assert.equal(context.estaExamenDisponible("sistemasGestionEmpresarial"), false);
vm.runInContext('gestionPrueba.preguntas.push({id: 40});', context);
assert.equal(context.estaExamenDisponible("sistemasGestionEmpresarial"), true);
console.log("Sistemas de gestión empresarial: 20 preguntas, soluciones, estudio y examen condicionado verificados.");
