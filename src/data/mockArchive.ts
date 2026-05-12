import type { AnimeEntry, SeriesEntry, WatchEvent } from "./types";

export const animeEntries: AnimeEntry[] = [
  {
    slug: "frieren-season-1",
    seriesSlug: "frieren",
    title: {
      zh: "葬送的芙莉莲",
      ja: "葬送のフリーレン",
      en: "Frieren: Beyond Journey's End"
    },
    aliases: ["Sousou no Frieren", "Frieren"],
    status: "watching",
    watchedEpisodes: 18,
    totalEpisodes: 28,
    year: 2023,
    platform: "TV",
    cover: "https://lain.bgm.tv/r/800/pic/cover/l/13/c5/400602_ZI8Y9.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154587-ivXNJ23SM1xB.jpg",
    accent: "#bbf1a1",
    description: {
      zh: "勇者一行击败魔王后的漫长旅途记录。这里展示的是外部简介和个人观看进度，不写个人短评。",
      ja: "魔王討伐後の旅を記録するエントリー。感想ではなく、視聴状態と進捗を扱う。",
      en: "A post-adventure journey entry. The archive tracks viewing status and progress, not personal reviews."
    },
    tags: ["奇幻", "公路片", "治愈"],
    ratings: {
      bangumi: { score: 8.5, rank: 40, total: 34764 },
      anilist: { averageScore: 89, meanScore: 88, popularity: 423000 }
    }
  },
  {
    slug: "frieren-season-2",
    seriesSlug: "frieren",
    title: {
      zh: "葬送的芙莉莲 第二季",
      ja: "葬送のフリーレン 第2期",
      en: "Frieren: Beyond Journey's End Season 2"
    },
    aliases: ["Sousou no Frieren 2nd Season"],
    status: "planned",
    watchedEpisodes: 0,
    totalEpisodes: 10,
    year: 2026,
    platform: "TV",
    cover: "https://lain.bgm.tv/r/800/pic/cover/l/0b/24/515759_qA1Zc.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154587-ivXNJ23SM1xB.jpg",
    accent: "#9fd7ff",
    description: {
      zh: "系列后续条目的占位示例，用于展示系列聚合进度和多季结构。",
      ja: "シリーズ内の続編カードのデモ。",
      en: "A sequel placeholder used to demonstrate series rollups."
    },
    tags: ["奇幻", "续作"],
    ratings: {
      bangumi: { score: 7.5, rank: 917, total: 10322 },
      anilist: { averageScore: 82, meanScore: 80, popularity: 98000 }
    }
  },
  {
    slug: "bocchi-the-rock",
    seriesSlug: "bocchi",
    title: {
      zh: "孤独摇滚！",
      ja: "ぼっち・ざ・ろっく！",
      en: "Bocchi the Rock!"
    },
    aliases: ["BOCCHI THE ROCK!", "bocchi"],
    status: "completed",
    watchedEpisodes: 12,
    totalEpisodes: 12,
    year: 2022,
    platform: "TV",
    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130003-HTDmeL4RGeJ4.png",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/130003-5F90a7BtsPQN.jpg",
    accent: "#e4bb50",
    description: {
      zh: "乐队、社交焦虑和舞台感的观看档案示例。",
      ja: "バンドと日常の視聴アーカイブ例。",
      en: "A band and daily-life archive demo entry."
    },
    tags: ["乐队", "日常", "喜剧"],
    ratings: {
      bangumi: { score: 8.2, rank: 126, total: 21000 },
      anilist: { averageScore: 86, meanScore: 85, popularity: 300000 }
    }
  },
  {
    slug: "steins-gate",
    seriesSlug: "steins-gate-series",
    title: {
      zh: "命运石之门",
      ja: "シュタインズ・ゲート",
      en: "Steins;Gate"
    },
    aliases: ["Steins Gate", "シュタゲ"],
    status: "completed",
    watchedEpisodes: 24,
    totalEpisodes: 24,
    year: 2011,
    platform: "TV",
    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9253-tIUXF2gfU8Sg.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n9253-JIhmKgBKsWUN.jpg",
    accent: "#ffd6ae",
    description: {
      zh: "旧番档案示例，展示已完成状态和详情页结构。",
      ja: "完走済み作品の詳細ページ例。",
      en: "A completed classic entry used for detail page structure."
    },
    tags: ["科幻", "时间循环", "旧番"],
    ratings: {
      bangumi: { score: 8.6, rank: 32, total: 27000 },
      anilist: { averageScore: 88, meanScore: 87, popularity: 520000 }
    }
  }
];

export const seriesEntries: SeriesEntry[] = [
  {
    slug: "frieren",
    title: {
      zh: "葬送的芙莉莲 系列",
      ja: "葬送のフリーレン シリーズ",
      en: "Frieren Series"
    },
    entrySlugs: ["frieren-season-1", "frieren-season-2"],
    cover: "https://lain.bgm.tv/r/800/pic/cover/l/13/c5/400602_ZI8Y9.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/154587-ivXNJ23SM1xB.jpg",
    accent: "#bbf1a1",
    tags: ["奇幻", "公路片", "治愈"]
  },
  {
    slug: "bocchi",
    title: {
      zh: "孤独摇滚！系列",
      ja: "ぼっち・ざ・ろっく！シリーズ",
      en: "Bocchi the Rock! Series"
    },
    entrySlugs: ["bocchi-the-rock"],
    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130003-HTDmeL4RGeJ4.png",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/130003-5F90a7BtsPQN.jpg",
    accent: "#e4bb50",
    tags: ["乐队", "日常"]
  },
  {
    slug: "steins-gate-series",
    title: {
      zh: "命运石之门 系列",
      ja: "シュタインズ・ゲート シリーズ",
      en: "Steins;Gate Series"
    },
    entrySlugs: ["steins-gate"],
    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx9253-tIUXF2gfU8Sg.jpg",
    banner: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n9253-JIhmKgBKsWUN.jpg",
    accent: "#ffd6ae",
    tags: ["科幻", "时间循环"]
  }
];

export const watchEvents: WatchEvent[] = [
  { id: "frieren-started", entrySlug: "frieren-season-1", type: "started", date: "2026-04-22" },
  { id: "frieren-progress", entrySlug: "frieren-season-1", type: "progress", date: "2026-05-12", watchedEpisodes: 18 },
  { id: "bocchi-completed", entrySlug: "bocchi-the-rock", type: "completed", date: "2026-03-28", watchedEpisodes: 12 },
  { id: "steins-completed", entrySlug: "steins-gate", type: "completed", date: "2026-02-17", watchedEpisodes: 24 }
];

export function getAnimeBySlug(slug: string): AnimeEntry | undefined {
  return animeEntries.find((entry) => entry.slug === slug);
}

export function getSeriesBySlug(slug: string): SeriesEntry | undefined {
  return seriesEntries.find((series) => series.slug === slug);
}

export function getSeriesEntries(series: SeriesEntry): AnimeEntry[] {
  return series.entrySlugs
    .map((slug) => getAnimeBySlug(slug))
    .filter((entry): entry is AnimeEntry => Boolean(entry));
}

export function getEventsForEntry(slug: string): WatchEvent[] {
  return watchEvents.filter((event) => event.entrySlug === slug);
}

