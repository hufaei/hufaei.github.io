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

    expect(record.title).toBe("JOJO的奇妙冒险");
    expect(record.totalEpisodes).toBeUndefined();
    expect(record.watchedParts).toBe("已看6部");
    expect(record.progressPercent).toBe(100);
  });

  it("treats coarse season counts as watched progress instead of title text", () => {
    const record = parseWatchRecordLine("小林家的龙女仆2季", 2);

    expect(record.title).toBe("小林家的龙女仆");
    expect(record.totalEpisodes).toBeUndefined();
    expect(record.watchedParts).toBe("已看2季");
    expect(record.tags).toContain("已看2季");
    expect(record.tags).not.toContain("待补集数");
  });

  it("treats compact season digit runs as shorthand rather than a literal count", () => {
    const record = parseWatchRecordLine("刃牙123季+范马刃牙第二季13", 3);

    expect(record.watchedParts).toBe("已看3季");
    expect(record.tags).not.toContain("已看123季");
  });

  it("uses the largest season marker when several seasons are listed", () => {
    const record = parseWatchRecordLine("命运石之门 第一季 25 + 第二季 23 + ova", 4);

    expect(record.watchedParts).toBe("已看2季");
    expect(record.tags).not.toContain("已看1季");
  });

  it("removes casual notes from display text", () => {
    const record = parseWatchRecordLine("咒文禁忌 12（垃圾）", 2);

    expect(record.title).toBe("咒文禁忌");
    expect(record.aliases.join(" ")).not.toContain("垃圾");
  });

  it("does not treat personal parenthetical notes as aliases", () => {
    const record = parseWatchRecordLine("鬼灭之刃（漫画至少看完了）", 3);

    expect(record.title).toBe("鬼灭之刃");
    expect(record.aliases.join(" ")).not.toContain("漫画至少看完了");
  });

  it("keeps raw personal notes out of visible archive aliases", () => {
    const { animeEntries } = createArchiveFromRawRecords(["青之箱 25（かみだ!）"]);

    expect(animeEntries[0].aliases.join(" ")).not.toContain("かみだ");
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
