import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createServer } from "vite";
import {
  createMetadataCacheKey,
  parseImportMetadataRecords
} from "./import-metadata-cache.mjs";

const metadataPath = new URL("../src/data/importMetadata.ts", import.meta.url);
const reportPath = new URL("../.tmp/metadata-backfill-report.json", import.meta.url);
const userAgent = "hufaei-github-pages/0.1.0 (https://github.com/hufaei/hufaei.github.io)";
const writeChanges = process.argv.includes("--write");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function uniqueValues(values) {
  return [...new Set(values.map((value) => String(value ?? "").trim()).filter(Boolean))];
}

function normalize(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s·・:：,，.。!！?？'"“”‘’()[\]（）【】《》<>+＋\-—_～~]/gu, "");
}

function parseSmallCount(value) {
  const normalized = String(value ?? "").trim();
  const digitMap = {
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

  if (/^\d+$/u.test(normalized)) return Number(normalized);
  if (digitMap[normalized]) return digitMap[normalized];
  if (/^十[一二三四五六七八九]$/u.test(normalized)) return 10 + digitMap[normalized.at(1)];
  return undefined;
}

function chineseOrdinal(value) {
  const digits = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"];
  return digits[value] ?? String(value);
}

function detectSeasonNumberFromText(value) {
  const text = String(value ?? "");
  const cjkSeason = text.match(/(?:第\s*)?([一二两三四五六七八九十]|\d+)\s*(?:季|期|部分|部|クール|シーズン)/u);
  if (cjkSeason) return parseSmallCount(cjkSeason[1]);

  const japaneseRomanSeason = text.match(/[ⅡⅢⅣⅤ]/u)?.[0];
  if (japaneseRomanSeason) return { "Ⅱ": 2, "Ⅲ": 3, "Ⅳ": 4, "Ⅴ": 5 }[japaneseRomanSeason];

  const englishSeason = text.match(/\b(?:season|part)\s*(\d+)\b/iu)
    ?? text.match(/\b(\d+)(?:st|nd|rd|th)\s+season\b/iu);
  if (englishSeason) return Number(englishSeason[1]);

  const englishOrdinal = text.match(/\b(second|third|fourth|fifth)\s+season\b/iu)?.[1]?.toLowerCase();
  if (englishOrdinal) return { second: 2, third: 3, fourth: 4, fifth: 5 }[englishOrdinal];

  const romanSeason = text.match(/\b(II|III|IV|V)\b/u)?.[1];
  if (romanSeason) return { II: 2, III: 3, IV: 4, V: 5 }[romanSeason];

  return undefined;
}

function detectMetadataSeasonNumber(part) {
  return detectSeasonNumberFromText(
    uniqueValues([part.inputTitle, part.query, part.titleZh, part.titleJa, part.titleEn, part.matchedTitle]).join(" ")
  );
}

function stripSeasonSuffix(value) {
  const stripped = String(value ?? "")
    .replace(/\s*(?:第\s*)?[一二两三四五六七八九十\d]+\s*(?:季|期|部分|部)\s*$/u, "")
    .replace(/\s*(?:第\s*)?[一二两三四五六七八九十\d]+\s*(?:シーズン|クール)\s*$/u, "")
    .replace(/\s*(?:season\s*)?\d+\s*$/iu, "")
    .replace(/\s*(?:second|third|fourth|fifth)\s+season\s*$/iu, "")
    .replace(/\s+\b(?:II|III|IV|V)\b(?::.*)?$/u, "")
    .replace(/\s*[ⅡⅢⅣⅤ]\s*$/u, "")
    .replace(/[~～\s]+$/u, "")
    .trim();

  return stripped || String(value ?? "").trim();
}

function bgmAliasValues(subject, includeTags = true) {
  const values = [subject.name, subject.name_cn];
  for (const item of subject.infobox ?? []) {
    if (item.key === "别名") {
      if (Array.isArray(item.value)) values.push(...item.value.map((entry) => entry.v));
      if (typeof item.value === "string") values.push(item.value);
    }
    if (item.key === "中文名" && typeof item.value === "string") values.push(item.value);
  }
  if (includeTags) values.push(...(subject.tags ?? []).map((tag) => tag.name));
  return values.filter(Boolean);
}

function cleanDescription(value) {
  return String(value ?? "")
    .replace(/<[^>]+>/gu, "")
    .replace(/&nbsp;/gu, " ")
    .replace(/&amp;/gu, "&")
    .replace(/\r?\n{3,}/gu, "\n\n")
    .trim() || undefined;
}

function parseYear(value) {
  const year = Number(String(value ?? "").slice(0, 4));
  return Number.isFinite(year) && year > 1900 ? year : undefined;
}

function pickEnglishTitle(values) {
  return values.find((value) => {
    const text = String(value ?? "").trim();
    return /[a-z]/iu.test(text) && !/^\d{4}|TV|OVA|SP|A-1|MAPPA|京都|动画|日本|小说|漫画/iu.test(text);
  });
}

function isMovieLike(value) {
  return /剧场版|映画|电影|movie/i.test(String(value ?? ""));
}

function isTvLike(value) {
  return /TV|WEB|ONA|季|期|集|话|話|\d+\s*(?:集|话|話)?/i.test(String(value ?? ""));
}

function isGenericPartTitle(value) {
  return /^(剧场版|映画|movie|ova|sp|web|tv|extra edition)$/iu.test(String(value ?? "").trim());
}

function compactQuery(value) {
  return String(value ?? "")
    .replace(/[（(][^）)]*[）)]/gu, "")
    .replace(/\b(?:ova|sp|web|tv)\b/giu, " ")
    .replace(/\d{1,3}\s*(?:集|话|話)?/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
}

function bigrams(value) {
  const normalized = normalize(value);
  if (normalized.length <= 1) return normalized ? [normalized] : [];
  return Array.from({ length: normalized.length - 1 }, (_, index) => normalized.slice(index, index + 2));
}

function diceCoefficient(a, b) {
  const left = bigrams(a);
  const right = bigrams(b);
  if (!left.length || !right.length) return 0;
  const counts = new Map();
  for (const gram of left) counts.set(gram, (counts.get(gram) ?? 0) + 1);
  let overlap = 0;
  for (const gram of right) {
    const count = counts.get(gram) ?? 0;
    if (!count) continue;
    overlap += 1;
    counts.set(gram, count - 1);
  }
  return (2 * overlap) / (left.length + right.length);
}

function relationScore(name, target) {
  const candidate = normalize(name);
  const expected = normalize(target);
  if (!candidate || !expected) return 0;
  if (candidate === expected) return 120;
  const minLength = Math.min(candidate.length, expected.length);
  if (minLength >= 4 && (candidate.includes(expected) || expected.includes(candidate))) return 92;
  if (minLength >= 3 && (candidate.includes(expected) || expected.includes(candidate))) return 70;

  const dice = diceCoefficient(candidate, expected);
  if (dice >= 0.82) return 84;
  if (dice >= 0.7) return 72;
  if (dice >= 0.58) return 58;
  return Math.round(dice * 70);
}

function expectedPlatformPenalty(subject, target) {
  const subjectPlatform = subject.platform ?? "";
  if (target.expectedPlatform === "movie") return subjectPlatform === "剧场版" ? 16 : -28;
  if (target.expectedPlatform === "tv") return subjectPlatform === "TV" || subjectPlatform === "WEB" ? 10 : isMovieLike(subjectPlatform) ? -24 : 0;
  return isTvLike(subjectPlatform) || isMovieLike(subjectPlatform) ? 4 : 0;
}

function scoreBangumiSubject(subject, target, query) {
  const aliases = bgmAliasValues(subject);
  const targetTerms = uniqueValues([
    target.title,
    target.queryTitle,
    target.contextualTitle,
    query,
    target.contextTitle && !isGenericPartTitle(target.inputTitle) ? target.contextTitle : undefined
  ]).filter((term) => !isGenericPartTitle(term));
  const titleScore = Math.max(
    0,
    ...aliases.flatMap((name) => targetTerms.map((term) => relationScore(name, term)))
  );
  const candidateSeason = detectSeasonNumberFromText(aliases.join(" "));
  let seasonScore = 0;

  if (target.seasonNumber) {
    if (target.seasonNumber === 1) {
      seasonScore = candidateSeason && candidateSeason !== 1 ? -42 : 16;
    } else if (candidateSeason === target.seasonNumber) {
      seasonScore = 34;
    } else if (candidateSeason) {
      seasonScore = -48;
    } else {
      seasonScore = titleScore >= 110 ? 8 : -20;
    }
  }

  let score = titleScore + seasonScore + expectedPlatformPenalty(subject, target);
  if (subject.total_episodes || subject.eps) score += 8;
  if (subject.rating?.score) score += 4;
  if (subject.rating?.rank) score += 4;
  if (subject.rating?.total) score += Math.min(6, Math.floor(subject.rating.total / 1000));
  if (subject.images?.large) score += 3;

  return score;
}

function exactTargetMatch(subject, target) {
  const aliases = bgmAliasValues(subject, false).map(normalize).filter(Boolean);
  const targets = uniqueValues([target.title, target.queryTitle, target.contextualTitle])
    .filter((term) => !isGenericPartTitle(term))
    .map(normalize)
    .filter(Boolean);

  return aliases.some((alias) => targets.includes(alias));
}

function mapBangumiSubject(target, subject, score, query) {
  const aliases = bgmAliasValues(subject, false);
  return {
    inputTitle: target.inputTitle,
    matchedTitle: subject.name_cn || subject.name,
    titleZh: subject.name_cn || subject.name,
    titleJa: subject.name || subject.name_cn,
    titleEn: pickEnglishTitle(aliases) || undefined,
    description: cleanDescription(subject.summary),
    cover: subject.images?.large || subject.images?.medium || subject.images?.common || undefined,
    banner: subject.images?.large || subject.images?.medium || subject.images?.common || undefined,
    year: parseYear(subject.date),
    startDate: subject.date || undefined,
    source: "bangumi",
    sourceUrl: `https://bgm.tv/subject/${subject.id}`,
    platform: subject.platform,
    totalEpisodes: subject.total_episodes || subject.eps || undefined,
    rating: subject.rating?.score || undefined,
    ratingRank: subject.rating?.rank || undefined,
    ratingTotal: subject.rating?.total || undefined,
    confidence: score,
    query,
    metadataFetched: Boolean(subject.summary || subject.images?.large || subject.date)
  };
}

function cacheStamp(part, target) {
  const context = {
    raw: target.raw,
    inputTitle: part.inputTitle,
    context: target.contextTitle ?? target.inputTitle,
    partIndex: target.partIndex,
    hints: []
  };

  return {
    ...part,
    cacheKey: createMetadataCacheKey(context),
    hintSignature: "[]"
  };
}

async function searchBangumi(target) {
  const byId = new Map();
  for (const query of target.queries) {
    let response;
    for (let attempt = 0; attempt < 2; attempt += 1) {
      try {
        response = await fetch("https://api.bgm.tv/v0/search/subjects?limit=10&offset=0", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": userAgent
          },
          body: JSON.stringify({
            keyword: query,
            sort: "match",
            filter: { type: [2] }
          })
        });
        break;
      } catch {
        await sleep(1200);
      }
    }

    if (!response?.ok) {
      await sleep(800);
      continue;
    }

    const payload = await response.json();
    for (const subject of payload.data ?? []) {
      if (!subject || subject.nsfw) continue;
      const score = scoreBangumiSubject(subject, target, query);
      const current = byId.get(subject.id);
      if (!current || score > current.score) {
        byId.set(subject.id, { subject, score, query });
      }
    }

    await sleep(260);
  }

  const candidates = [...byId.values()].sort((a, b) => b.score - a.score);
  const [best, second] = candidates;
  const bestExact = best ? exactTargetMatch(best.subject, target) : false;
  const secondExact = second ? exactTargetMatch(second.subject, target) : false;
  const accepted = Boolean(
    best
    && best.score >= 104
    && (!second || best.score - second.score >= 7 || (bestExact && !secondExact) || best.subject.id === target.currentSubjectId)
    && (best.subject.total_episodes || best.subject.eps || best.score >= 126)
  );

  return {
    accepted,
    metadata: accepted ? cacheStamp(mapBangumiSubject(target, best.subject, best.score, best.query), target) : undefined,
    candidates: candidates.slice(0, 5).map(({ subject, score, query }) => ({
      id: subject.id,
      title: subject.name_cn || subject.name,
      platform: subject.platform,
      episodes: subject.total_episodes || subject.eps || undefined,
      score,
      query,
      rating: subject.rating?.score,
      rank: subject.rating?.rank
    }))
  };
}

