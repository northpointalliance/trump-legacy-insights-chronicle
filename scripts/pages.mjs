// Renders pages that are built from data files, using an existing page as the
// shell so header, footer, and styles stay identical to the rest of the site.
import { readFileSync } from "node:fs";

const ORIGIN = "https://thepresidencyledger.com";
const BRAND = "The Presidency Ledger";
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

function shell(src, { path, title, description, jsonld, main }) {
  let h = readFileSync(src, "utf8");
  const url = ORIGIN + path;
  h = h.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)} | ${BRAND}</title>`);
  h = h.replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(description)}$2`);
  h = h.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  h = h.replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);
  h = h.replace(/(<meta (?:property="og:title"|name="twitter:title") content=")[^"]*(")/g, `$1${esc(title)}$2`);
  h = h.replace(/(<meta (?:property="og:description"|name="twitter:description") content=")[^"]*(")/g, `$1${esc(description)}$2`);
  h = h.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");
  h = h.replace("</head>", `  <script type="application/ld+json">${JSON.stringify(jsonld)}</script>\n</head>`);
  h = h.replace(/(<main[^>]*>)[\s\S]*?(<\/main>)/, `$1\n${main}\n  $2`);
  return h;
}

const d = (iso) => new Date(iso + "T12:00:00Z").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });

export function accountabilityPage(src, data) {
  const path = "/accountability/";
  const rows = [...data.entries].sort((a, b) => b.statusDate.localeCompare(a.statusDate));
  const counts = rows.reduce((m, e) => ((m[e.status] = (m[e.status] || 0) + 1), m), {});
  const table = rows.map((e) => `<tr>
  <td class="font-medium">${esc(e.name)}<br><span class="text-sm text-slate-600">${esc(e.office)}</span></td>
  <td>${esc(e.affiliation)}</td>
  <td>${esc(e.matter)}<p class="mt-1 text-sm text-slate-600">${esc(e.summary)}</p></td>
  <td><strong>${esc(e.status)}</strong><br><span class="text-sm">${esc(e.statusDetail)}</span><br><time class="text-sm text-slate-500" datetime="${e.statusDate}">${d(e.statusDate)}</time></td>
  <td class="text-sm">${e.sources.map((s) => `<a class="text-accent-dark hover:underline" href="${esc(s.url)}" rel="noopener">${esc(s.publisher)}</a>`).join("<br>")}</td>
</tr>`).join("\n");
  const main = `    <article>
  <header class="mb-10 text-center">
    <h1 class="text-4xl font-bold text-brand-blue md:text-5xl mb-4">Which federal officials have faced corruption charges or findings since 2017?</h1>
    <p class="prose-block mx-auto text-lg">This tracker lists ${rows.length} documented cases involving members of Congress and executive-branch officials from any party, with each case's current status and its sources. Last reviewed <time datetime="${data.lastReviewed}">${d(data.lastReviewed)}</time>.</p>
  </header>
  <section class="mb-10">
    <h2 class="text-2xl font-bold text-brand-blue mb-4">Who is included?</h2>
    <p class="prose-block mb-3">${esc(data.scope)} A case is added only when a court record, grand jury indictment, inspector general report, congressional ethics finding, or at least two established news organizations document it. Posts on social media are treated as leads and are checked against those sources before anything is listed.</p>
    <p class="prose-block">Status shows the latest verified event: <strong>Reported</strong> (documented by news organizations, no charges), <strong>Official finding</strong> (inspector general or ethics body), <strong>Charged</strong>, <strong>Convicted</strong>, or <strong>Cleared</strong>. Pardons and commutations are noted because they end or shorten a case without reversing the finding. Current counts: ${Object.entries(counts).map(([k, v]) => `${esc(k)} ${v}`).join(", ")}.</p>
  </section>
  <section class="mb-10">
    <h2 class="text-2xl font-bold text-brand-blue mb-4">What is the status of each case?</h2>
    <div class="overflow-x-auto">
<table class="data-table w-full">
<thead><tr><th>Official</th><th>Party or role</th><th>Matter</th><th>Status</th><th>Sources</th></tr></thead>
<tbody>
${table}
</tbody>
</table>
    </div>
  </section>
  <section class="mb-10">
    <h2 class="text-2xl font-bold text-brand-blue mb-4">How is this list kept current?</h2>
    <p class="prose-block">Each entry is rechecked when a court, prosecutor, or ethics body acts, and the status date shows when it last changed. Being listed as Charged or Reported is not a finding of guilt. Corrections with a primary source are welcome at info@thepresidencyledger.com.</p>
  </section>
    </article>`;
  const jsonld = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Federal corruption charges and findings tracker",
    description: `Documented corruption charges, convictions, and official findings involving U.S. federal officials since 2017, any party. ${rows.length} cases.`,
    url: ORIGIN + path,
    dateModified: data.lastReviewed,
    creator: { "@type": "Organization", name: BRAND, url: ORIGIN + "/" },
    isPartOf: { "@type": "WebSite", name: BRAND, url: ORIGIN + "/" },
    variableMeasured: ["official", "party or role", "matter", "status", "status date", "sources"],
  };
  return shell(src, { path, title: "Federal Corruption Tracker, Both Parties", description: `Tracker of ${rows.length} documented corruption charges, convictions, and official findings involving federal officials since 2017, any party, with status and sources.`, jsonld, main });
}

