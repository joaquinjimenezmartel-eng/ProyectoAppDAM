const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const WEB_ROOT = path.join(PROJECT_ROOT, "www");
const INDEX_PATH = path.join(WEB_ROOT, "index.html");
const MANIFEST_PATH = path.join(WEB_ROOT, "manifest.webmanifest");
// Actualizar únicamente cuando se autorice expresamente un cambio en el banco de test.
const HUELLA_CONTENIDO_EVALUABLE = "339c3bcc2e35d4fad7909677446f215ccbd170151184424668498d091c933ba1";

function normalizarTexto(texto) {
  return typeof texto === "string" ? texto.trim().replace(/\s+/g, " ") : "";
}

function normalizarRespuesta(texto) {
  return normalizarTexto(texto).toLocaleLowerCase("es");
}

const PATRONES_EDITORIALES_NO_PUBLICABLES = [
  /\b(?:el|este|nuestro) temario\b/i,
  /\b(?:en|según|para) (?:este|el) (?:test|examen)\b/i,
  /\b(?:pdf|apuntes) (?:oficiales?|adjuntos?)\b/i,
  /\b(?:este|el) tema\b/i,
  /\beste contenido\b/i,
  /\b(?:respuesta|opción) (?:oficial|esperada)\b/i,
  /\bcriterio (?:de corrección )?(?:del|de este) (?:test|examen)\b/i,
  /\b(?:el )?banco (?:de preguntas|insiste|recuerda|recalca|remarca|subraya)\b/i,
  /^(?:Metáfora|Técnico|Explicación fácil):/i,
  /Por qué esa es la buena:/i,
  /Por qué las otras no:/i,
  /Idea fácil para recordar:/i
];

function encontrarPatronEditorial(texto) {
  return PATRONES_EDITORIALES_NO_PUBLICABLES.find((patron) => patron.test(texto || ""));
}

function calcularHuellaContenidoEvaluable(catalogo) {
  const contenidoProtegido = catalogo.flatMap((asignatura) =>
    asignatura.preguntas.map((pregunta) => ({
      asignatura: asignatura.id,
      id: pregunta.id,
      pregunta: pregunta.pregunta,
      opciones: pregunta.opciones,
      correcta: pregunta.correcta,
      respuesta_correcta: pregunta.respuesta_correcta,
      imagen: pregunta.imagen
    }))
  );

  return crypto
    .createHash("sha256")
    .update(JSON.stringify(contenidoProtegido))
    .digest("hex");
}

