# Goop layout repair

This repository contains the **complete** Goop site. The `public/index.html` file references `public/assets/style.css`, `public/assets/app.js`, and `public/assets/matrix.js`.

**Do not download/open only `index.html`.** If you do, its assets are missing and it cannot behave like the deployed site. To see a standalone visual preview, use the separate `Goop-Preview-Fixed.html` file.

Upload **all of the folders in this ZIP** into the repository, preserving paths. Then under GitHub Settings → Pages choose **GitHub Actions**. The workflow installs npm dependencies, builds into `dist`, and deploys the full site.

Verify deployed URLs (replacing username and repo if needed):

- `https://unicyclevryt-tech.github.io/goop/`
- `https://unicyclevryt-tech.github.io/goop/assets/style.css`
- `https://unicyclevryt-tech.github.io/goop/assets/app.js`
- `https://unicyclevryt-tech.github.io/goop/assets/matrix.js`

If any of those assets return 404, the deployment is incomplete. Hard refresh (`Ctrl+Shift+R`) after deployment. Search browsing requires successfully installed Scramjet assets and a working Wisp server.
