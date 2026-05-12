import { describe, expect, it } from "vitest";
import { buildSearchIndex, searchArchive } from "../src/lib/search";
import { animeEntries, seriesEntries } from "../src/data/mockArchive";

describe("archive search", () => {
  it("finds anime by localized title and alias", () => {
    const index = buildSearchIndex({ anime: animeEntries, series: seriesEntries });

    expect(searchArchive(index, "青春纪行").some((item) => item.title.includes("金色时光"))).toBe(true);
    expect(searchArchive(index, "death note").some((item) => item.title === "death note")).toBe(true);
  });

  it("finds series by tag", () => {
    const index = buildSearchIndex({ anime: animeEntries, series: seriesEntries });

    expect(searchArchive(index, "含剧场版").some((item) => item.type === "series")).toBe(true);
  });
});
