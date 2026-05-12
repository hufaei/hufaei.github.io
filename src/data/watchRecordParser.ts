import type { AnimeEntry, SeriesEntry, WatchEvent } from "./types";
import { coverVisuals } from "./coverVisuals";

export type ParsedWatchRecord = {
  raw: string;
  title: string;
  aliases: string[];
  totalEpisodes?: number;
  watchedEpisodes?: number;
  progressPercent: number;
  isSeries: boolean;
  platform: string;
  tags: string[];
};

const visualPool = [
  {
    cover: "https://lain.bgm.tv/r/800/pic/cover/l/13/c5/400602_ZI8Y9.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154587-ivXNJ23SM1xB.jpg",
    accent: "#bbf1a1"
  },
  {
    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130003-HTDmeL4RGeJ4.png",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/130003-5F90a7BtsPQN.jpg",
    accent: "#e4bb50"
  },
  {
    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9253-tIUXF2gfU8Sg.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n9253-JIhmKgBKsWUN.jpg",
    accent: "#ffd6ae"
  },
  {
    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-C6FPmWm59CyP.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-b4z0yBY7E2t5.jpg",
    accent: "#9fd7ff"
  }
];

function isCasualNote(value: string): boolean {
  return /垃圾|烂|沒動靜|没动静|延期|wait|老神作|かみだ/i.test(value)
    || /^(完|[？！?!]+)$/u.test(value.trim());
}

function stripCasualNotes(line: string): string {
  return line.replace(/[（(]([^）)]*)[）)]/gu, (match, content: string) => {
    return isCasualNote(content) ? "" : match;
  });
}

function extractAliases(line: string): string[] {
  return [...line.matchAll(/[（(]([^）)]*)[）)]/gu)]
    .map((match) => match[1].trim())
    .filter((value) => value && !isCasualNote(value));
}

function extractEpisodeCandidates(line: string): number[] {
  const candidates: number[] = [];

  for (const match of line.matchAll(/\d+/gu)) {
    const value = Number(match[0]);
    const index = match.index ?? 0;
    const after = line.slice(index + match[0].length, index + match[0].length + 8);

    if (!Number.isFinite(value) || value > 300) {
      continue;
    }

    if (/^\s*(年|个|個|部|季|厘米|cm|bit|part)/iu.test(after)) {
      continue;
    }

    candidates.push(value);
  }

  return candidates;
}

function cleanTitle(line: string): string {
  const withoutNotes = stripCasualNotes(line)
    .replace(/^\+\s*/u, "")
    .replace(/\s*(?:--|－|—)\s*完结\s*$/u, "")
    .replace(/\s*(?:--|－|—)\s*完\s*$/u, "")
    .replace(/\s*\d{1,3}\s*-\s*？\s*$/u, "")
    .replace(/\s*(?:约\s*)?\d{1,3}\s*(?:集|话|話)?\s*$/u, "")
    .replace(/\s*\.\.\.\s*$/u, "")
    .trim();

  return withoutNotes || line.trim();
}

function detectSeries(line: string): boolean {
  return /[+＋]|二季|三季|四季|五季|两季|2季|3季|4季|5季|第二季|第三季|外传|OVA|ova|sp|SP|part|剧场版|映画|全册|系列|123456部/u.test(line);
}

function detectPlatform(line: string): string {
  const hasMovie = /剧场版|映画|电影|movie/i.test(line);
  const hasTv = /\d+\s*(集|话|話)?|季|TV/i.test(line);

  if (hasMovie && hasTv) return "Mixed";
  if (hasMovie) return "Movie";
  return "TV";
}

function buildTags(line: string, hasTotal: boolean, isSeries: boolean): string[] {
  const tags = ["观看记录", "已看完"];

  if (isSeries) tags.push("系列");
  if (/剧场版|映画|movie/i.test(line)) tags.push("含剧场版");
  if (/OVA|ova|SP|sp|番外|小剧场/u.test(line)) tags.push("含OVA-SP");
  if (!hasTotal) tags.push("待补集数");

  return [...new Set(tags)];
}

function slugify(title: string, index: number): string {
  const ascii = title
    .normalize("NFKD")
    .toLowerCase()
    .replace(/＆/g, " and ")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return /[a-z]/.test(ascii)
    ? `${String(index + 1).padStart(3, "0")}-${ascii}`
    : `watch-${String(index + 1).padStart(3, "0")}`;
}

export function parseWatchRecordLine(line: string, _index: number): ParsedWatchRecord {
  const raw = line.trim();
  const title = cleanTitle(raw);
  const aliases = extractAliases(raw);
  const episodeCandidates = extractEpisodeCandidates(raw);
  const totalEpisodes = episodeCandidates.at(-1);
  const isSeries = detectSeries(raw);

  return {
    raw,
    title,
    aliases,
    totalEpisodes,
    watchedEpisodes: totalEpisodes,
    progressPercent: 100,
    isSeries,
    platform: detectPlatform(raw),
    tags: buildTags(raw, Boolean(totalEpisodes), isSeries)
  };
}

export function createArchiveFromRawRecords(lines: string[]) {
  const records = lines.map(parseWatchRecordLine);

  const animeEntries: AnimeEntry[] = records.map((record, index) => {
    const slug = slugify(record.title, index);
    const visual = coverVisuals[index] ?? visualPool[index % visualPool.length];

    return {
      slug,
      seriesSlug: record.isSeries ? `${slug}-series` : undefined,
      title: {
        zh: record.title,
        ja: record.title,
        en: record.aliases.find((alias) => /[a-z]/i.test(alias)) ?? record.title
      },
      aliases: [...record.aliases, record.raw],
      status: "completed",
      watchedEpisodes: record.watchedEpisodes,
      totalEpisodes: record.totalEpisodes,
      progressPercent: record.progressPercent,
      platform: record.platform,
      cover: visual.cover,
      banner: visual.banner,
      accent: visual.accent,
      description: {
        zh: "这条记录来自你的原始观看列表。简介、封面和公开评分后续会通过 Bangumi / AniList 补全；这里不写个人短评。",
        ja: "元の視聴リストから取り込んだ記録。概要と公開評価は後で補完する。",
        en: "Imported from the raw watch list. Metadata and public ratings can be filled later."
      },
      tags: record.tags,
      ratings: {}
    };
  });

  const seriesEntries: SeriesEntry[] = animeEntries
    .filter((entry) => entry.seriesSlug)
    .map((entry) => ({
      slug: entry.seriesSlug!,
      title: {
        zh: `${entry.title.zh} 系列`,
        ja: `${entry.title.ja} シリーズ`,
        en: `${entry.title.en} Series`
      },
      entrySlugs: [entry.slug],
      cover: entry.cover,
      banner: entry.banner,
      accent: entry.accent,
      tags: entry.tags
    }));

  const watchEvents: WatchEvent[] = [];

  return { animeEntries, seriesEntries, watchEvents };
}
