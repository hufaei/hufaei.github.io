import { describe, expect, it } from "vitest";
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

  it("localizes generated archive tags", () => {
    expect(localizeTag("含剧场版").en).toBe("includes movie");
    expect(localizeTag("已看3季").ja).toBe("3シーズン視聴");
    expect(localizeTag("已看6部").en).toBe("6 parts");
  });
});
