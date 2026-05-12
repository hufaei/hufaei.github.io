import { describe, expect, it } from "vitest";
import { rawWatchRecords } from "../src/data/watchRecords";
import { createArchiveFromRawRecords, parseWatchRecordLine } from "../src/data/watchRecordParser";

describe("watch record parser", () => {
  it("keeps aliases while extracting a trailing episode count", () => {
    const record = parseWatchRecordLine("金色时光(青春纪行)24", 0);

    expect(record.title).toBe("金色时光(青春纪行)");
    expect(record.aliases).toContain("青春纪行");
    expect(record.totalEpisodes).toBe(24);
  });

  it("does not treat part numbers as episode totals", () => {
    const record = parseWatchRecordLine("JOJO的奇妙冒险 123456部 -- 完结", 1);

    expect(record.totalEpisodes).toBeUndefined();
    expect(record.progressPercent).toBe(100);
  });

  it("removes casual notes from display text", () => {
    const record = parseWatchRecordLine("咒文禁忌 12（垃圾）", 2);

    expect(record.title).toBe("咒文禁忌");
    expect(record.aliases.join(" ")).not.toContain("垃圾");
  });

  it("uses a broad cover set for the imported watch archive", () => {
    const { animeEntries } = createArchiveFromRawRecords(rawWatchRecords);
    const uniqueCovers = new Set(animeEntries.map((entry) => entry.cover));

    expect(uniqueCovers.size).toBeGreaterThan(150);
  });

  it("does not invent watch events for raw imported records", () => {
    const { watchEvents } = createArchiveFromRawRecords(rawWatchRecords);

    expect(watchEvents).toEqual([]);
  });
});
