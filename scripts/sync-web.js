const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const SOURCE_DIR = path.join(PROJECT_ROOT, "www");
const TARGET_DIR = path.join(PROJECT_ROOT, "docs");

if (path.basename(SOURCE_DIR) !== "www" || path.basename(TARGET_DIR) !== "docs") {
  throw new Error("Rutas de sincronización no válidas.");
}

fs.rmSync(TARGET_DIR, { recursive: true, force: true });
fs.cpSync(SOURCE_DIR, TARGET_DIR, { recursive: true });

console.log("GitHub Pages sincronizado: www -> docs.");