function getRawIndexFromSlug(slug) {
  const match = slug.match(/^(?:watch-)?(\d{3})/u);
  return match ? Number(match[1]) - 1 : undefined;
}

function getPartIndexFromSlug(slug) {
  const match = slug.match(/-(\d{2})$/u);
  return match ? Number(match[1]) - 1 : 0;
}

function getWatchedSeasonCount(record) {
  const match = record.watchedParts?.match(/^已看(\d+)季$/u);
  return match ? Number(match[1]) : undefined;
}

function hasExplicitPartSeparator(raw) {
  return /[+＋]/u.test(raw);
}

function normalizeCoarseParts(parts, seasonCount) {
  const slots = Array.from({ length: seasonCount }, () => undefined);
  const leftovers = [];

  for (const [index, part] of parts.entries()) {
    const seasonNumber = detectMetadataSeasonNumber(part);
    const seasonIndex = seasonNumber ? seasonNumber - 1 : index;
    if (seasonIndex >= 0 && seasonIndex < seasonCount && !slots[seasonIndex]) {
      slots[seasonIndex] = part;
    } else {
      leftovers.push(part);
    }
  }

  for (const part of leftovers) {
    const emptyIndex = slots.findIndex((slot) => !slot);
    if (emptyIndex === -1) break;
    slots[emptyIndex] = part;
  }

  return slots;
}

