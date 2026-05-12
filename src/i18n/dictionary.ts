import type { Language } from "../data/types";

export const defaultLanguage: Language = "zh";

export const languages: Language[] = ["zh", "ja", "en"];

export const translations: Record<Language, Record<string, string>> = {
  zh: {
    anime: "番剧",
    archive: "档案",
    completed: "已完成",
    dark: "暗色",
    home: "首页",
    language: "语言",
    light: "亮色",
    planned: "想看",
    progress: "进度",
    publicRating: "大众评分",
    rewatching: "重看",
    search: "搜索",
    series: "系列",
    status: "状态",
    theme: "主题",
    watching: "在看"
  },
  ja: {
    anime: "アニメ",
    archive: "アーカイブ",
    completed: "完了",
    dark: "ダーク",
    home: "ホーム",
    language: "言語",
    light: "ライト",
    planned: "予定",
    progress: "進捗",
    publicRating: "公開評価",
    rewatching: "再視聴",
    search: "検索",
    series: "シリーズ",
    status: "状態",
    theme: "テーマ",
    watching: "視聴中"
  },
  en: {
    anime: "Anime",
    archive: "Archive",
    completed: "Completed",
    dark: "Dark",
    home: "Home",
    language: "Language",
    light: "Light",
    planned: "Planned",
    progress: "Progress",
    publicRating: "Public rating",
    rewatching: "Rewatching",
    search: "Search",
    series: "Series",
    status: "Status",
    theme: "Theme",
    watching: "Watching"
  }
};

export function t(language: Language, key: string): string {
  return translations[language][key] ?? translations[defaultLanguage][key] ?? key;
}
