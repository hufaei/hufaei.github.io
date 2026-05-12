import { describe, expect, it } from "vitest";
import { buildSearchIndex, searchArchive } from "../src/lib/search";
import { animeEntries, seriesEntries } from "../src/data/mockArchive";

describe("archive search", () => {
  it("finds anime by localized title and alias", () => {
    const index = buildSearchIndex({ anime: animeEntries, series: seriesEntries });

    expect(searchArchive(index, "芙莉莲").map((item) => item.slug)).toContain("frieren-season-1");
    expect(searchArchive(index, "bocchi").map((item) => item.slug)).toContain("bocchi-the-rock");
  });

  it("finds series by tag", () => {
    const index = buildSearchIndex({ anime: animeEntries, series: seriesEntries });

    expect(searchArchive(index, "奇幻").map((item) => item.slug)).toContain("frieren");
  });
});

