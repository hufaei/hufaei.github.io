import { readFile, writeFile } from "node:fs/promises";

const sourcePath = new URL("../src/data/watchRecords.ts", import.meta.url);
const outputPath = new URL("../src/data/coverVisuals.ts", import.meta.url);

const userAgent = "hufaei-github-pages/0.1.0 (https://github.com/hufaei/hufaei.github.io)";
const accents = ["#bbf1a1", "#e4bb50", "#ffd6ae", "#9fd7ff", "#f0abfc", "#93c5fd", "#fca5a5", "#86efac"];

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function isCasualNote(value) {
  return /垃圾|烂|沒動靜|没动静|延期|wait|老神作|かみだ/i.test(value)
    || /^(完|[？！?!]+)$/u.test(value.trim());
}

function stripCasualNotes(line) {
  return line.replace(/[（(]([^）)]*)[）)]/gu, (match, content) => {
    return isCasualNote(content) ? "" : match;
  });
}

function extractAliases(line) {
  return [...line.matchAll(/[（(]([^）)]*)[）)]/gu)]
    .map((match) => match[1].trim())
    .filter((value) => value && !isCasualNote(value));
}

function cleanTitle(line) {
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

function buildQueries(line) {
  const title = cleanTitle(line);
  const firstPart = title.split(/[+＋]/u)[0].trim();
  const aliases = extractAliases(line);
  const queries = [
    title,
    firstPart,
    compactQuery(firstPart),
    compactQuery(title),
    ...aliases
  ]
    .map((query) => query.trim())
    .filter((query) => query.length >= 2);

  return [...new Set(queries)];
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

function scoreBangumiSubject(subject, line, query) {
  const expected = [cleanTitle(line), compactQuery(cleanTitle(line)), ...extractAliases(line), query]
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

  if (subject.images?.large) score += 8;
  if (subject.platform === "TV" || subject.platform === "剧场版" || subject.platform === "OVA") score += 3;
  if (subject.rating?.total) score += Math.min(10, Math.floor(subject.rating.total / 400));
  return score;
}

async function searchBangumi(line) {
  for (const query of buildQueries(line)) {
    const body = JSON.stringify({
      keyword: query,
      sort: "match",
      filter: { type: [2] }
    });
    const response = await fetch("https://api.bgm.tv/v0/search/subjects?limit=8&offset=0", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": userAgent
      },
      body
    });
    if (!response.ok) {
      await sleep(600);
      continue;
    }
    const payload = await response.json();
    const candidates = (payload.data ?? [])
      .filter((subject) => subject?.images?.large && !subject.nsfw)
      .map((subject) => ({
        subject,
        score: scoreBangumiSubject(subject, line, query)
      }))
      .sort((a, b) => b.score - a.score);

    if (candidates[0]?.score >= 35) {
      const subject = candidates[0].subject;
      return {
        cover: subject.images.large,
        banner: subject.images.large,
        sourceTitle: subject.name_cn || subject.name,
        sourceUrl: `https://bgm.tv/subject/${subject.id}`
      };
    }
    await sleep(260);
  }

  return undefined;
}

async function searchAniList(line) {
  for (const query of buildQueries(line)) {
    const body = JSON.stringify({
      query: `query ($search: String) {
        Media(search: $search, type: ANIME) {
          id
          isAdult
          siteUrl
          title { romaji english native }
          coverImage { extraLarge large color }
          bannerImage
        }
      }`,
      variables: { search: query }
    });
    const response = await fetch("https://graphql.anilist.co", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": userAgent
      },
      body
    });
    if (!response.ok) {
      await sleep(800);
      continue;
    }
    const media = (await response.json()).data?.Media;
    if (media?.coverImage && !media.isAdult) {
      return {
        cover: media.coverImage.extraLarge || media.coverImage.large,
        banner: media.bannerImage || media.coverImage.extraLarge || media.coverImage.large,
        accent: media.coverImage.color,
        sourceTitle: media.title.english || media.title.romaji || media.title.native,
        sourceUrl: media.siteUrl
      };
    }
    await sleep(260);
  }

  return undefined;
}

function fallbackVisual(line, index) {
  const title = cleanTitle(line).slice(0, 26);
  const escapedTitle = title
    .replace(/&/gu, "&amp;")
    .replace(/</gu, "&lt;")
    .replace(/>/gu, "&gt;")
    .replace(/"/gu, "&quot;");
  const accent = accents[index % accents.length];
  const coverSvg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800"><rect width="600" height="800" fill="#09090b"/><path d="M0 0h600v800H0z" fill="#111"/><path d="M0 120h600M0 260h600M0 400h600M0 540h600M0 680h600M120 0v800M300 0v800M480 0v800" stroke="#27272a" stroke-width="2"/><rect x="42" y="42" width="516" height="716" fill="none" stroke="${accent}" stroke-width="6"/><text x="58" y="360" fill="#f4f4f5" font-family="Arial, sans-serif" font-size="46" font-weight="700">${escapedTitle}</text><text x="58" y="430" fill="${accent}" font-family="Arial, sans-serif" font-size="22">cover pending</text></svg>`);
  const bannerSvg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 675"><rect width="1200" height="675" fill="#09090b"/><path d="M0 0h1200v675H0z" fill="#111"/><path d="M0 120h1200M0 260h1200M0 400h1200M0 540h1200M160 0v675M340 0v675M520 0v675M700 0v675M880 0v675M1060 0v675" stroke="#27272a" stroke-width="2"/><text x="72" y="332" fill="#f4f4f5" font-family="Arial, sans-serif" font-size="70" font-weight="700">${escapedTitle}</text><text x="76" y="405" fill="${accent}" font-family="Arial, sans-serif" font-size="28">cover pending</text></svg>`);
  return {
    cover: `data:image/svg+xml,${coverSvg}`,
    banner: `data:image/svg+xml,${bannerSvg}`,
    accent,
    sourceTitle: "placeholder"
  };
}

async function main() {
  const source = await readFile(sourcePath, "utf8");
  const [, rawText] = source.match(/String\.raw`([\s\S]*?)`\.trim\(\)/u) ?? [];
  if (!rawText) throw new Error("Unable to read raw watch records.");

  const lines = rawText.split(/\r?\n/u).map((line) => line.trim()).filter(Boolean);
  const visuals = [];
  let bgmMatches = 0;
  let aniListMatches = 0;

  for (const [index, line] of lines.entries()) {
    let visual = await searchBangumi(line);
    if (visual) {
      bgmMatches += 1;
    } else {
      visual = await searchAniList(line);
      if (visual) aniListMatches += 1;
    }
    visuals.push({
      ...fallbackVisual(line, index),
      ...visual,
      accent: visual?.accent || accents[index % accents.length]
    });
    console.log(`${String(index + 1).padStart(3, "0")}/${lines.length}`, visual ? "matched" : "fallback", cleanTitle(line));
    await sleep(360);
  }

  const output = `export type CoverVisual = {
  cover: string;
  banner: string;
  accent: string;
  sourceTitle?: string;
  sourceUrl?: string;
};

export const coverVisuals: CoverVisual[] = ${JSON.stringify(visuals, null, 2)};
`;

  await writeFile(outputPath, output, "utf8");
  console.log(`Wrote ${visuals.length} visuals (${bgmMatches} Bangumi, ${aniListMatches} AniList).`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
