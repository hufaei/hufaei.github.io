import { describe, expect, it } from "vitest";
import { sortAnimeCards } from "../src/lib/animeArchiveControls";

const card = (title: string, score?: string, rank?: string, year?: string, entryIndex?: string) => ({
  dataset: {
    titleSort: title,
    score,
    rank,
    year,
    entryIndex
  }
});

describe("anime archive sorting", () => {
  it("sorts Bangumi score high to low and keeps missing scores last", () => {
    const sorted = sortAnimeCards([
      card("missing", undefined, undefined, "2023", "0"),
      card("lower", "6.8", "3200", "2021", "1"),
      card("same-score-worse-rank", "8.0", "254", "2010", "2"),
      card("same-score-better-rank", "8.0", "12", "1993", "3")
    ], "score-desc");

    expect(sorted.map((item) => item.dataset.titleSort)).toEqual([
      "same-score-better-rank",
      "same-score-worse-rank",
      "lower",
      "missing"
    ]);
  });

  it("sorts Bangumi rank low to high and falls back to the original order", () => {
    const sorted = sortAnimeCards([
      card("same-a", "7.0", "100", "2020", "0"),
      card("best", "8.0", "12", "2018", "1"),
      card("same-b", "7.1", "100", "2021", "2"),
      card("missing", "6.0", undefined, "2022", "3")
    ], "rank-asc");

    expect(sorted.map((item) => item.dataset.titleSort)).toEqual(["best", "same-a", "same-b", "missing"]);
  });
});
