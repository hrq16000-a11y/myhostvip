import { readFileSync } from "node:fs";

const [major, minor] = process.versions.node.split(".").map(Number);
if (major < 22 || (major === 22 && minor < 12)) {
  console.error(`Node.js ${process.versions.node} não atende ao mínimo 22.12.`);
  process.exit(1);
}
const manifest = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const viteRange = manifest.devDependencies?.vite ?? "";
if (!/^[~^]?8\./.test(viteRange)) {
  console.error(`Esperado Vite 8, encontrado ${viteRange || "ausente"}.`);
  process.exit(1);
}
console.log(`Compatível: Node.js ${process.versions.node} e Vite ${viteRange}.`);
