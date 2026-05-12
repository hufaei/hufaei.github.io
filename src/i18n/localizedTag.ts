import type { LocalizedText } from "../data/types";

function same(value: string): LocalizedText {
  return { zh: value, ja: value, en: value };
}

const fixedTags: Record<string, LocalizedText> = {
  观看记录: { zh: "观看记录", ja: "視聴記録", en: "watch log" },
  已看完: { zh: "已看完", ja: "完走済み", en: "completed" },
  系列: { zh: "系列", ja: "シリーズ", en: "series" },
  含剧场版: { zh: "含剧场版", ja: "劇場版あり", en: "includes movie" },
  待补集数: { zh: "待补集数", ja: "話数未確認", en: "episodes pending" },
  "含OVA-SP": { zh: "含 OVA/SP", ja: "OVA/SPあり", en: "includes OVA/SP" }
};

export function localizeTag(tag: string): LocalizedText {
  const seasonMatch = tag.match(/^已看(\d+)季$/);
  if (seasonMatch) {
    return {
      zh: tag,
      ja: `${seasonMatch[1]}シーズン視聴`,
      en: `${seasonMatch[1]} seasons`
    };
  }

  const partMatch = tag.match(/^已看(\d+)部$/);
  if (partMatch) {
    return {
      zh: tag,
      ja: `${partMatch[1]}作品視聴`,
      en: `${partMatch[1]} parts`
    };
  }

  return fixedTags[tag] ?? same(tag);
}

export function formatLocalizedTags(tags: string[]): LocalizedText {
  const localizedTags = tags.map(localizeTag);
  return {
    zh: localizedTags.map((tag) => tag.zh).join(" / "),
    ja: localizedTags.map((tag) => tag.ja).join(" / "),
    en: localizedTags.map((tag) => tag.en).join(" / ")
  };
}

export function localizePlatform(platform: string): LocalizedText {
  const platforms: Record<string, LocalizedText> = {
    TV: same("TV"),
    OVA: same("OVA"),
    WEB: same("WEB"),
    剧场版: { zh: "剧场版", ja: "劇場版", en: "movie" },
    动态漫画: { zh: "动态漫画", ja: "モーションコミック", en: "motion comic" },
    其他: { zh: "其他", ja: "その他", en: "other" }
  };

  return platforms[platform] ?? same(platform);
}
