# Goop — GitHub Pages browser build fix

This release fixes the **Browser runtime missing** message by ensuring that GitHub Actions installs and deploys the files Goop needs, instead of publishing the raw source repository.

## Upload and deploy

1. Unzip this folder. **Upload all files and directories to the root of `unicyclevryt-tech/goop`**, including the hidden `.github` folder. Replace existing files when prompted. Do not upload the enclosing folder itself.
2. In your repository, verify that `.github/workflows/deploy.yml` appears in the file list.
3. Open **Settings → Pages → Build and deployment → Source: GitHub Actions**. Do not use **Deploy from a branch**, because `public/` is source code and the Scramjet runtime is generated during the build.
4. Open **Actions** and run **Build and deploy Goop browser** if it has not run automatically.
5. Wait for a **green completed deployment**. If it fails, click the job to see which required asset is missing.
6. Visit `https://unicyclevryt-tech.github.io/goop/` and refresh with Ctrl+Shift+R.

## Verify files are live

The following paths MUST return JavaScript rather than a GitHub 404 page:

- https://unicyclevryt-tech.github.io/goop/scram/scramjet.all.js
- https://unicyclevryt-tech.github.io/goop/baremux/index.js
- https://unicyclevryt-tech.github.io/goop/libcurl/index.mjs

`/goop/` matters: your GitHub Pages site lives under a repository subfolder. The Goop JavaScript computes that path automatically.

**Do not open `public/index.html` directly from Downloads.** The full browser requires HTTPS, service workers, Scramjet and an operating Wisp endpoint. A Wisp selection cannot fix missing `scram/` or `baremux/` scripts.

If the files above all load but external sites still fail, the next issue is likely Wisp connectivity or a Scramjet compatibility issue, not these missing assets. Public Wisp relays can go down.

This ZIP is a deployment repair. It has syntax/file checks; live npm installation and end-to-end proxy traffic could not be tested in this environment.
