import { readFile, writeFile } from "node:fs/promises";
import {
  findCachedMetadataPart,
  parseImportMetadataRecords,
  shouldReuseMetadataPart,
  stampMetadataCache
} from "./import-metadata-cache.mjs";

const sourcePath = new URL("../src/data/watchRecords.ts", import.meta.url);
const outputPath = new URL("../src/data/importMetadata.ts", import.meta.url);

const userAgent = "hufaei-github-pages/0.1.0 (https://github.com/hufaei/hufaei.github.io)";
const confidenceThreshold = 35;
const forceRefresh = process.argv.includes("--refresh") || process.env.REFRESH_IMPORT_METADATA === "1";

const manualQueryHints = new Map([
  ["打了300年史莱姆不知不觉满级", ["打了300年的史莱姆，不知不觉就练到了满级"]],
  ["在魔王的城堡说晚安", ["在魔王城说晚安"]],
  ["咒文禁忌", ["禁忌咒纹"]],
  ["关于我女友是一个一本正经的处女碧池", ["关于我女友是个一本正经的碧池这件事"]],
  ["Litter Buster", ["Little Busters!"]],
  ["为什么老师在这里", ["为什么老师会在这里！？"]],
  ["欢迎来到实力主义至上教室", ["欢迎来到实力至上主义的教室"]],
  ["因为太怕痛所以全点了防御", ["因为太怕痛就全点防御力了", "痛いのは嫌なので防御力に極振りしたいと思います"]],
  ["喜欢本大爷的就你一个", ["喜欢本大爷的竟然就你一个？"]],
  ["不是说了能力值要平均吗", ["我，不是说了能力要平均值么！"]],
  ["好比是最终迷宫前的少年到新手村生活的故事", ["好比是最终迷宫前的少年到新手村生活一般的故事"]],
  ["就算是哥哥只要有爱就没问题了吧", ["就算是哥哥只要有爱就没问题对吧"]],
  ["天才王子的赤子振兴术", ["天才王子的赤字国家振兴术"]],
  ["我太受欢迎了怎么办", ["我太受欢迎了该怎么办"]],
  ["式守同学不止可爱", ["式守同学不只可爱而已"]],
  ["Grils Band Cry 哭泣少女乐队", ["GIRLS BAND CRY", "ガールズバンドクライ"]],
  ["Ave Mujika", ["BanG Dream! Ave Mujica"]],
  ["亚托莉 -我挚爱的时光", ["ATRI -My Dear Moments-", "亚托莉 -我挚爱的时光-"]],
  ["沉默美女的秘密", ["沉默魔女的秘密", "Silent Witch"]],
  ["薰香花朵凌然绽放", ["薰香花朵凛然绽放", "薫る花は凛と咲く"]],
  ["红传说", ["为美好的世界献上祝福 红传说", "この素晴らしい世界に祝福を 紅伝説"]],
  ["无星之夜的咏叹调", ["刀剑神域 进击篇 无星之夜的咏叹调"]],
  ["序列之争", ["刀剑神域 序列之争"]],
  ["进击篇暮色黄昏", ["刀剑神域 进击篇 暮色黄昏"]],
  ["暮色黄昏", ["刀剑神域 进击篇 暮色黄昏"]],
  ["名古屋决战", ["终结的炽天使 名古屋决战"]],
  ["过去未来篇", ["境界的彼方 过去篇", "境界的彼方 未来篇"]],
  ["初吻不会结束", ["辉夜大小姐 初吻不会结束"]],
  ["通往大人的阶梯", ["辉夜大小姐 通往大人的阶梯"]],
  ["红莲之绊", ["关于我转生变成史莱姆这档事 红莲之绊"]],
  ["彩叶草之梦", ["关于我转生变成史莱姆这档事 彩叶草之梦"]],
  ["凪 剧场版", ["蓝色监狱 凪"]],
  ["fine剧场版", ["路人女主的养成方法 Fine"]],
  ["玉子爱情故事", ["玉子市场 玉子爱情故事"]],
  ["Reze篇", ["电锯人 蕾塞篇"]],
  ["DEAD APPLE", ["文豪野犬 DEAD APPLE"]],
  ["Home Sweet Home", ["花开伊吕波 Home Sweet Home"]]
]);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isCasualNote(value) {
  return /垃圾|烂|沒動靜|没动静|延期|wait|老神作|かみだ|漫画|至少.*看完|似乎可行|前后半|β线/i.test(value)
    || /^(完|[？！?!]+)$/u.test(value.trim());
}

