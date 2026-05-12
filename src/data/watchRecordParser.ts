import type { AnimeEntry, SeriesEntry, WatchEvent } from "./types";
import { coverVisuals } from "./coverVisuals";
import type { ImportMetadataPart, ImportMetadataRecord } from "./importMetadata";

export type ParsedWatchRecord = {
  raw: string;
  title: string;
  parts: string[];
  aliases: string[];
  totalEpisodes?: number;
  watchedEpisodes?: number;
  watchedParts?: string;
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
  return /垃圾|烂|沒動靜|没动静|延期|wait|老神作|かみだ|漫画|至少.*看完|似乎可行|前后半|β线/i.test(value)
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

function parseSmallCount(value: string): number | undefined {
  const normalized = value.trim();
  const digitMap: Record<string, number> = {
    一: 1,
    二: 2,
    两: 2,
    三: 3,
    四: 4,
    五: 5,
    六: 6,
    七: 7,
    八: 8,
    九: 9,
    十: 10
  };

  if (/^\d+$/u.test(normalized)) {
    return Number(normalized);
  }

  if (digitMap[normalized]) {
    return digitMap[normalized];
  }

  if (/^十[一二三四五六七八九]$/u.test(normalized)) {
    return 10 + digitMap[normalized.at(1)!];
  }

  return undefined;
}

function extractWatchedParts(line: string): string | undefined {
  const withoutNotes = stripCasualNotes(line).replace(/➕/gu, "+");
  const compactCompleted = withoutNotes.match(/([1-9]{2,8})\s*(?:--|－|—)\s*完(?:结)?/u);
  if (compactCompleted) {
    return `已看${compactCompleted[1].length}季`;
  }

  const seasonCounts = [...withoutNotes.matchAll(/(?:第\s*)?([一二两三四五六七八九十]|\d+)\s*季/gu)]
    .map((match) => (/^\d{2,8}$/u.test(match[1]) ? match[1].length : parseSmallCount(match[1])))
    .filter((count): count is number => Boolean(count));
  if (seasonCounts.length) {
    return `已看${Math.max(...seasonCounts)}季`;
  }

  const compactParts = withoutNotes.match(/([1-9]{2,8})\s*部/u);
  if (compactParts) {
    return `已看${compactParts[1].length}部`;
  }

  const parts = withoutNotes.match(/([一二两三四五六七八九十]|\d+)\s*部/u);
  if (parts) {
    const count = parseSmallCount(parts[1]);
    if (count) return `已看${count}部`;
  }

  return undefined;
}

function cleanTitle(line: string): string {
  const withoutNotes = stripCasualNotes(line)
    .replace(/➕/gu, "+")
    .replace(/^\+\s*/u, "")
    .replace(/\s*(?:--|－|—)\s*完(?:结)?\s*/gu, " ")
    .replace(/\s*\d{2,8}\s*部/gu, "")
    .replace(/\s*[一二两三四五六七八九十]\s*部/gu, "")
    .replace(/\s*(?:第\s*)?[一二两三四五六七八九十]\s*季/gu, "")
    .replace(/\s*(?:第\s*)?\d+\s*季/gu, "")
    .replace(/\s*\d+\s*part\b/giu, "")
    .replace(/\s+(?:约\s*)?\d{1,3}\s*(?:集|话|話)?(?=\s*(?:$|[+＋]))/gu, "")
    .replace(/(?<=\D)\d{2,8}(?=\s*(?:$|[+＋]))/gu, "")
    .replace(/\s*\d{1,3}\s*-\s*？\s*$/u, "")
    .replace(/\s*(?:约\s*)?\d{1,3}\s*(?:集|话|話)?\s*$/u, "")
    .replace(/\s*\.\.\.\s*$/u, "")
    .replace(/\s*([+＋])\s*/gu, " $1 ")
    .replace(/\s{2,}/gu, " ")
    .replace(/\s*[+＋]\s*$/u, "")
    .trim();

  return withoutNotes || line.trim();
}

function splitRecordParts(line: string): string[] {
  const title = cleanTitle(line);
  const parts = title
    .split(/\s*[+＋]\s*/u)
    .map((part) => part.trim())
    .filter(Boolean);

  return parts.length ? parts : [title];
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

function buildTags(line: string, hasTotal: boolean, isSeries: boolean, watchedParts?: string): string[] {
  const tags = ["观看记录", "已看完"];

  if (isSeries) tags.push("系列");
  if (watchedParts) tags.push(watchedParts);
  if (/剧场版|映画|movie/i.test(line)) tags.push("含剧场版");
  if (/OVA|ova|SP|sp|番外|小剧场/u.test(line)) tags.push("含OVA-SP");
  if (!hasTotal && !watchedParts) tags.push("待补集数");

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

function slugifyPart(title: string, index: number, partIndex: number, partCount: number): string {
  const baseSlug = slugify(title, index);
  return partCount > 1 ? `${baseSlug}-${String(partIndex + 1).padStart(2, "0")}` : baseSlug;
}

function uniqueValues(values: Array<string | undefined>): string[] {
  return [...new Set(values.map((value) => value?.trim()).filter((value): value is string => Boolean(value)))];
}

function createFallbackDescription(title: string) {
  return {
    zh: `${title} 已从原始观看列表归档，公开简介仍待补充。`,
    ja: `${title} は元の視聴リストから取り込んだ記録です。公開データの概要は未補完です。`,
    en: `${title} was imported from the raw watch list. Public metadata is still pending.`
  };
}

function createRatings(metadata?: ImportMetadataPart) {
  if (!metadata?.source || typeof metadata.rating !== "number") return {};

  if (metadata.source === "bangumi") {
    return {
      bangumi: {
        score: metadata.rating,
        rank: metadata.ratingRank,
        total: metadata.ratingTotal
      }
    };
  }

  return {
    anilist: {
      averageScore: metadata.rating,
      popularity: metadata.popularity
    }
  };
}

function createEntryFromPart(
  record: ParsedWatchRecord,
  index: number,
  part: string,
  partIndex: number,
  metadata: ImportMetadataPart | undefined,
  seriesSlug: string | undefined
): AnimeEntry {
  const partCount = record.parts.length;
  const slug = slugifyPart(metadata?.titleZh ?? metadata?.matchedTitle ?? part, index, partIndex, partCount);
  const visual = coverVisuals[index + partIndex] ?? coverVisuals[index] ?? visualPool[(index + partIndex) % visualPool.length];
  const titleZh = metadata?.titleZh ?? metadata?.matchedTitle ?? part;
  const titleJa = metadata?.titleJa ?? metadata?.matchedTitle ?? titleZh;
  const titleEn = metadata?.titleEn ?? record.aliases.find((alias) => /[a-z]/i.test(alias)) ?? metadata?.matchedTitle ?? titleZh;
  const totalEpisodes = metadata?.totalEpisodes ?? (partCount === 1 ? record.totalEpisodes : undefined);
  const year = metadata?.year;
  const description = metadata?.description
    ? {
        zh: metadata.description,
        ja: metadata.descriptionJa ?? metadata.description,
        en: metadata.descriptionEn ?? metadata.description
      }
    : createFallbackDescription(titleZh);

  return {
    slug,
    seriesSlug,
    title: {
      zh: titleZh,
      ja: titleJa,
      en: titleEn
    },
    aliases: uniqueValues([
      ...record.aliases,
      part,
      metadata?.matchedTitle,
      metadata?.titleZh,
      metadata?.titleJa,
      metadata?.titleEn
    ]).filter((alias) => alias !== titleZh && alias !== titleJa && alias !== titleEn),
    status: "completed",
    watchedParts: record.watchedParts,
    watchedEpisodes: totalEpisodes,
    totalEpisodes,
    progressPercent: totalEpisodes ? 100 : record.progressPercent,
    year,
    source: metadata?.source,
    sourceUrl: metadata?.sourceUrl,
    platform: metadata?.platform ?? record.platform,
    cover: metadata?.cover ?? visual.cover,
    banner: metadata?.banner ?? metadata?.cover ?? visual.banner,
    accent: metadata?.accent ?? visual.accent,
    description,
    tags: record.tags,
    ratings: createRatings(metadata)
  };
}

export function parseWatchRecordLine(line: string, _index: number): ParsedWatchRecord {
  const raw = line.trim();
  const title = cleanTitle(raw);
  const parts = splitRecordParts(raw);
  const aliases = extractAliases(raw);
  const episodeCandidates = extractEpisodeCandidates(raw);
  const totalEpisodes = episodeCandidates.at(-1);
  const isSeries = detectSeries(raw);
  const watchedParts = extractWatchedParts(raw);

  return {
    raw,
    title,
    parts,
    aliases,
    totalEpisodes,
    watchedEpisodes: totalEpisodes,
    watchedParts,
    progressPercent: 100,
    isSeries,
    platform: detectPlatform(raw),
    tags: buildTags(raw, Boolean(totalEpisodes), isSeries, watchedParts)
  };
}

export function createArchiveFromRawRecords(lines: string[], metadataRecords: ImportMetadataRecord[] = []) {
  const records = lines.map(parseWatchRecordLine);
  const metadataByRaw = new Map(metadataRecords.map((record) => [record.raw, record]));

  const animeEntries: AnimeEntry[] = [];
  const seriesEntries: SeriesEntry[] = [];

  for (const [index, record] of records.entries()) {
    const metadata = metadataByRaw.get(record.raw);
    const isSeries = record.isSeries || record.parts.length > 1;
    const primaryPart = record.parts[0];
    const primaryMetadata = metadata?.parts?.[0];
    const seriesSlug = isSeries ? `${slugify(primaryMetadata?.titleZh ?? primaryMetadata?.matchedTitle ?? primaryPart, index)}-series` : undefined;
    const entries = record.parts.map((part, partIndex) =>
      createEntryFromPart(record, index, part, partIndex, metadata?.parts?.[partIndex], seriesSlug)
    );

    animeEntries.push(...entries);

    if (isSeries && seriesSlug) {
      const primaryEntry = entries[0];
      const years = uniqueValues(entries.map((entry) => entry.year?.toString())).map(Number).filter(Boolean);
      seriesEntries.push({
        slug: seriesSlug,
        title: {
          zh: `${primaryEntry.title.zh} 系列`,
          ja: `${primaryEntry.title.ja} シリーズ`,
          en: `${primaryEntry.title.en} Series`
        },
        entrySlugs: entries.map((entry) => entry.slug),
        year: years[0],
        years,
        cover: primaryEntry.cover,
        banner: primaryEntry.banner,
        accent: primaryEntry.accent,
        tags: record.tags
      });
    }
  }

  const watchEvents: WatchEvent[] = [];

  return { animeEntries, seriesEntries, watchEvents };
}
