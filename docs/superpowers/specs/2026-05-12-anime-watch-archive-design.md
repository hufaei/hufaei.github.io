# Anime Watch Archive Design

Date: 2026-05-12
Repository: `hufaei/hufaei.github.io`
Target URL: `https://hufaei.github.io/`

## Goal

Build a fully static GitHub Pages site for recording anime viewing progress. The site is not a resume, not a review blog, and not a personal scoring system. It is a dark, anime-styled watch archive that records what was watched, viewing status, series relationships, progress, and public metadata.

## Product Shape

The homepage presents the archive as a personal index:

- current watching entries
- recently completed entries
- series cards with aggregate progress
- quick statistics
- search and archive entry points

The site should feel personal and visually distinct, using dark gray/black UI, anime imagery, panel-like layouts, and careful image treatment. It should accept anime cover and banner images from external metadata sources while keeping a consistent visual identity.

## Core Constraints

- Fully static output deployable to GitHub Pages.
- Default language: Chinese.
- Supported UI languages: Chinese, Japanese, English.
- Default theme: dark.
- Supported themes: dark and light.
- No personal short reviews.
- No personal scores.
- External public ratings are allowed with clear source labels.
- The user's manual input may start as only anime names.
- Build-time metadata enrichment should resolve details and cache results.
- Runtime pages should not depend on external APIs for core rendering.

## Data Sources

Use only two automatic metadata sources.

### Bangumi

Bangumi is the primary source.

Fields:

- subject id
- Chinese title
- Japanese/original title
- summary
- cover images
- episode count
- air date
- platform
- tags and meta tags
- collection statistics
- public score
- rank
- score vote distribution
- related subjects

Bangumi requests must send a specific User-Agent rather than a generic HTTP client default.

### AniList

AniList enriches the primary data.

Fields:

- banner image
- cover image fallback
- cover average color
- Romaji title
- English title
- native title
- synonyms
- average score
- mean score
- popularity
- media relations

AniList data should not override Bangumi's primary Chinese-facing metadata unless a manual override chooses it.

## Data Model

### Series

A logical franchise grouping. A series contains concrete anime entries such as seasons, movies, OVAs, and specials.

Example fields:

```ts
type Series = {
  slug: string;
  title: LocalizedText;
  entrySlugs: string[];
  coverEntrySlug?: string;
  manualOrder?: string[];
  tags?: string[];
  hidden?: boolean;
};
```

Series progress is calculated from child entries:

```text
series watched episodes / series total episodes
```

Entries with unknown episode counts can use manual percentage overrides.

### Anime Entry

One concrete watchable anime item: a season, movie, OVA, special, or short.

Example fields:

```ts
type AnimeEntry = {
  slug: string;
  seriesSlug?: string;
  sourceIds: {
    bangumi?: number;
    anilist?: number;
  };
  titleOverride?: LocalizedText;
  status: "planned" | "watching" | "completed" | "paused" | "dropped" | "rewatching";
  watchedEpisodes?: number;
  totalEpisodes?: number;
  progressPercent?: number;
  startedAt?: string;
  completedAt?: string;
  tags?: string[];
  imageOverride?: {
    cover?: string;
    banner?: string;
  };
  hidden?: boolean;
};
```

Entry progress:

- Prefer `watchedEpisodes / totalEpisodes` when both are known.
- Use `progressPercent` when episodes are unknown, ambiguous, or not meaningful.
- Movies can be represented as `1 / 1`.

### Watch Event

A structured viewing event, not a note or review.

Example fields:

```ts
type WatchEvent = {
  id: string;
  entrySlug: string;
  type: "started" | "progress" | "completed" | "paused" | "dropped" | "rewatched";
  date: string;
  watchedEpisodes?: number;
  progressPercent?: number;
};
```

The timeline page shows these facts without prose reviews.

### External Ratings

External ratings are displayed separately from personal progress.

```ts
type ExternalRatings = {
  bangumi?: {
    score?: number;
    rank?: number;
    total?: number;
    distribution?: Record<string, number>;
  };
  anilist?: {
    averageScore?: number;
    meanScore?: number;
    popularity?: number;
  };
};
```

The UI must label the source, for example `Bangumi 8.5`, and must not imply it is the user's score.

## Routes

```text
/                     Home
/anime/               Paginated anime archive
/anime/page/:page/    Archive pagination
/anime/:slug/         Anime entry detail
/series/:slug/        Series detail with child entry cards
/timeline/            Structured watch event timeline
/timeline/page/:page/ Timeline pagination
/tags/:tag/           Tag archive
/search/              Search landing or enhanced search route
```

## Search And Pagination

Search should work client-side from a compact static JSON index.

Index fields:

- slug
- type: series or anime entry
- localized titles
- aliases
- source ids
- status
- tags
- year
- public rating snippets
- progress summary

Pagination should be generated statically for archive and timeline pages. The client-side search can filter across the full index without loading every detail page.

## Metadata Sync

The build pipeline should include a script such as `sync:metadata`.

Workflow:

1. Read local anime and series data.
2. For entries without locked ids, search Bangumi by name.
3. If multiple plausible matches exist, write candidates for manual selection.
4. Fetch locked Bangumi subject details.
5. Search or fetch corresponding AniList media for enrichment.
6. Write normalized cache files.
7. Build Astro pages from local data plus cached metadata.

Cache files should be committed so GitHub Pages builds and local previews are deterministic.

Manual overrides always win over fetched metadata.

## Visual Design

Default dark theme:

- black and charcoal base
- restrained gray text hierarchy
- anime banners treated with dark overlays
- cover images low-saturation by default
- subtle image-derived accent colors
- sharp panels, narrow borders, no bubbly card-heavy look

Light theme:

- not a generic white UI
- uses gray paper / manga proofing sheet feeling
- keeps strong black lines, archive structure, and image boundaries

Image slots:

- hero banner slot for current or featured anime
- entry cover slots in archive cards
- series collage or representative cover
- detail page banner and cover pairing

## Internationalization

UI language supports `zh`, `ja`, and `en`.

Default:

```text
language = zh
theme = dark
```

Implementation should store language and theme in `localStorage`. Static content can render a default Chinese version and hydrate controls for switching UI strings.

Metadata titles may use available source data:

- Chinese from Bangumi `name_cn`
- Japanese/original from Bangumi `name` or AniList native title
- English from AniList English title

## Performance Strategy

- Static HTML for core routes.
- No runtime API calls for primary content.
- Metadata fetched during build or manual sync only.
- Commit normalized cache files.
- Lazy-load archive images.
- Prioritize only the current page hero image.
- Generate responsive image markup where practical.
- Keep client JavaScript small: theme, language, search, filters.
- Split search index from detail metadata.
- Use static pagination to avoid massive archive pages.

## Repository Architecture

Initial target structure:

```text
content/
  anime/
  series/
  events/
src/
  components/
  data/
  i18n/
  layouts/
  pages/
scripts/
  sync-metadata/
public/
docs/
  superpowers/
    specs/
```

Implementation is expected to use Astro unless a later implementation plan finds a strong reason to choose a simpler static generator.

## Open Decisions For Implementation Plan

- Exact content file format: JSON, YAML, or TypeScript data files.
- Whether metadata sync should run automatically in GitHub Actions or only manually.
- How candidate matching should be reviewed when a title maps to multiple results.
- Initial visual asset placeholders before the user provides a real watch list.
- Whether to expose AniList metrics in archive cards or only on detail pages.

