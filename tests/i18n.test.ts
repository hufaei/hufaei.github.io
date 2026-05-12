import { describe, expect, it } from "vitest";
import { siteCopy } from "../src/data/siteCopy";
import { defaultLanguage, languages, translations } from "../src/i18n/dictionary";
import { localizeTag } from "../src/i18n/localizedTag";

describe("i18n dictionary", () => {
  it("defaults to Chinese", () => {
    expect(defaultLanguage).toBe("zh");
  });

  it("has the same keys for Chinese, Japanese, and English", () => {
    const [baseLanguage] = languages;
    const baseKeys = Object.keys(translations[baseLanguage]).sort();

    for (const language of languages) {
      expect(Object.keys(translations[language]).sort()).toEqual(baseKeys);
    }
  });

  it("uses Mirune as the Chinese and English site name", () => {
    expect(siteCopy.title.zh).toBe("Mirune");
    expect(siteCopy.title.en).toBe("Mirune");
    expect(siteCopy.title.ja).toBe("ミルネ");
    expect(siteCopy.subtitle.zh).toContain("月見冊");
  });

  it("localizes generated archive tags", () => {
    expect(localizeTag("含剧场版").en).toBe("includes movie");
    expect(localizeTag("已看3季").ja).toBe("3シーズン視聴");
    expect(localizeTag("已看6部").en).toBe("6 parts");
  });
});
