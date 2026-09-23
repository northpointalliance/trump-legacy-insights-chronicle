// Build step for Cloudflare Pages.
// The site is plain static HTML in site/. Pages is configured to run
// `npm run build` and publish dist/, so this copies site/ to dist/ and checks
// that nothing points back at the old pages.dev host.
import { cpSync, rmSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const SRC = "site";
const OUT = "dist";
const OLD_HOST = "trump-legacy-insights-chronicle.pages.dev";

rmSync(OUT, { recursive: true, force: true });
cpSync(SRC, OUT, { recursive: true });

const bad = [];
let count = 0;
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    count++;
    if (/\.(html|xml|txt)$/.test(name) && readFileSync(p, "utf8").includes(OLD_HOST)) bad.push(p);
  }
};
walk(OUT);

if (bad.length) {
  console.error(`Build failed: ${bad.length} file(s) still reference ${OLD_HOST}:\n` + bad.join("\n"));
  process.exit(1);
}
console.log(`Copied ${count} files from ${SRC}/ to ${OUT}/`);