function stripCasualNotes(line) {
  return line.replace(/[（(]([^）)]*)[）)]/gu, (match, content) => {
    return isCasualNote(content) ? "" : match;
  });
}

function cleanTitle(line) {
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
    .replace(/\s*([+＋])\s*/gu, " + ")
    .replace(/\s{2,}/gu, " ")
    .replace(/\s*[+＋]\s*$/u, "")
    .trim();

  return withoutNotes || line.trim();
}

function normalize(value) {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s·・:：,，.。!！?？'"“”‘’()[\]（）【】《》<>+＋\-—_]/gu, "");
}

function compactQuery(value) {
  return value
    .replace(/[（(][^）)]*[）)]/gu, "")
    .replace(/\b(?:ova|sp|web)\b/giu, " ")
    .replace(/(?:第一季|第二季|第三季|第四季|第五季|二季|三季|四季|五季|两季|2季|3季|4季|5季|剧场版|映画|外传|全册|系列|前后半|part|篇|部)/giu, " ")
    .replace(/\d{1,3}\s*(?:集|话|話)?/gu, " ")
    .replace(/\s+/gu, " ")
    .trim();
}

function splitRecordParts(line) {
  const title = cleanTitle(line);
  const parts = title
    .split(/\s*[+＋]\s*/u)
    .map((part) => part.trim())
    .filter(Boolean);

  return parts.length ? parts : [title];
}

function buildQueries(part, context) {
  const queries = [
    ...(manualQueryHints.get(part) ?? []),
    part,
    compactQuery(part)
  ];

  if (context && context !== part) {
    queries.push(`${context} ${part}`, `${context}${part}`);
  }

  return [...new Set(queries.map((query) => query.trim()).filter((query) => query.length >= 2))];
}

function createCacheContext(raw, inputTitle, context, partIndex) {
  return {
    raw,
    inputTitle,
    context,
    partIndex,
    hints: manualQueryHints.get(inputTitle) ?? [],
    confidenceThreshold,
    forceRefresh
  };
}

async function readExistingMetadataRecords() {
  if (forceRefresh) return [];

  try {
    return parseImportMetadataRecords(await readFile(outputPath, "utf8"));
  } catch {
    return [];
  }
}

function bgmAliasValues(subject) {
  const values = [subject.name, subject.name_cn, ...(subject.tags ?? []).map((tag) => tag.name)];
  for (const item of subject.infobox ?? []) {
    if (item.key === "别名") {
      if (Array.isArray(item.value)) values.push(...item.value.map((entry) => entry.v));
      if (typeof item.value === "string") values.push(item.value);
    }
    if (item.key === "中文名" && typeof item.value === "string") values.push(item.value);
  }
  return values.filter(Boolean);
}

function scoreBangumiSubject(subject, part, context, query) {
  const expected = [part, compactQuery(part), context, query]
    .map(normalize)
    .filter(Boolean);
  const names = bgmAliasValues(subject).map(normalize).filter(Boolean);
  let score = 0;

  for (const name of names) {
    for (const target of expected) {
      if (!name || !target) continue;
      if (name === target) score = Math.max(score, 120);
      else if (name.includes(target) || target.includes(name)) score = Math.max(score, 70);
    }
  }

  if (subject.images?.large) score += 4;
  if (subject.platform === "TV" || subject.platform === "剧场版" || subject.platform === "OVA") score += 3;
  if (subject.rating?.total) score += Math.min(8, Math.floor(subject.rating.total / 500));
  return score;
}