function subjectIdFromUrl(sourceUrl) {
  return sourceUrl?.match(/bgm\.tv\/subject\/(\d+)/u)?.[1];
}

function buildTargetQueries(target) {
  const queries = [
    target.queryTitle,
    target.contextualTitle,
    target.title,
    compactQuery(target.queryTitle),
    compactQuery(target.contextualTitle)
  ];

  if (!isGenericPartTitle(target.inputTitle)) queries.push(target.inputTitle);
  if (target.seasonNumber && target.baseTitle) {
    queries.push(`${target.baseTitle} 第${chineseOrdinal(target.seasonNumber)}季`);
    queries.push(`${target.baseTitle} ${target.seasonNumber}期`);
  }

  return uniqueValues(queries).filter((query) => query.length >= 2 && !isGenericPartTitle(query));
}

function makeCoarseTargets({ raw, rawIndex, record, entries, metadataRecord }) {
  const seasonCount = getWatchedSeasonCount(record);
  const existingParts = normalizeCoarseParts(metadataRecord.parts ?? [], seasonCount);
  const primaryMetadata = existingParts.find(Boolean);
  const baseTitle = stripSeasonSuffix(
    primaryMetadata?.titleZh
    ?? primaryMetadata?.matchedTitle
    ?? entries[0]?.title?.zh
    ?? record.title
  );

  return entries.map((entry, partIndex) => {
    const seasonNumber = partIndex + 1;
    const title = entry.title.zh;
    const queryTitle = seasonNumber === 1 ? baseTitle : `${baseTitle} 第${chineseOrdinal(seasonNumber)}季`;
    return {
      raw,
      rawIndex,
      partIndex,
      inputTitle: queryTitle,
      title,
      queryTitle,
      contextualTitle: queryTitle,
      contextTitle: baseTitle,
      baseTitle,
      seasonNumber,
      expectedPlatform: "tv",
      currentPart: existingParts[partIndex],
      currentSubjectId: subjectIdFromUrl(existingParts[partIndex]?.sourceUrl),
      queries: []
    };
  }).map((target) => ({ ...target, queries: buildTargetQueries(target) }));
}

