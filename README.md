# Goop browser — GitHub Pages version

This version fixes the mismatched Scramjet integration in older Goop HTML files. The search engines are navigated using **Scramjet + BareMux + libcurl + Wisp**, not direct iframes. The Goop UI, background, bookmarks and tools remain in `public/index.html`.

## Put it on GitHub (no server to install)

1. On GitHub, create a **public repository named `YOURUSERNAME.github.io`** (replace with your actual username). Use this exact naming pattern because this initial project uses root-relative `/scram/` and `/sw.js` paths.
2. Upload all files and folders in this ZIP to the root of the repository, including the hidden `.github/workflows` directory. Commit to the `main` branch.
3. Open **Settings → Pages** on GitHub, and select **GitHub Actions** as the build/deployment source.
4. Under **Actions**, let the **Deploy Goop** workflow finish.
5. Open `https://YOURUSERNAME.github.io` (NOT an HTML file from Downloads).
6. Go to Settings in Goop and select a Wisp server, then search with Google, DuckDuckGo, Bing, or Brave.

The GitHub Actions workflow installs the compiled browser assets from the dependency packages and publishes them with the HTML. You **do not need to upload `node_modules`** or run Node on your computer. GitHub Actions uses Node during the build.

## Debugging

- If the GitHub Actions build fails, open its log (dependency downloads can change).
- `https://YOURUSERNAME.github.io/scram/scramjet.all.js` must return code, not a 404.
- `https://YOURUSERNAME.github.io/baremux/index.js` must return code, not a 404.
- `https://YOURUSERNAME.github.io/libcurl/index.mjs` must return code, not a 404.
- Clear stale service worker registrations if switching from previous builds.
- If the Wisp server is unreachable or rate-limited, switch the Wisp dropdown in Goop Settings.
- Google/Brave may still show challenges or site-specific issues; Scramjet cannot guarantee every site.

**Important:** GitHub Pages is static hosting. It cannot run a Wisp backend; this build depends on an accessible external Wisp WebSocket server. Public endpoints are not guaranteed to be available.

## Source and licensing

Scramjet and BareMux are Mercury Workshop projects. Their licenses apply to the included compiled dependencies. This project does not copy Cherri's proprietary app bundles.