export function newsWirePage(src, outlets) {
  const path = "/news-wire/";
  const n = outlets.groups.reduce((k, g) => k + g.outlets.length, 0);
  const list = outlets.groups.map((g) => `<strong>${esc(g.name)}:</strong> ${g.outlets.map((o) => esc(o.name)).join(", ")}`).join("<br>");
  const main = `    <article>
  <header class="mb-10 text-center">
    <h1 class="text-4xl font-bold text-brand-blue md:text-5xl mb-4">Who is covering Trump today?</h1>
    <p class="prose-block mx-auto text-lg">The latest Trump headlines from ${n} news organizations across wire services, broadcast, newspapers, digital outlets, and international press. Every headline links to the original publisher.</p>
  </header>
<!--NEWS-WIRE-->
  <section class="mb-10">
    <h2 class="text-2xl font-bold text-brand-blue mb-4">Which outlets are included?</h2>
    <p class="prose-block text-sm">${list}</p>
    <p class="prose-block mt-3 text-sm text-slate-600">Headlines come from each outlet's Google News listing for the past 24 hours and refresh about every 20 minutes. The Presidency Ledger does not edit, rank, or republish the articles.</p>
  </section>
    </article>`;
  const jsonld = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Who is covering Trump today?", description: `Live Trump headlines from ${n} news organizations, linked to the original publishers.`, url: ORIGIN + path, isPartOf: { "@type": "WebSite", name: BRAND, url: ORIGIN + "/" }, publisher: { "@type": "Organization", name: BRAND, url: ORIGIN + "/" } };
  return shell(src, { path, title: "Who Is Covering Trump Today? News Wire", description: `Live Trump headlines from ${n} news organizations, from AP and Reuters to Fox News and the BBC, each linked to the original story.`, jsonld, main });
}

// Homepage section: second-term departures, from data/departures.json
export function departuresSection(data) {
  const rows = [...data.entries].sort((a, b) => b.date.localeCompare(a.date));
  const cabinet = rows.filter((e) => /^Secretary|Attorney General$|Director of National Intelligence/.test(e.role)).length;
  const items = rows.map((e) => `    <article class="border border-sky-100 rounded-lg p-4">
      <h3 class="font-bold">${esc(e.name)}, ${esc(e.role)}</h3>
      <p class="text-sm text-slate-500"><time datetime="${e.date}">${d(e.date)}</time> · ${esc(e.how)}</p>
      <p class="prose-block mt-2">${esc(e.note)} ${e.sources.map((s) => `<a href="${esc(s.url)}" class="text-accent-dark hover:underline" rel="noopener noreferrer" target="_blank">${esc(s.publisher)}</a>`).join(" · ")}</p>
    </article>`).join("\n");
  return `<section id="recent-firings" class="card mb-10">
  <h2 class="text-2xl font-bold text-brand-blue mb-3">Who has left the second-term cabinet or senior staff?</h2>
  <p class="prose-block mb-6">At least ${cabinet} Cabinet-level officials have left since January 2025, including Homeland Security Secretary Kristi Noem and Attorney General Pam Bondi in spring 2026, and Director of National Intelligence Tulsi Gabbard in May 2026. Press Secretary Karoline Leavitt left in August 2026. The most significant departures are listed below, newest first. Last reviewed <time datetime="${data.lastReviewed}">${d(data.lastReviewed)}</time>. Full lists: ${data.fullLists.map((l) => `<a href="${esc(l.url)}" class="text-accent-dark hover:underline" rel="noopener">${esc(l.name)}</a>`).join(", ")}.</p>
  <div class="space-y-4">
${items}
  </div>
</section>`;
}

// Homepage section: points to the live News Wire instead of a frozen list
export function headlinesSection(outlets) {
  const n = outlets.groups.reduce((k, g) => k + g.outlets.length, 0);
  return `<section id="current-events" class="card mb-10">
  <h2 class="text-2xl font-bold text-brand-blue mb-3">What are the latest headlines on the second administration?</h2>
  <p class="prose-block mb-4">Today's Trump coverage from ${n} news organizations, from the Associated Press, Reuters, and Bloomberg to Fox News, the New York Times, and the BBC, is collected on the News Wire and refreshed about every 20 minutes. Every headline links to the original publisher.</p>
  <p><a href="/news-wire/" class="font-semibold text-accent-dark hover:text-brand-red">Open the News Wire: who is covering Trump today?</a></p>
</section>`;
}
