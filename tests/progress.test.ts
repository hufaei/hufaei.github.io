import { describe, expect, it } from "vitest";
import { calculateEntryProgress, calculateSeriesProgress } from "../src/lib/progress";

describe("progress calculations", () => {
  it("calculates episode progress for one anime entry", () => {
    expect(calculateEntryProgress({ watchedEpisodes: 14, totalEpisodes: 28 })).toEqual({
      watched: 14,
      total: 28,
      percent: 50
    });
  });

  it("uses percent override when episode totals are unknown", () => {
    expect(calculateEntryProgress({ progressPercent: 37 })).toEqual({
      watched: null,
      total: null,
      percent: 37
    });
  });

  it("rolls up series progress from child entries", () => {
    expect(
      calculateSeriesProgress([
        { watchedEpisodes: 12, totalEpisodes: 12 },
        { watchedEpisodes: 6, totalEpisodes: 12 }
      ])
    ).toEqual({
      watched: 18,
      total: 24,
      percent: 75
    });
  });

  it("does not show a partial episode total when one series entry is missing totals", () => {
    expect(
      calculateSeriesProgress([
        { progressPercent: 100 },
        { watchedEpisodes: 13, totalEpisodes: 13 }
      ])
    ).toEqual({
      watched: null,
      total: null,
      percent: 100
    });
  });

  it("keeps empty series progress neutral", () => {
    expect(calculateSeriesProgress([])).toEqual({
      watched: null,
      total: null,
      percent: 0
    });
  });
});
