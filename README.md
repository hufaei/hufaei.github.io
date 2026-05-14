# hufaei.github.io

Static anime watch archive for GitHub Pages.

The site is designed as a dark, multilingual archive for anime viewing progress:

- Chinese / Japanese / English UI, defaulting to Chinese.
- Dark / light theme toggle, defaulting to dark.
- Series-level and entry-level progress tracking.
- Build-time metadata sync from Bangumi and AniList.
- No personal reviews or personal scores; external public ratings may be shown with source attribution.

Architecture document: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Local workflow

The deployed site does not call Bangumi or AniList at runtime. Add or edit watch
records locally, enrich the local metadata, then build and push the static site.

```bash
npm install
npm run dev
npm run verify
```

## Add watch records

1. Append new entries in `src/data/watchRecords.ts`.
2. Run metadata enrichment:

```bash
npm run data:update
```

3. If an existing match looks stale or wrong, refresh cached metadata:

```bash
npm run data:update:refresh
```

4. If fallback cover visuals need to be regenerated:

```bash
npm run data:covers
```

5. Verify and deploy through the normal git flow:

```bash
npm run verify
git add src/data
git commit -m "Update watch records"
git push origin main
```
