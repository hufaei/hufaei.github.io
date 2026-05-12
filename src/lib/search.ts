import type { AnimeEntry, SeriesEntry } from "../data/types";

export type SearchRecord = {
  type: "anime" | "series";
  slug: string;
  title: string;
  haystack: string;
};

export function buildSearchIndex(input: { anime: AnimeEntry[]; series: SeriesEntry[] }): SearchRecord[] {
  const animeRecords = input.anime.map((entry) => ({
    type: "anime" as const,
    slug: entry.slug,
    title: entry.title.zh,
    haystack: [
      entry.title.zh,
      entry.title.ja,
      entry.title.en,
      ...entry.aliases,
      entry.status,
      entry.year,
      ...entry.tags
    ]
      .join(" ")
      .toLowerCase()
  }));

  const seriesRecords = input.series.map((series) => ({
    type: "series" as const,
    slug: series.slug,
    title: series.title.zh,
    haystack: [series.title.zh, series.title.ja, series.title.en, ...series.tags].join(" ").toLowerCase()
  }));

  return [...animeRecords, ...seriesRecords];
}

export function searchArchive(index: SearchRecord[], query: string): SearchRecord[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return index;
  }

  return index.filter((item) => item.haystack.includes(normalizedQuery));
}

