# Architecture

Last updated: 2026-09-23

## Summary

The Presidency Ledger is a hand-maintained static website. The HTML files in `site/` are the source of truth. Cloudflare Pages serves them from its edge network. There is no server code, database, or client-side framework.

```
GitHub (main) ──push──> Cloudflare Pages build ──> thepresidencyledger.com
   site/*.html            npm run build              (Cloudflare edge)
                          copies site/ -> dist/
```

## Components

| Part | What it is | Where it lives |
|---|---|---|
| Content | 31 HTML pages, 1 stylesheet, sitemap, robots, 404, redirects | `site/` in this repo |
| Build | `scripts/build.mjs`: copies `site/` to `dist/`, fails if any page still points at the old pages.dev host | this repo |
| Hosting | Cloudflare Pages project `trump-legacy-insights-chronicle` | Cloudflare account info@prismpublication.com |
| Domain | `thepresidencyledger.com` (Cloudflare DNS, proxied) | same Cloudflare account |
| Analytics | Google Analytics 4, loaded by Cloudflare Zaraz (no code in the pages) | GA account NorthpointAlliance |

## Cloudflare Pages settings

| Setting | Value |
|---|---|
| Production branch | `main` |
| Build command | `npm run build` |
| Output directory | `dist` |
| Node packages | none (the build uses only Node built-ins) |
| Preview deployments | every non-main branch |

## Domain and redirects

| From | To | Where it is set | Status |
|---|---|---|---|
| `trump-legacy-insights-chronicle.pages.dev/*` | `https://thepresidencyledger.com/*` (301) | Cloudflare Bulk Redirects (account level) | to set up |
| `www.thepresidencyledger.com/*` | `https://thepresidencyledger.com/*` (301) | Cloudflare Redirect Rule on the zone, plus a proxied `www` DNS record | to set up |
| `/first-presidency` and `/first-presidency/` | `/first-term/timeline/` (301) | `site/_redirects` | live |

The old first-term site at `first-term-trump-legacy.pages.dev` is a separate Pages project in a different Cloudflare account. The pages here no longer link to it; `/first-term/` replaces it.

## Analytics

- GA4 property: "The Presidency Ledger" (account NorthpointAlliance, 80522266).
- Web stream: `https://thepresidencyledger.com`, stream ID 15832094049.
- Measurement ID: `G-PR9H0FQNJC`.
- Status: property and stream created; Zaraz install still to do.
- Installed through Cloudflare Zaraz, so no tracking code is in the HTML. Zaraz only runs on the proxied custom domain, which is why pages.dev must redirect to it.

## SEO, AEO, and GEO conventions

- Canonical, `og:url`, JSON-LD `url`, sitemap, and robots all use `https://thepresidencyledger.com` with trailing slashes on page paths.
- Every indexable page has JSON-LD. Hub and topic pages use `CollectionPage`, `FAQPage`, `Dataset`, or `Article` where they fit; the rest use `WebPage` with `isPartOf` the site and `publisher` The Presidency Ledger.
- `robots.txt` allows all crawlers, including AI crawlers.
- `/sitemap/` (for people) and `/sitemap.xml` (for search engines) must list the same pages.

## Site map

```
/
/abuse-of-power/
   self-dealing/  elections/  due-process/  grants/  speech/
   media-network/  pardons/  courts/
   news/
      irs-settlement/  ftc-firings/  birthright-citizenship/  shielding-investigations/
/first-term/
   timeline/  economy/  legal/  firings/  media/  israel/  business/
/market-history/  /trade-history/  /business-controversies/  /fox-news/
/trump-x-posts/  /trump-insults/  /congressional-departures/  /sitemap/
```

## History

| When | Build |
|---|---|
| 2025 | Lovable React app with Supabase, served at trump-legacy-insights-chronicle.lovable.app |
| 2026-07 | Rebuilt as static HTML with Cursor and deployed by direct upload to Cloudflare Pages. That upload did not match GitHub `main`. |
| 2026-09-23 | Live site copied exactly into `site/`, fixed (new domain in all URLs, rename to The Presidency Ledger, JSON-LD on every page, complete site map), and made the content of `main`. Lovable and Supabase code removed. |

The earlier Cursor generator scripts are kept outside Git in `_archive-old-build/` on the maintainer's machine for reference only.
