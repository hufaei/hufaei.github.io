import type { Language } from "../data/types";
import type { LocalizedText } from "../data/types";

export const defaultLanguage: Language = "zh";

export const languages: Language[] = ["zh", "ja", "en"];

export const translations: Record<Language, Record<string, string>> = {
  zh: {
    anime: "番剧",
    archive: "档案",
    archiveSearchPlaceholder: "搜索标题、别名、标签...",
    backToArchive: "返回档案",
    completed: "已完成",
    dark: "暗色",
    detailArchive: "详情档案",
    details: "详情",
    episodes: "集",
    episodesPending: "集数待补",
    home: "首页",
    inSeries: "所属系列",
    language: "语言",
    light: "亮色",
    openArchive: "进入番剧档案",
    openSeries: "查看系列页",
    paused: "暂停",
    planned: "想看",
    progress: "进度",
    publicRating: "大众评分",
    publicSource: "公开资料",
    rewatching: "重看",
    search: "搜索",
    searchPlaceholder: "搜索番名、别名、系列、年份或标签...",
    series: "系列",
    seriesComposition: "系列构成",
    seriesEntries: "系列条目",
    status: "状态",
    theme: "主题",
    watching: "在看",
    watchList: "观看清单",
    yearPending: "年份待补"
  },
  ja: {
    anime: "アニメ",
    archive: "アーカイブ",
    archiveSearchPlaceholder: "タイトル、別名、タグを検索...",
    backToArchive: "アーカイブへ戻る",
    completed: "完了",
    dark: "ダーク",
    detailArchive: "詳細アーカイブ",
    details: "詳細",
    episodes: "話",
    episodesPending: "話数未確認",
    home: "ホーム",
    inSeries: "所属シリーズ",
    language: "言語",
    light: "ライト",
    openArchive: "アニメアーカイブへ",
    openSeries: "シリーズを見る",
    paused: "一時停止",
    planned: "予定",
    progress: "進捗",
    publicRating: "公開評価",
    publicSource: "公開データ",
    rewatching: "再視聴",
    search: "検索",
    searchPlaceholder: "作品名、別名、シリーズ、年、タグを検索...",
    series: "シリーズ",
    seriesComposition: "シリーズ構成",
    seriesEntries: "シリーズ項目",
    status: "状態",
    theme: "テーマ",
    watching: "視聴中",
    watchList: "視聴リスト",
    yearPending: "年未確認"
  },
  en: {
    anime: "Anime",
    archive: "Archive",
    archiveSearchPlaceholder: "Search titles, aliases, tags...",
    backToArchive: "Back to archive",
    completed: "Completed",
    dark: "Dark",
    detailArchive: "Detail archive",
    details: "Details",
    episodes: "episodes",
    episodesPending: "episodes pending",
    home: "Home",
    inSeries: "In series",
    language: "Language",
    light: "Light",
    openArchive: "Open anime archive",
    openSeries: "View series",
    paused: "Paused",
    planned: "Planned",
    progress: "Progress",
    publicRating: "Public rating",
    publicSource: "Public source",
    rewatching: "Rewatching",
    search: "Search",
    searchPlaceholder: "Search title, alias, series, year, or tag...",
    series: "Series",
    seriesComposition: "Series composition",
    seriesEntries: "Series entries",
    status: "Status",
    theme: "Theme",
    watching: "Watching",
    watchList: "Watch list",
    yearPending: "Year pending"
  }
};

export function t(language: Language, key: string): string {
  return translations[language][key] ?? translations[defaultLanguage][key] ?? key;
}

export function localizedCopy(key: string): LocalizedText {
  return {
    zh: t("zh", key),
    ja: t("ja", key),
    en: t("en", key)
  };
}
