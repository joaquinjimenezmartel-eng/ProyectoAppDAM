// Genera únicamente el banco nuevo desde sus JSON; no reescribe bancos existentes.
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const bancos = [
  ["multimediaMoviles", "multimedia-moviles", "preguntasMultimediaMoviles"],
  ["serviciosProcesos", "servicios-procesos", "preguntasServiciosProcesos"]
];
for (const [asignaturaId, archivo, variable] of bancos) {
const dir = path.join(root, "contenido/tests", asignaturaId);
const preguntas = fs.readdirSync(dir).filter(name => name.endsWith(".json")).sort().flatMap(name => {
  const test = JSON.parse(fs.readFileSync(path.join(dir, name), "utf8"));
  if (test.asignaturaId !== asignaturaId) throw new Error(`Asignatura incorrecta: ${name}`);
  return test.preguntas.map(({ numeroOriginal, ...pregunta }) => pregunta);
}).sort((a, b) => a.id - b.id);
if (new Set(preguntas.map(p => p.id)).size !== preguntas.length) throw new Error(`IDs duplicados en ${asignaturaId}`);
fs.writeFileSync(path.join(root, `www/preguntas/preguntas-${archivo}.js`),
  `// Generado desde contenido/tests/${asignaturaId}/*.json. Ejecutar npm run build:content.\nconst ${variable} = ` + JSON.stringify(preguntas, null, 2) + ";\n");
console.log(`${asignaturaId}: ${preguntas.length} preguntas sincronizadas desde JSON.`);
}
