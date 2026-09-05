const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const root = path.resolve(__dirname, "../www");
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const name = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(name) : [path.relative(root, name).split(path.sep).join("/")];
  });
}
const assets = walk(root).filter(name => !["offline-assets.js", "preguntas_backup.js", "sw.js"].includes(name)).sort();
const hash = crypto.createHash("sha256");
for (const name of [...assets, "sw.js"]) hash.update(name).update(fs.readFileSync(path.join(root, name)));
fs.writeFileSync(path.join(root, "offline-assets.js"), `// Generado por scripts/build-offline.js\nself.OFFLINE_VERSION = ${JSON.stringify(hash.digest("hex").slice(0, 16))};\nself.OFFLINE_ASSETS = ${JSON.stringify(assets, null, 2)};\n`);
console.log(`Offline: ${assets.length} recursos incluidos.`);
