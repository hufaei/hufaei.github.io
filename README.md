# hufaei.github.io

Static anime watch archive for GitHub Pages.

The site is designed as a dark, multilingual archive for anime viewing progress:

- Chinese / Japanese / English UI, defaulting to Chinese.
- Dark / light theme toggle, defaulting to dark.
- Series-level and entry-level progress tracking.
- Build-time metadata sync from Bangumi and AniList.
- No personal reviews or personal scores; external public ratings may be shown with source attribution.

Architecture document: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Demo

This repository currently contains a mocked Astro shell demo. It does not call
Bangumi or AniList at runtime; all displayed anime data is local mock data.

```bash
npm install
npm run dev
npm run test
npm run check
npm run build
```
