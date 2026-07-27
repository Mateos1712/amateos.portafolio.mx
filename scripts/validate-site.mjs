import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDirectory = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(scriptsDirectory, "..");
const html = readFileSync(join(projectRoot, "index.html"), "utf8");
const css = readFileSync(join(projectRoot, "style.css"), "utf8");
const manifest = readFileSync(join(projectRoot, "site.webmanifest"), "utf8");
const errors = [];

function requireText(source, value, label) {
  if (!source.includes(value)) {
    errors.push(`Falta ${label}: ${value}`);
  }
}

requireText(html, '<html lang="es">', "el idioma del documento");
requireText(html, 'name="description"', "la meta description");
requireText(
  html,
  '<link rel="canonical" href="https://mateos1712.github.io/amateos.portafolio.mx/" />',
  "la URL canonical",
);
requireText(html, 'property="og:image"', "la imagen Open Graph");
requireText(html, 'name="twitter:card"', "Twitter Card");
requireText(html, 'type="application/ld+json"', "los datos estructurados");
requireText(html, 'href="assets/favicon.svg"', "el favicon SVG");
requireText(css, "@media (max-width: 760px)", "los estilos móviles");
requireText(css, ':root[data-theme="dark"]', "el modo oscuro");
requireText(manifest, '"start_url": "./"', "la ruta relativa del manifest");

const idMatches = [...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = idMatches.filter((id, index) => idMatches.indexOf(id) !== index);
if (duplicateIds.length > 0) {
  errors.push(`IDs duplicados: ${[...new Set(duplicateIds)].join(", ")}`);
}

const anchorMatches = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1]);
for (const anchor of anchorMatches) {
  if (!idMatches.includes(anchor)) {
    errors.push(`El ancla #${anchor} no tiene un destino con ese id`);
  }
}

const referenceMatches = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)].map(
  (match) => match[1],
);

for (const reference of referenceMatches) {
  if (
    reference.startsWith("#") ||
    reference.startsWith("http://") ||
    reference.startsWith("https://") ||
    reference.startsWith("mailto:") ||
    reference.startsWith("tel:")
  ) {
    continue;
  }

  if (reference.startsWith("/")) {
    errors.push(`La referencia ${reference} es absoluta y puede romper GitHub Project Pages`);
    continue;
  }

  const localPath = reference.split(/[?#]/)[0];
  if (localPath && !existsSync(join(projectRoot, localPath))) {
    errors.push(`No existe el recurso local: ${reference}`);
  }
}

if (/href=["']#["']/.test(html)) {
  errors.push("Hay enlaces vacíos con href=\"#\"");
}

if (/(ci-cd-actions-demo|aws-terraform-stack|observability-stack|flask-docker-demo)/.test(html)) {
  errors.push("Aún existen referencias a repositorios no verificados");
}

if (/[ÃÂ]|â€”|â€™|â€œ|â€/.test(html)) {
  errors.push("Se detectaron caracteres con codificación dañada");
}

if (errors.length > 0) {
  console.error("Validación fallida:\n");
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(
  `Validación correcta: ${idMatches.length} IDs, ${anchorMatches.length} anclas y ${referenceMatches.length} referencias revisadas.`,
);
