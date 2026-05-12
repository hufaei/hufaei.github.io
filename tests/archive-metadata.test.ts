import { describe, expect, it } from "vitest";
import { createArchiveFromRawRecords } from "../src/data/watchRecordParser";
import type { ImportMetadataRecord } from "../src/data/importMetadata";

const metadata: ImportMetadataRecord[] = [
  {
    raw: "刀剑神域二季+爱丽丝篇三季",
    parts: [
      {
        inputTitle: "刀剑神域",
        matchedTitle: "刀剑神域",
        titleZh: "刀剑神域",
        titleJa: "ソードアート・オンライン",
        titleEn: "Sword Art Online",
        description: "公开简介：艾恩葛朗特篇。",
        cover: "https://example.com/sao.jpg",
        banner: "https://example.com/sao-banner.jpg",
        source: "bangumi",
        sourceUrl: "https://bgm.tv/subject/23686",
        platform: "TV",
        totalEpisodes: 25,
        rating: 7.4,
        year: 2012,
        confidence: 120
      },
      {
        inputTitle: "爱丽丝篇",
        matchedTitle: "刀剑神域 爱丽丝篇",
        titleZh: "刀剑神域 爱丽丝篇",
        titleJa: "ソードアート・オンライン アリシゼーション",
        titleEn: "Sword Art Online Alicization",
        description: "公开简介：Alicization 篇。",
        cover: "https://example.com/sao-a.jpg",
        source: "bangumi",
        sourceUrl: "https://bgm.tv/subject/225604",
        platform: "TV",
        totalEpisodes: 24,
        rating: 6.2,
        year: 2018,
        confidence: 120
      }
    ]
  }
];

const coarseSeasonMetadata: ImportMetadataRecord[] = [
  {
    raw: "魔王学院的不适任者二季 24",
    parts: [
      {
        inputTitle: "魔王学院的不适任者",
        matchedTitle: "魔王学院的不适任者～史上最强的魔王始祖，转生就读子孙们的学校～ 第二季",
        titleZh: "魔王学院的不适任者～史上最强的魔王始祖，转生就读子孙们的学校～ 第二季",
        titleJa: "魔王学院の不適合者 ～史上最強の魔王の始祖、転生して子孫たちの学校へ通う～ Ⅱ",
        titleEn: "Maou Gakuin no Futekigousha II: Shijou Saikyou no Maou no Shiso, Tensei Shite Shison-tachi no Gakkou e Kayou",
        description: "公开简介：第二季。",
        cover: "https://example.com/maou-s2.jpg",
        source: "bangumi",
        sourceUrl: "https://bgm.tv/subject/330054",
        platform: "TV",
        totalEpisodes: 13,
        rating: 5.8,
        year: 2023,
        confidence: 120
      }
    ]
  }
];

describe("archive metadata merge", () => {
  it("splits multi-part raw records into a compact series with child entries", () => {
    const archive = createArchiveFromRawRecords(["刀剑神域二季+爱丽丝篇三季"], metadata);
    const [series] = archive.seriesEntries;

    expect(series.title.zh).toBe("刀剑神域 系列");
    expect(series.title.zh).not.toContain("+");
    expect(series.entrySlugs).toHaveLength(2);
    expect(archive.animeEntries.map((entry) => entry.title.zh)).toEqual([
      "刀剑神域",
      "刀剑神域 爱丽丝篇"
    ]);
  });

  it("uses remote metadata for localized titles, public fields, and ratings", () => {
    const archive = createArchiveFromRawRecords(["刀剑神域二季+爱丽丝篇三季"], metadata);
    const [entry] = archive.animeEntries;

    expect(entry.title.ja).toBe("ソードアート・オンライン");
    expect(entry.description.zh).toBe("公开简介：艾恩葛朗特篇。");
    expect(entry.cover).toBe("https://example.com/sao.jpg");
    expect(entry.year).toBe(2012);
    expect(entry.totalEpisodes).toBe(25);
    expect(entry.ratings.bangumi?.score).toBe(7.4);
  });

  it("expands coarse season counts without using a later season as the series title", () => {
    const archive = createArchiveFromRawRecords(["魔王学院的不适任者二季 24"], coarseSeasonMetadata);
    const [series] = archive.seriesEntries;
    const entries = series.entrySlugs.map((slug) => archive.animeEntries.find((entry) => entry.slug === slug)!);

    expect(series.title.zh).toBe("魔王学院的不适任者～史上最强的魔王始祖，转生就读子孙们的学校 系列");
    expect(series.title.zh).not.toContain("第二季");
    expect(entries).toHaveLength(2);
    expect(entries[0].title.zh).toBe("魔王学院的不适任者～史上最强的魔王始祖，转生就读子孙们的学校");
    expect(entries[1].title.zh).toContain("第二季");
    expect(entries[1].year).toBe(2023);
  });
});
