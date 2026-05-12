import { describe, expect, it } from "vitest";
// @ts-ignore - this is a Node ESM maintenance script helper, not app runtime code.
import {
  createMetadataCacheKey,
  stampMetadataCache,
  shouldReuseMetadataPart
} from "../scripts/import-metadata-cache.mjs";

const baseContext = {
  raw: "Sample title 12",
  inputTitle: "Sample title",
  context: "Sample title",
  hints: ["Sample title"]
};

describe("import metadata cache", () => {
  it("reuses a high-confidence legacy cached match and stamps it with the current cache key", () => {
    const cachedPart = {
      inputTitle: "Sample title",
      matchedTitle: "Sample title",
      source: "bangumi",
      confidence: 92,
      query: "Sample title"
    };

    expect(shouldReuseMetadataPart(cachedPart, baseContext)).toBe(true);
    expect(stampMetadataCache(cachedPart, baseContext).cacheKey).toBe(
      createMetadataCacheKey(baseContext)
    );
  });

  it("refreshes a cached match when the query hint signature changed", () => {
    const cachedPart = {
      inputTitle: "Sample title",
      matchedTitle: "Sample title",
      source: "bangumi",
      confidence: 92,
      query: "Sample title",
      cacheKey: createMetadataCacheKey({ ...baseContext, hints: ["Old hint"] })
    };

    expect(shouldReuseMetadataPart(cachedPart, baseContext)).toBe(false);
  });

  it("refreshes unresolved or low-confidence cached parts", () => {
    expect(
      shouldReuseMetadataPart({ inputTitle: "Sample title", confidence: 0 }, baseContext)
    ).toBe(false);
    expect(
      shouldReuseMetadataPart(
        { inputTitle: "Sample title", source: "bangumi", confidence: 20 },
        baseContext
      )
    ).toBe(false);
  });
});