function rawPartSegments(raw) {
  return raw
    .replace(/➕/gu, "+")
    .replace(/^\+\s*/u, "")
    .split(/\s*[+＋]\s*/u)
    .map((part) => part.trim())
    .filter(Boolean);
}

function makeExplicitTargets({ raw, rawIndex, record, entries, metadataRecord }) {
  const segments = rawPartSegments(raw);
  const contextTitle = record.parts[0];

  return record.parts.map((inputTitle, partIndex) => {
    const entry = entries[partIndex];
    const rawSegment = segments[partIndex] ?? inputTitle;
    const segmentSeason = detectSeasonNumberFromText(rawSegment);
    const queryTitle = segmentSeason && !detectSeasonNumberFromText(inputTitle)
      ? `${inputTitle} 第${chineseOrdinal(segmentSeason)}季`
      : inputTitle;
    const contextualTitle = partIndex > 0 && contextTitle && inputTitle !== contextTitle
      ? `${contextTitle} ${queryTitle}`
      : queryTitle;
    const expectedPlatform = isMovieLike(inputTitle) || isMovieLike(rawSegment)
      ? "movie"
      : isTvLike(rawSegment) || record.platform === "TV"
        ? "tv"
        : undefined;

    return {
      raw,
      rawIndex,
      partIndex,
      inputTitle,
      title: queryTitle,
      displayTitle: entry?.title?.zh ?? queryTitle,
      queryTitle,
      contextualTitle,
      contextTitle,
      baseTitle: contextTitle,
      seasonNumber: segmentSeason,
      expectedPlatform,
      currentPart: metadataRecord.parts?.[partIndex],
      currentSubjectId: subjectIdFromUrl(metadataRecord.parts?.[partIndex]?.sourceUrl),
      queries: []
    };
  }).map((target) => ({ ...target, queries: buildTargetQueries(target) }));
}