async function searchBangumi(part, context) {
  for (const query of buildQueries(part, context)) {
    const response = await fetch("https://api.bgm.tv/v0/search/subjects?limit=8&offset=0", {
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

    if (!response.ok) {
      await sleep(700);
      continue;
    }

    const payload = await response.json();
    const candidates = (payload.data ?? [])
      .filter((subject) => subject && !subject.nsfw)
      .map((subject) => ({
        subject,
        score: scoreBangumiSubject(subject, part, context, query)
      }))
      .sort((a, b) => b.score - a.score);

    if (candidates[0]?.score >= confidenceThreshold) {
      const { subject, score } = candidates[0];
      return {
        inputTitle: part,
        matchedTitle: subject.name_cn || subject.name,
        source: "bangumi",
        sourceUrl: `https://bgm.tv/subject/${subject.id}`,
        platform: subject.platform,
        totalEpisodes: subject.total_episodes || subject.eps || undefined,
        rating: subject.rating?.score || undefined,
        confidence: score,
        query
      };
    }

    await sleep(220);
  }

  return undefined;
}

function scoreAniListMedia(media, part, context, query) {
  const expected = [part, compactQuery(part), context, query].map(normalize).filter(Boolean);
  const names = [media.title?.romaji, media.title?.english, media.title?.native]
    .map((value) => value && normalize(value))
    .filter(Boolean);
  let score = 0;

  for (const name of names) {
    for (const target of expected) {
      if (name === target) score = Math.max(score, 120);
      else if (name.includes(target) || target.includes(name)) score = Math.max(score, 62);
    }
  }

  if (media.episodes) score += 4;
  if (media.averageScore) score += 3;
  return score;
}

async function searchAniList(part, context) {
  for (const query of buildQueries(part, context)) {
    const response = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": userAgent
      },
      body: JSON.stringify({
        query: `query ($search: String) {
          Media(search: $search, type: ANIME) {
            id
            isAdult
            siteUrl
            episodes
            format
            averageScore
            title { romaji english native }
          }
        }`,
        variables: { search: query }
      })
    });

    if (!response.ok) {
      await sleep(900);
      continue;
    }

    const media = (await response.json()).data?.Media;
    if (media && !media.isAdult) {
      const score = scoreAniListMedia(media, part, context, query);
      if (score >= confidenceThreshold) {
        return {
          inputTitle: part,
          matchedTitle: media.title.english || media.title.romaji || media.title.native,
          source: "anilist",
          sourceUrl: media.siteUrl,
          platform: media.format,
          totalEpisodes: media.episodes || undefined,
          rating: media.averageScore ? media.averageScore / 10 : undefined,
          confidence: score,
          query
        };
      }
    }

    await sleep(260);
  }

  return undefined;
}

async function resolvePart(part, context) {
  const bangumi = await searchBangumi(part, context);
  if (bangumi) return bangumi;

  const anilist = await searchAniList(part, context);
  if (anilist) return anilist;

  return {
    inputTitle: part,
    confidence: 0
  };
}

async function main() {
  const source = await readFile(sourcePath, "utf8");
  const [, rawText] = source.match(/String\.raw`([\s\S]*?)`\.trim\(\)/u) ?? [];
  if (!rawText) throw new Error("Unable to read raw watch records.");

  const lines = rawText.split(/\r?\n/u).map((line) => line.trim()).filter(Boolean);
  const cachedRecords = await readExistingMetadataRecords();
  const cachedByRaw = new Map(cachedRecords.map((record) => [record.raw, record]));
  const records = [];
  let matched = 0;
  let unresolved = 0;
  let reused = 0;
  let refreshed = 0;

  for (const [index, raw] of lines.entries()) {
    const parts = splitRecordParts(raw);
    const context = parts[0];
    const resolvedParts = [];
    let reusedForLine = 0;

    for (const [partIndex, part] of parts.entries()) {
      const cacheContext = createCacheContext(raw, part, context, partIndex);
      const cachedPart = findCachedMetadataPart(cachedByRaw.get(raw), cacheContext);
      const reusedCachedPart = shouldReuseMetadataPart(cachedPart, cacheContext);
      const resolved = reusedCachedPart
        ? stampMetadataCache(cachedPart, cacheContext)
        : stampMetadataCache(await resolvePart(part, context), cacheContext);

      if (reusedCachedPart) {
        reused += 1;
        reusedForLine += 1;
      } else {
        refreshed += 1;
      }

      if (resolved.source) matched += 1;
      else unresolved += 1;
      resolvedParts.push(resolved);
      if (!reusedCachedPart) await sleep(260);
    }

    records.push({ raw, parts: resolvedParts });
    console.log(
      `${String(index + 1).padStart(3, "0")}/${lines.length}`,
      `${resolvedParts.filter((part) => part.source).length}/${parts.length}`,
      `cache ${reusedForLine}/${parts.length}`,
      cleanTitle(raw)
    );
  }

  const output = `export type ImportMetadataSource = "bangumi" | "anilist";

export type ImportMetadataPart = {
  inputTitle: string;
  matchedTitle?: string;
  source?: ImportMetadataSource;
  sourceUrl?: string;
  platform?: string;
  totalEpisodes?: number;
  rating?: number;
  confidence: number;
  query?: string;
  cacheKey?: string;
  hintSignature?: string;
};

export type ImportMetadataRecord = {
  raw: string;
  parts: ImportMetadataPart[];
};

export const importMetadataRecords: ImportMetadataRecord[] = ${JSON.stringify(records, null, 2)};
`;

  await writeFile(outputPath, output, "utf8");
  console.log(`Wrote ${records.length} records (${matched} matched parts, ${unresolved} unresolved parts, ${reused} cached, ${refreshed} refreshed).`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
