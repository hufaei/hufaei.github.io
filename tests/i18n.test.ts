import { describe, expect, it } from "vitest";
import { defaultLanguage, languages, translations } from "../src/i18n/dictionary";

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
});