function formatOutput(records) {
  return `export type ImportMetadataSource = "bangumi" | "anilist";

export type ImportMetadataPart = {
  inputTitle: string;
  matchedTitle?: string;
  titleZh?: string;
  titleJa?: string;
  titleEn?: string;
  description?: string;
  descriptionJa?: string;
  descriptionEn?: string;
  cover?: string;
  banner?: string;
  accent?: string;
  year?: number;
  startDate?: string;
  source?: ImportMetadataSource;
  sourceUrl?: string;
  platform?: string;
  totalEpisodes?: number;
  rating?: number;
  ratingRank?: number;
  ratingTotal?: number;
  popularity?: number;
  confidence: number;
  query?: string;
  metadataFetched?: boolean;
  cacheKey?: string;
  hintSignature?: string;
};

export type ImportMetadataRecord = {
  raw: string;
  parts: ImportMetadataPart[];
};

export const importMetadataRecords: ImportMetadataRecord[] = ${JSON.stringify(records, null, 2)};
`;
}

async function loadArchive() {
  const server = await createServer({
    configFile: false,
    server: { middlewareMode: true },
    appType: "custom",
    root: process.cwd(),
    logLevel: "silent"
  });

  try {
    const { rawWatchRecords } = await server.ssrLoadModule("/src/data/watchRecords.ts");
    const { importMetadataRecords } = await server.ssrLoadModule("/src/data/importMetadata.ts");
    const { createArchiveFromRawRecords, parseWatchRecordLine } = await server.ssrLoadModule("/src/data/watchRecordParser.ts");
    const archive = createArchiveFromRawRecords(rawWatchRecords, importMetadataRecords);
    return { rawWatchRecords, archive, parseWatchRecordLine };
  } finally {
    await server.close();
  }
}

