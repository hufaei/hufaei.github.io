export type Language = "zh" | "ja" | "en";

export type LocalizedText = Record<Language, string>;

export type WatchStatus = "planned" | "watching" | "completed" | "paused" | "rewatching";

export type ProgressInput = {
  watchedEpisodes?: number;
  totalEpisodes?: number;
  progressPercent?: number;
};

export type ExternalRatings = {
  bangumi?: {
    score: number;
    rank?: number;
    total?: number;
  };
  anilist?: {
    averageScore?: number;
    meanScore?: number;
    popularity?: number;
  };
};

export type AnimeEntry = ProgressInput & {
  slug: string;
  seriesSlug?: string;
  title: LocalizedText;
  aliases: string[];
  status: WatchStatus;
  watchedParts?: string;
  year?: number;
  source?: "bangumi" | "anilist";
  sourceUrl?: string;
  platform: string;
  cover: string;
  banner: string;
  accent: string;
  description: LocalizedText;
  tags: string[];
  ratings: ExternalRatings;
};

export type SeriesEntry = {
  slug: string;
  title: LocalizedText;
  entrySlugs: string[];
  year?: number;
  years?: number[];
  cover: string;
  banner: string;
  accent: string;
  tags: string[];
};

export type WatchEvent = {
  id: string;
  entrySlug: string;
  type: "started" | "progress" | "completed" | "rewatched";
  date: string;
  watchedEpisodes?: number;
  progressPercent?: number;
};
