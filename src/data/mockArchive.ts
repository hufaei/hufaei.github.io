import { createArchiveFromRawRecords } from "./watchRecordParser";
import { rawWatchRecords } from "./watchRecords";
import type { AnimeEntry, SeriesEntry, WatchEvent } from "./types";

const archive = createArchiveFromRawRecords(rawWatchRecords);

export const animeEntries: AnimeEntry[] = archive.animeEntries;
export const seriesEntries: SeriesEntry[] = archive.seriesEntries;
export const watchEvents: WatchEvent[] = archive.watchEvents;

export function getAnimeBySlug(slug: string): AnimeEntry | undefined {
  return animeEntries.find((entry) => entry.slug === slug);
}

export function getSeriesBySlug(slug: string): SeriesEntry | undefined {
  return seriesEntries.find((series) => series.slug === slug);
}

export function getSeriesEntries(series: SeriesEntry): AnimeEntry[] {
  return series.entrySlugs
    .map((slug) => getAnimeBySlug(slug))
    .filter((entry): entry is AnimeEntry => Boolean(entry));
}

export function getEventsForEntry(slug: string): WatchEvent[] {
  return watchEvents.filter((event) => event.entrySlug === slug);
}
