(function inicializarModuloProgreso(global) {
  "use strict";

  const STORAGE_KEY = "dam-test:progreso:v1";

  function numeroSeguro(valor) {
    const numero = Number(valor);
    return Number.isFinite(numero) && numero >= 0 ? Math.floor(numero) : 0;
  }

  function crearAsignaturaVacia() {
    return {
      preguntasPracticadas: [],
      preguntas: {},
      respuestas: 0,
      aciertos: 0,
      fallos: 0,
      sesionesIniciadas: 0,
      sesionesCompletadas: 0,
      ultimaActividad: null,
      ultimaSesion: null
    };
  }

  function normalizarAsignatura(valor) {
    const origen = valor && typeof valor === "object" ? valor : {};
    const ids = Array.isArray(origen.preguntasPracticadas)
      ? [...new Set(origen.preguntasPracticadas.map(String))]
      : [];
    const preguntasOrigen = origen.preguntas && typeof origen.preguntas === "object"
      ? origen.preguntas
      : {};
    const preguntas = {};

    Object.entries(preguntasOrigen).forEach(([id, datosPregunta]) => {
      const datos = datosPregunta && typeof datosPregunta === "object" ? datosPregunta : {};
      preguntas[String(id)] = {
        respuestas: numeroSeguro(datos.respuestas),
        aciertos: numeroSeguro(datos.aciertos),
        fallos: numeroSeguro(datos.fallos),
        ultimaActividad: typeof datos.ultimaActividad === "string" ? datos.ultimaActividad : null
      };
    });

    return {
      preguntasPracticadas: ids,
      preguntas,
      respuestas: numeroSeguro(origen.respuestas),
      aciertos: numeroSeguro(origen.aciertos),
      fallos: numeroSeguro(origen.fallos),
      sesionesIniciadas: numeroSeguro(origen.sesionesIniciadas),
      sesionesCompletadas: numeroSeguro(origen.sesionesCompletadas),
      ultimaActividad: typeof origen.ultimaActividad === "string" ? origen.ultimaActividad : null,
      ultimaSesion: origen.ultimaSesion && typeof origen.ultimaSesion === "object"
        ? origen.ultimaSesion
        : null
    };
  }

  function crearGestorProgreso(storage) {
    function leerEstado() {
      if (!storage || typeof storage.getItem !== "function") {
        return { version: 1, asignaturas: {} };
      }

      try {
        const guardado = JSON.parse(storage.getItem(STORAGE_KEY) || "null");
        const asignaturas = guardado && typeof guardado.asignaturas === "object"
          ? guardado.asignaturas
          : {};

        return { version: 1, asignaturas };
      } catch (error) {
        return { version: 1, asignaturas: {} };
      }
    }

    function guardarEstado(estado) {
      if (!storage || typeof storage.setItem !== "function") return false;

      try {
        storage.setItem(STORAGE_KEY, JSON.stringify(estado));
        return true;
      } catch (error) {
        return false;
      }
    }

    function actualizarAsignatura(asignaturaId, actualizador) {
      if (!asignaturaId) return normalizarAsignatura(null);

      const estado = leerEstado();
      const actual = normalizarAsignatura(estado.asignaturas[asignaturaId]);
      const actualizado = normalizarAsignatura(actualizador(actual));
      estado.asignaturas[asignaturaId] = actualizado;
      guardarEstado(estado);
      return actualizado;
    }

    function obtenerAsignatura(asignaturaId) {
      const estado = leerEstado();
      const datos = normalizarAsignatura(estado.asignaturas[asignaturaId]);
      const porcentajeAciertos = datos.respuestas > 0
        ? Math.round((datos.aciertos / datos.respuestas) * 100)
        : 0;

      return {
        ...datos,
        totalPracticadas: datos.preguntasPracticadas.length,
        porcentajeAciertos
      };
    }

    function registrarInicio({ asignaturaId, modo, total }) {
      const fecha = new Date().toISOString();
      return actualizarAsignatura(asignaturaId, (datos) => ({
        ...datos,
        sesionesIniciadas: datos.sesionesIniciadas + 1,
        ultimaActividad: fecha,
        ultimaSesion: {
          fecha,
          modo: String(modo || "estudio"),
          total: numeroSeguro(total),
          aciertos: 0,
          fallos: 0,
          completada: false
        }
      }));
    }

    function registrarRespuesta({ asignaturaId, preguntaId, correcta }) {
      const fecha = new Date().toISOString();
      return actualizarAsignatura(asignaturaId, (datos) => {
        const preguntasPracticadas = [...datos.preguntasPracticadas];
        const id = String(preguntaId);
        if (!preguntasPracticadas.includes(id)) preguntasPracticadas.push(id);
        const preguntaAnterior = datos.preguntas[id] || {
          respuestas: 0,
          aciertos: 0,
          fallos: 0,
          ultimaActividad: null
        };

        return {
          ...datos,
          preguntasPracticadas,
          preguntas: {
            ...datos.preguntas,
            [id]: {
              respuestas: preguntaAnterior.respuestas + 1,
              aciertos: preguntaAnterior.aciertos + (correcta ? 1 : 0),
              fallos: preguntaAnterior.fallos + (correcta ? 0 : 1),
              ultimaActividad: fecha
            }
          },
          respuestas: datos.respuestas + 1,
          aciertos: datos.aciertos + (correcta ? 1 : 0),
          fallos: datos.fallos + (correcta ? 0 : 1),
          ultimaActividad: fecha
        };
      });
    }

    function registrarFinal({ asignaturaId, modo, total, aciertos, fallos }) {
      const fecha = new Date().toISOString();
      return actualizarAsignatura(asignaturaId, (datos) => ({
        ...datos,
        sesionesCompletadas: datos.sesionesCompletadas + 1,
        ultimaActividad: fecha,
        ultimaSesion: {
          fecha,
          modo: String(modo || "estudio"),
          total: numeroSeguro(total),
          aciertos: numeroSeguro(aciertos),
          fallos: numeroSeguro(fallos),
          completada: true
        }
      }));
    }

    return {
      obtenerAsignatura,
      registrarInicio,
      registrarRespuesta,
      registrarFinal
    };
  }

  let storage = null;
  try {
    storage = global.localStorage || null;
  } catch (error) {
    storage = null;
  }

  global.crearGestorProgreso = crearGestorProgreso;
  global.ProgresoEstudio = crearGestorProgreso(storage);

  if (typeof module !== "undefined" && module.exports) {
    module.exports = { crearGestorProgreso, STORAGE_KEY };
  }
})(typeof window !== "undefined" ? window : globalThis);
