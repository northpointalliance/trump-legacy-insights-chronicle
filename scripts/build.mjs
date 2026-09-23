// Build step for Cloudflare Pages.
// The site is plain static HTML in site/. Pages is configured to run
// `npm run build` and publish dist/, so this copies site/ to dist/ and checks
// that nothing points back at the old pages.dev host.
import { cpSync, rmSync, readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";
import { accountabilityPage, newsWirePage, departuresSection, headlinesSection } from "./pages.mjs";

const SRC = "site";
const OUT = "dist";
const OLD_HOST = "trump-legacy-insights-chronicle.pages.dev";
// Google Analytics 4 (property "The Presidency Ledger", stream 15832094049)
const GA_ID = "G-PR9H0FQNJC";
const GA_TAG = `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA_ID}"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());if(location.hostname==='thepresidencyledger.com'){gtag('config','${GA_ID}');}</script>
`;

rmSync(OUT, { recursive: true, force: true });
cpSync(SRC, OUT, { recursive: true });

// Pages rendered from data files
const SHELL = join(SRC, "congressional-departures", "index.html");
const readJson = (p) => JSON.parse(readFileSync(p, "utf8"));
for (const [dir, html] of [
  ["accountability", accountabilityPage(SHELL, readJson("data/accountability.json"))],
  ["news-wire", newsWirePage(SHELL, readJson("data/outlets.json"))],
]) {
  mkdirSync(join(OUT, dir), { recursive: true });
  writeFileSync(join(OUT, dir, "index.html"), html);
}

// Homepage sections rendered from data files
{
  const p = join(OUT, "index.html");
  let h = readFileSync(p, "utf8");
  const swap = (id, html) => {
    const re = new RegExp(`<section id="${id}"[\\s\\S]*?</section>`);
    if (!re.test(h)) { console.error(`Build failed: section #${id} not found on homepage`); process.exit(1); }
    h = h.replace(re, html);
  };
  swap("recent-firings", departuresSection(readJson("data/departures.json")));
  swap("current-events", headlinesSection(readJson("data/outlets.json")));
  writeFileSync(p, h);
}

// Add the GA4 tag to every HTML page (only reports on the real domain)
const addTag = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) { addTag(p); continue; }
    if (!name.endsWith(".html")) continue;
    const h = readFileSync(p, "utf8");
    if (!h.includes(GA_ID)) writeFileSync(p, h.replace("</head>", "  " + GA_TAG + "</head>"));
  }
};
addTag(OUT);

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
