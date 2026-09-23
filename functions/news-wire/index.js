// Cloudflare Pages Function for /news-wire/
// Serves the static page built from data/outlets.json and fills it with the
// latest headlines from each outlet (Google News RSS, one query per outlet).
// Headlines link to the original publisher. Nothing is republished.
// The finished HTML is cached at the edge for 20 minutes.
import OUTLETS from "../../data/outlets.json";

const CACHE_SECONDS = 1200;
const MARK = "<!--NEWS-WIRE-->";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);
const unxml = (s) => String(s).replace(/<!\[CDATA\[|\]\]>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&amp;/g, "&").trim();

export function parseItems(xml, max) {
  const out = [];
  for (const m of xml.matchAll(/<item>([\s\S]*?)<\/item>/g)) {
    if (out.length >= max) break;
    const b = m[1];
    const t = (b.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
    const l = (b.match(/<link>([\s\S]*?)<\/link>/) || [])[1];
    if (!t || !l) continue;
    const srcM = b.match(/<source(?: url="([^"]*)")?[^>]*>([\s\S]*?)<\/source>/) || [];
    const src = unxml(srcM[2] || "");
    let host = "";
    try { host = new URL(unxml(srcM[1] || "")).hostname.replace(/^www\./, ""); } catch {}
    let title = unxml(t);
    if (src && title.endsWith(" - " + src)) title = title.slice(0, -(src.length + 3));
    const pub = (b.match(/<pubDate>([\s\S]*?)<\/pubDate>/) || [])[1];
    out.push({ title, link: unxml(l), date: pub ? new Date(pub) : null, host });
  }
  return out;
}

// One query per outlet group (sites joined with OR): 5 requests, not 22.
// Requests run one after another with a short pause, because Google refuses
// bursts from Cloudflare. If Google fails for a group, Bing News is tried.
const UA = { "user-agent": "Mozilla/5.0 (compatible; ThePresidencyLedger/1.0; +https://thepresidencyledger.com/news-wire/)" };
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getText(url) {
  try {
    const r = await fetch(url, { headers: UA, signal: AbortSignal.timeout(5000) });
    return r.ok ? await r.text() : "";
  } catch { return ""; }
}

// Bing News RSS: link carries the article address in its url= parameter.
export function parseBing(xml, max) {
  return parseItems(xml, max).map((it) => {
    let real = it.link;
    try { real = new URL(it.link).searchParams.get("url") || it.link; } catch {}
    let host = it.host;
    try { host = new URL(real).hostname.replace(/^www\./, ""); } catch {}
    return { ...it, link: real, host };
  });
}

async function fetchGroup(g) {
  const sites = g.outlets.map((o) => "site:" + o.domain).join(" OR ");
  const q = `${OUTLETS.query} (${sites})`;
  let items = parseItems(await getText("https://news.google.com/rss/search?hl=en-US&gl=US&ceid=US:en&q=" + encodeURIComponent(`${OUTLETS.query} when:${OUTLETS.window} (${sites})`)), 100);
  if (!items.length) items = parseBing(await getText("https://www.bing.com/news/search?format=rss&qft=interval%3d%227%22&q=" + encodeURIComponent(q)), 100);
  const dayAgo = Date.now() - 36 * 3600 * 1000;
  items = items.filter((it) => !it.date || isNaN(it.date) || it.date.getTime() > dayAgo);
  return g.outlets.map((o) => ({
    ...o,
    items: items.filter((it) => it.host === o.domain || it.host.endsWith("." + o.domain)).slice(0, OUTLETS.perOutlet),
  }));
}

async function fetchAll() {
  const out = [];
  for (const g of OUTLETS.groups) {
    out.push(...(await fetchGroup(g)));
    await sleep(250);
  }
  return out;
}

const fmt = (d) => (d && !isNaN(d) ? d.toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit", timeZone: "America/New_York", timeZoneName: "short" }) : "");

export function render(results, now) {
  const total = results.reduce((n, r) => n + r.items.length, 0);
  const covering = results.filter((r) => r.items.length).length;
  let html = `<p class="prose-block mb-6"><strong>${covering} of ${results.length} outlets</strong> have Trump headlines in the last 24 hours, ${total} shown here. Updated ${esc(fmt(now))}.</p>\n`;
  for (const g of OUTLETS.groups) {
    html += `<section class="mb-10"><h2 class="text-2xl font-bold text-brand-blue mb-4">${esc(g.name)}</h2>\n<div class="grid gap-6 md:grid-cols-2">\n`;
    for (const o of g.outlets) {
      const r = results.find((x) => x.domain === o.domain) || { items: [] };
      html += `<div class="card"><h3 class="text-lg font-semibold mb-2">${esc(o.name)} <span class="text-sm font-normal text-slate-500">(${r.items.length})</span></h3>`;
      if (!r.items.length) {
        html += `<p class="text-sm text-slate-600">No headlines in the last 24 hours, or the feed did not respond. <a class="text-accent-dark hover:underline" href="https://${esc(o.domain)}/" rel="noopener">Visit ${esc(o.name)}</a>.</p>`;
      } else {
        html += `<ul class="space-y-2 text-sm">` + r.items.map((it) => `<li><a class="text-accent-dark hover:underline" href="${esc(it.link)}" rel="noopener nofollow">${esc(it.title)}</a>${it.date ? ` <span class="text-slate-500">${esc(fmt(it.date))}</span>` : ""}</li>`).join("") + `</ul>`;
      }
      html += `</div>\n`;
    }
    html += `</div></section>\n`;
  }
  return html;
}

export async function onRequestGet({ request, env, waitUntil }) {
  const cache = caches.default;
  const key = new Request(new URL("/news-wire/", request.url).toString());
  const hit = await cache.match(key);
  if (hit) return hit;

  const page = await env.ASSETS.fetch(new URL("/news-wire/", request.url));
  const shell = await page.text();
  const results = await fetchAll();
  const body = shell.replace(MARK, render(results, new Date()));
  const res = new Response(body, { headers: { "content-type": "text/html; charset=utf-8", "cache-control": `public, max-age=${CACHE_SECONDS}` } });
  const filled = results.filter((r) => r.items.length).length;
  if (filled >= results.length / 2) waitUntil(cache.put(key, res.clone()));
  return res;
}
