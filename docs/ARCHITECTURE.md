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
| Build | `scripts/build.mjs`: copies `site/` to `dist/`, renders `/accountability/` and `/news-wire/` from `data/`, fails if any page still points at the old pages.dev host | this repo |
| Data pages | `data/accountability.json` (tracker cases), `data/outlets.json` (news wire outlets); templates in `scripts/pages.mjs` reuse the site header and footer | this repo |
| News wire function | `functions/news-wire/index.js`: on each request, serves the static `/news-wire/` page with live headlines inserted, one Google News RSS query per outlet, cached at the edge for 20 minutes | this repo, runs on Cloudflare Pages Functions |
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
| `trump-legacy-insights-chronicle.pages.dev/*` | `https://thepresidencyledger.com/*` (301) | `functions/_middleware.js` (301, keeps path and query) | live after push |
| `www.thepresidencyledger.com/*` | `https://thepresidencyledger.com/*` (301) | `functions/_middleware.js`, once `www.thepresidencyledger.com` is added as a Pages custom domain | needs custom domain |
| `/first-presidency` and `/first-presidency/` | `/first-term/timeline/` (301) | `site/_redirects` | live |

The old first-term site at `first-term-trump-legacy.pages.dev` is a separate Pages project in a different Cloudflare account. The pages here no longer link to it; `/first-term/` replaces it.

## Analytics

- GA4 property: "The Presidency Ledger" (account NorthpointAlliance, 80522266).
- Web stream: `https://thepresidencyledger.com`, stream ID 15832094049.
- Measurement ID: `G-PR9H0FQNJC`.
- Installed by `scripts/build.mjs`, which adds the gtag snippet to every page at build time. It only sends data when the hostname is thepresidencyledger.com, so previews are not counted.

## Federal Corruption Tracker (/accountability/)

- Scope: current and former federal elected officials and executive-branch appointees since 2017, any party.
- Inclusion rule: a court record, indictment, inspector general report, congressional ethics finding, or at least two established news organizations. Social media posts are leads only.
- Status values: Reported, Official finding, Charged, Convicted, Cleared, with a status detail (for example Pardoned) and the date of the latest verified event.
- The page is plain HTML generated at build time, with `Dataset` JSON-LD.

## News Wire (/news-wire/)

- Shows the last 24 hours of Trump headlines per outlet, grouped by type, for 21 outlets from AP and Reuters to Fox News and the BBC.
- Headlines link to the publisher (through Google News). No article text is copied.
- If a feed fails, that outlet shows a link to its homepage instead; the rest of the page still loads.
- Free plan limits: 100,000 function requests per day and 50 outbound requests per request, well above this page's needs because of the 20 minute cache.

## Email

- `info@thepresidencyledger.com` through Cloudflare Email Routing (forwarding only). Status: live, forwards to the owner's Gmail.

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
/accountability/  /news-wire/
```

## History

| When | Build |
|---|---|
| 2025 | Lovable React app with Supabase, served at trump-legacy-insights-chronicle.lovable.app |
| 2026-07 | Rebuilt as static HTML with Cursor and deployed by direct upload to Cloudflare Pages. That upload did not match GitHub `main`. |
| 2026-09-23 | Live site copied exactly into `site/`, fixed (new domain in all URLs, rename to The Presidency Ledger, JSON-LD on every page, complete site map), and made the content of `main`. Lovable and Supabase code removed. |

The earlier Cursor generator scripts are kept outside Git in `_archive-old-build/` on the maintainer's machine for reference only.