async function main() {
  const source = await readFile(metadataPath, "utf8");
  const records = parseImportMetadataRecords(source);
  const recordsByRaw = new Map(records.map((record) => [record.raw, record]));
  const { rawWatchRecords, archive, parseWatchRecordLine } = await loadArchive();
  const entriesByRawIndex = new Map();

  for (const entry of archive.animeEntries) {
    const rawIndex = getRawIndexFromSlug(entry.slug);
    if (typeof rawIndex !== "number") continue;
    const entries = entriesByRawIndex.get(rawIndex) ?? [];
    entries[getPartIndexFromSlug(entry.slug)] = entry;
    entriesByRawIndex.set(rawIndex, entries);
  }

  const missingEntries = archive.animeEntries.filter((entry) => typeof entry.totalEpisodes !== "number");
  const rawIndexesWithMissing = [...new Set(missingEntries.map((entry) => getRawIndexFromSlug(entry.slug)).filter(Number.isInteger))];
  const report = [];
  let acceptedCount = 0;

  for (const rawIndex of rawIndexesWithMissing) {
    const raw = rawWatchRecords[rawIndex];
    const record = parseWatchRecordLine(raw);
    const metadataRecord = recordsByRaw.get(raw) ?? { raw, parts: [] };
    const entries = entriesByRawIndex.get(rawIndex) ?? [];
    const seasonCount = getWatchedSeasonCount(record);
    const coarse = Boolean(seasonCount && seasonCount >= 2 && record.parts.length === 1 && !hasExplicitPartSeparator(raw));
    const targets = coarse
      ? makeCoarseTargets({ raw, rawIndex, record, entries, metadataRecord })
      : makeExplicitTargets({ raw, rawIndex, record, entries, metadataRecord });

    const newParts = coarse
      ? normalizeCoarseParts(metadataRecord.parts ?? [], seasonCount)
      : [...(metadataRecord.parts ?? [])];
    const rawReport = { rawIndex: rawIndex + 1, raw, coarse, targets: [] };

    for (const target of targets) {
      const currentHasEpisodes = typeof target.currentPart?.totalEpisodes === "number" && target.currentPart.totalEpisodes > 0;
      const currentTitle = target.currentPart?.titleZh ?? target.currentPart?.matchedTitle;
      const currentLooksContextual = currentTitle
        ? relationScore(currentTitle, target.contextualTitle) >= 70 || relationScore(currentTitle, target.queryTitle) >= 84
        : false;

      if (currentHasEpisodes && currentLooksContextual) {
        rawReport.targets.push({
          partIndex: target.partIndex + 1,
          title: target.title,
          status: "kept-current",
          current: currentTitle
        });
        continue;
      }

      const result = await searchBangumi(target);
      if (result.accepted && result.metadata) {
        newParts[target.partIndex] = result.metadata;
        acceptedCount += 1;
      }

      rawReport.targets.push({
        partIndex: target.partIndex + 1,
        title: target.title,
        queryTitle: target.queryTitle,
        queries: target.queries,
        status: result.accepted ? "accepted" : "skipped",
        accepted: result.metadata
          ? {
              title: result.metadata.titleZh,
              sourceUrl: result.metadata.sourceUrl,
              platform: result.metadata.platform,
              episodes: result.metadata.totalEpisodes,
              rating: result.metadata.rating,
              rank: result.metadata.ratingRank,
              confidence: result.metadata.confidence
            }
          : undefined,
        candidates: result.candidates
      });
    }

    metadataRecord.parts = newParts.filter(Boolean);
    rawReport.partsAfter = metadataRecord.parts.map((part) => ({
      title: part.titleZh ?? part.matchedTitle ?? part.inputTitle,
      episodes: part.totalEpisodes,
      sourceUrl: part.sourceUrl
    }));
    report.push(rawReport);
    console.log(`${String(rawIndex + 1).padStart(3, "0")} ${raw} -> ${rawReport.targets.filter((target) => target.status === "accepted").length}/${rawReport.targets.length}`);
  }

  await mkdir(new URL("../.tmp/", import.meta.url), { recursive: true });
  await writeFile(reportPath, `${JSON.stringify(report, null, 2)}\n`, "utf8");

  if (writeChanges) {
    await writeFile(metadataPath, formatOutput(records), "utf8");
  }

  console.log(
    `${writeChanges ? "Wrote" : "Dry-run"} ${acceptedCount} accepted metadata updates across ${rawIndexesWithMissing.length} raw records. Report: ${reportPath.pathname}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
