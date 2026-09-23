# The Presidency Ledger

A static reference site tracking the Trump presidencies: cabinet turnover, markets, trade, bankruptcies, abuse-of-power cases, and a first-term (2017 to 2021) chronicle. Every page is plain HTML with its sources linked.

**Live:** https://thepresidencyledger.com

## How it works

- The website is the `site/` folder. What is in `site/` is exactly what visitors get.
- There is no framework, database, or CMS. Lovable and Supabase are no longer used.
- Cloudflare Pages publishes the site. Every push to `main` goes live automatically.

## Folder layout

```
site/                  the website (37 files)
  index.html           homepage
  <section>/index.html one folder per page, e.g. site/first-term/economy/index.html
  assets/css/main.css  the only stylesheet
  sitemap.xml          list of pages for Google
  robots.txt           crawler rules
  _redirects           old URLs that forward to new ones
  404.html             "page not found" page
scripts/build.mjs      copies site/ to dist/ and blocks old pages.dev links
docs/ARCHITECTURE.md   how the site, hosting, and analytics fit together
```

## Change a page

1. Open the page's `index.html` in `site/` and edit the text.
2. Commit and push to `main`. Cloudflare rebuilds and publishes it in about a minute.

## Add a page

1. Copy an existing page folder, for example `site/first-term/economy/` to `site/first-term/new-topic/`.
2. In the new `index.html`, update `<title>`, the meta description, the canonical link, `og:url`, and the JSON-LD `url`. All links use `https://thepresidencyledger.com/...` with a trailing slash.
3. Add the page to `site/sitemap.xml` and to the list in `site/sitemap/index.html`.
4. Push to `main`.

## Deploy

| How | What happens |
|---|---|
| Push to `main` | Cloudflare Pages runs `npm run build` and publishes `dist/` to production |
| Push to any other branch | Cloudflare creates a preview link, production is untouched |
| `npm run deploy` | Manual upload from your computer with wrangler (only if Git deploys are off) |

## Rules for every page

- One absolute canonical: `https://thepresidencyledger.com/<path>/`, no `www`, no query strings.
- Important content in the HTML itself, not loaded by JavaScript.
- JSON-LD in the `<head>` that matches what the page says.
- Question-style headings with the direct answer first.
- No em dashes.

See `docs/ARCHITECTURE.md` for hosting, domain, redirect, and analytics details.
