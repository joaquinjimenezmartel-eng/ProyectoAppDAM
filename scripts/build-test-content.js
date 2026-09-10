// Genera únicamente el banco nuevo desde sus JSON; no reescribe bancos existentes.
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const dir = path.join(root, "contenido/tests/multimediaMoviles");
const preguntas = fs.readdirSync(dir).filter(name => name.endsWith(".json")).sort().flatMap(name => {
  const test = JSON.parse(fs.readFileSync(path.join(dir, name), "utf8"));
  if (test.asignaturaId !== "multimediaMoviles") throw new Error(`Asignatura incorrecta: ${name}`);
  return test.preguntas.map(({ numeroOriginal, ...pregunta }) => pregunta);
}).sort((a, b) => a.id - b.id);
if (new Set(preguntas.map(p => p.id)).size !== preguntas.length) throw new Error("IDs duplicados en multimediaMoviles");
fs.writeFileSync(path.join(root, "www/preguntas/preguntas-multimedia-moviles.js"),
  "// Generado desde contenido/tests/multimediaMoviles/*.json. Ejecutar npm run build:content.\nconst preguntasMultimediaMoviles = " + JSON.stringify(preguntas, null, 2) + ";\n");
console.log(`Multimedia y móviles: ${preguntas.length} preguntas sincronizadas desde JSON.`);
