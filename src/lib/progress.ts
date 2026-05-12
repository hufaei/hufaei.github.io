import type { ProgressInput } from "../data/types";

export type CalculatedProgress = {
  watched: number | null;
  total: number | null;
  percent: number;
};

function clampPercent(value: number): number {
  return Math.max(0, Math.min(100, Math.round(value)));
}

export function calculateEntryProgress(input: ProgressInput): CalculatedProgress {
  if (
    typeof input.watchedEpisodes === "number" &&
    typeof input.totalEpisodes === "number" &&
    input.totalEpisodes > 0
  ) {
    return {
      watched: input.watchedEpisodes,
      total: input.totalEpisodes,
      percent: clampPercent((input.watchedEpisodes / input.totalEpisodes) * 100)
    };
  }

  return {
    watched: null,
    total: null,
    percent: clampPercent(input.progressPercent ?? 0)
  };
}

export function calculateSeriesProgress(entries: ProgressInput[]): CalculatedProgress {
  let watched = 0;
  let total = 0;

  for (const entry of entries) {
    if (typeof entry.watchedEpisodes === "number" && typeof entry.totalEpisodes === "number") {
      watched += entry.watchedEpisodes;
      total += entry.totalEpisodes;
    }
  }

  if (total > 0) {
    return {
      watched,
      total,
      percent: clampPercent((watched / total) * 100)
    };
  }

  const percentages = entries
    .map((entry) => entry.progressPercent)
    .filter((value): value is number => typeof value === "number");

  return {
    watched: null,
    total: null,
    percent: percentages.length
      ? clampPercent(percentages.reduce((sum, value) => sum + value, 0) / percentages.length)
      : 0
  };
}