function cargarContenido() {
  const html = fs.readFileSync(INDEX_PATH, "utf8");
  const scripts = [...html.matchAll(/<script\s+src=["']([^"']+)["'][^>]*><\/script>/g)]
    .map((coincidencia) => coincidencia[1])
    .map((src) => src.split(/[?#]/, 1)[0])
    .filter((src) => src !== "script.js");

  const codigo = scripts
    .map((src) => fs.readFileSync(path.join(WEB_ROOT, src), "utf8"))
    .join("\n");

  const expresionResultado = `
    JSON.stringify({
      catalogo: catalogoAsignaturas.map((asignatura) => ({
        id: asignatura.id,
        nombre: asignatura.nombre,
        sigla: asignatura.sigla,
        color: asignatura.color,
        preguntas: asignatura.preguntas,
        resumen: asignatura.resumen
      })),
      bancoDePreguntas,
      bancoDeResumenes
    })
  `;

  return JSON.parse(vm.runInNewContext(`${codigo}\n${expresionResultado}`, {
    console: { warn() {} }
  }));
}

function validar() {
  const errores = [];
  const { catalogo, bancoDePreguntas, bancoDeResumenes } = cargarContenido();
  const html = fs.readFileSync(INDEX_PATH, "utf8");
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
  const idsAsignaturas = new Set();
  let totalPreguntas = 0;

  if (!/viewport-fit=cover/i.test(html)) {
    errores.push("La ventana móvil no permite cubrir las zonas seguras del dispositivo.");
  }
  if (!/apple-mobile-web-app-status-bar-style[\s\S]*black-translucent/i.test(html)) {
    errores.push("La web-app de iOS no tiene configurada la barra de estado translúcida.");
  }
  if (manifest.display !== "standalone" || !manifest.start_url || !manifest.scope) {
    errores.push("El manifiesto de la web-app no contiene una configuración standalone completa.");
  }

  const huellaActual = calcularHuellaContenidoEvaluable(catalogo);
  if (huellaActual !== HUELLA_CONTENIDO_EVALUABLE) {
    errores.push(
      "Se ha modificado contenido evaluable protegido (enunciados, opciones, respuestas, IDs, orden o imágenes)."
    );
  }

  if (!Array.isArray(catalogo) || catalogo.length === 0) {
    errores.push("El catálogo de asignaturas está vacío.");
  }

  for (const asignatura of catalogo) {
    const prefijo = `Asignatura ${asignatura.id || "sin-id"}`;

    if (!/^[a-z][a-zA-Z0-9]*$/.test(asignatura.id || "")) {
      errores.push(`${prefijo}: el identificador no es válido.`);
    }
    if (idsAsignaturas.has(asignatura.id)) {
      errores.push(`${prefijo}: identificador duplicado.`);
    }
    idsAsignaturas.add(asignatura.id);

    if (!normalizarTexto(asignatura.nombre)) {
      errores.push(`${prefijo}: falta el nombre visible.`);
    }
    if (!/^[A-Z]{2,3}$/.test(asignatura.sigla || "")) {
      errores.push(`${prefijo}: la sigla visual debe tener entre dos y tres letras mayúsculas.`);
    }
    const componentesColor = (asignatura.color || "").split(",").map((valor) => Number(valor.trim()));
    if (
      componentesColor.length !== 3 ||
      componentesColor.some((valor) => !Number.isInteger(valor) || valor < 0 || valor > 255)
    ) {
      errores.push(`${prefijo}: el color visual debe usar el formato R, G, B.`);
    }
    if (!normalizarTexto(asignatura.resumen)) {
      errores.push(`${prefijo}: falta el resumen.`);
    }
    const patronResumen = encontrarPatronEditorial(asignatura.resumen);
    if (patronResumen) {
      errores.push(`${prefijo}: el resumen contiene lenguaje editorial no publicable (${patronResumen}).`);
    }

    const preguntas = Array.isArray(asignatura.preguntas) ? asignatura.preguntas : [];
    const preguntasNormalizadas = bancoDePreguntas[asignatura.id];
    const idsPreguntas = new Set();
    totalPreguntas += preguntas.length;

    if (preguntas.length === 0) {
      errores.push(`${prefijo}: no contiene preguntas.`);
    }
    if (!Array.isArray(preguntasNormalizadas) || preguntasNormalizadas.length !== preguntas.length) {
      errores.push(`${prefijo}: el banco normalizado no coincide con el catálogo.`);
    }
    if (!normalizarTexto(bancoDeResumenes[asignatura.id])) {
      errores.push(`${prefijo}: no está registrado en el banco de resúmenes.`);
    }

    preguntas.forEach((pregunta, indice) => {
      const etiqueta = `${prefijo}, pregunta ${pregunta.id ?? `posición ${indice + 1}`}`;
      const id = Number(pregunta.id);

      if (!Number.isInteger(id) || id < 1) {
        errores.push(`${etiqueta}: el ID debe ser un entero positivo.`);
      } else if (idsPreguntas.has(id)) {
        errores.push(`${etiqueta}: ID duplicado.`);
      }
      idsPreguntas.add(id);

      if (!normalizarTexto(pregunta.pregunta)) {
        errores.push(`${etiqueta}: falta el enunciado.`);
      }
      if (!Array.isArray(pregunta.opciones) || pregunta.opciones.length < 2) {
        errores.push(`${etiqueta}: debe contener al menos dos opciones.`);
        return;
      }
      pregunta.opciones.forEach((opcion, opcionIndice) => {
        if (!normalizarTexto(opcion)) {
          errores.push(`${etiqueta}: la opción ${opcionIndice + 1} está vacía.`);
        }
      });

      if (Number.isInteger(pregunta.correcta)) {
        if (pregunta.correcta < 0 || pregunta.correcta >= pregunta.opciones.length) {
          errores.push(`${etiqueta}: el índice de respuesta correcta está fuera de rango.`);
        }
      } else {
        const respuesta = typeof pregunta.respuesta_correcta === "string"
          ? pregunta.respuesta_correcta
          : pregunta.correcta;
        const coincidencias = pregunta.opciones.filter(
          (opcion) => normalizarRespuesta(opcion) === normalizarRespuesta(respuesta)
        );
        if (coincidencias.length !== 1) {
          errores.push(`${etiqueta}: la respuesta correcta debe coincidir exactamente con una opción.`);
        }
      }

      if (!normalizarTexto(pregunta.explicacion)) {
        errores.push(`${etiqueta}: falta la explicación.`);
      }
      const patronExplicacion = encontrarPatronEditorial(pregunta.explicacion);
      if (patronExplicacion) {
        errores.push(`${etiqueta}: la explicación contiene lenguaje editorial no publicable (${patronExplicacion}).`);
      }

      if (pregunta.imagen) {
        const rutaImagen = path.resolve(WEB_ROOT, pregunta.imagen);
        if (!rutaImagen.startsWith(`${WEB_ROOT}${path.sep}`) || !fs.existsSync(rutaImagen)) {
          errores.push(`${etiqueta}: no existe la imagen ${pregunta.imagen}.`);
        }
      }
    });
  }

  const clavesPreguntas = Object.keys(bancoDePreguntas);
  const clavesResumenes = Object.keys(bancoDeResumenes);
  for (const clave of [...clavesPreguntas, ...clavesResumenes]) {
    if (!idsAsignaturas.has(clave)) {
      errores.push(`La clave ${clave} no existe en el catálogo de asignaturas.`);
    }
  }

  if (errores.length > 0) {
    console.error(`Validación fallida (${errores.length} errores):`);
    errores.forEach((error) => console.error(`- ${error}`));
    process.exitCode = 1;
    return;
  }

  console.log(`Contenido válido: ${catalogo.length} asignaturas y ${totalPreguntas} preguntas.`);
}

try {
  validar();
} catch (error) {
  console.error(`No se pudo validar el contenido: ${error.message}`);
  process.exitCode = 1;
}
