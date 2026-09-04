const assert = require("node:assert/strict");
const { crearGestorProgreso, STORAGE_KEY } = require("../www/progreso.js");

function crearStorageMemoria() {
  const datos = new Map();
  return {
    getItem(clave) {
      return datos.has(clave) ? datos.get(clave) : null;
    },
    setItem(clave, valor) {
      datos.set(clave, String(valor));
    }
  };
}

const storage = crearStorageMemoria();
const progreso = crearGestorProgreso(storage);

assert.deepEqual(progreso.obtenerAsignatura("programacion").totalPracticadas, 0);

progreso.registrarInicio({ asignaturaId: "programacion", modo: "estudio", total: 40 });
progreso.registrarRespuesta({ asignaturaId: "programacion", preguntaId: 1, correcta: false });
progreso.registrarRespuesta({ asignaturaId: "programacion", preguntaId: 1, correcta: true });
progreso.registrarRespuesta({ asignaturaId: "programacion", preguntaId: 2, correcta: true });
progreso.registrarFinal({
  asignaturaId: "programacion",
  modo: "estudio",
  total: 40,
  aciertos: 2,
  fallos: 38
});

const guardado = crearGestorProgreso(storage).obtenerAsignatura("programacion");
assert.equal(guardado.totalPracticadas, 2);
assert.equal(guardado.respuestas, 3);
assert.equal(guardado.aciertos, 2);
assert.equal(guardado.fallos, 1);
assert.equal(guardado.porcentajeAciertos, 67);
assert.equal(guardado.sesionesIniciadas, 1);
assert.equal(guardado.sesionesCompletadas, 1);
assert.equal(guardado.ultimaSesion.completada, true);
assert.equal(guardado.preguntas["1"].respuestas, 2);
assert.equal(guardado.preguntas["1"].fallos, 1);
assert.equal(guardado.preguntas["2"].aciertos, 1);

progreso.guardarSesionActiva({
  asignaturaId: "programacion",
  modo: "examen",
  indice: 4,
  preguntas: [{ id: 8, ordenOpciones: [2, 0, 1] }],
  selecciones: [1],
  correctas: [true],
  config: { mezclarPreguntas: true }
});
progreso.guardarSesionActiva({
  asignaturaId: "programacion",
  modo: "estudio",
  indice: 2,
  preguntas: [{ id: 3, ordenOpciones: null }],
  completadas: [true],
  erroresEstudio: [[1]],
  config: { mezclarPreguntas: false }
});
const examen = crearGestorProgreso(storage).obtenerSesionActiva("programacion", "examen");
assert.equal(examen.indice, 4);
assert.deepEqual(examen.preguntas[0].ordenOpciones, [2, 0, 1]);
assert.equal(examen.selecciones[0], 1);
const estudio = progreso.obtenerSesionActiva("programacion", "estudio");
assert.equal(estudio.indice, 2);
assert.deepEqual(estudio.erroresEstudio[0], [1]);
progreso.eliminarSesionActiva("programacion", "examen");
assert.equal(progreso.obtenerSesionActiva("programacion", "examen"), null);
assert.ok(progreso.obtenerSesionActiva("programacion", "estudio"));

storage.setItem(STORAGE_KEY, "contenido no válido");
assert.equal(crearGestorProgreso(storage).obtenerAsignatura("bases").respuestas, 0);

console.log("Progreso persistente válido.");
