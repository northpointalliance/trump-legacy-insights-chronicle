// Runs before every request on Cloudflare Pages.
// Sends the old pages.dev address and www to the one real domain with a 301,
// keeping the path and query string. Preview deployments
// (<hash>.trump-legacy-insights-chronicle.pages.dev) are left alone.
const CANONICAL = "thepresidencyledger.com";
const REDIRECT_HOSTS = new Set(["trump-legacy-insights-chronicle.pages.dev", "www.thepresidencyledger.com"]);

export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.hostname = CANONICAL;
    url.protocol = "https:";
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
