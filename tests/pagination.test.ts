import { describe, expect, it } from "vitest";
import { buildPageHref, paginateItems } from "../src/lib/pagination";

describe("pagination helpers", () => {
  it("slices a list into stable one-based pages", () => {
    const items = Array.from({ length: 50 }, (_, index) => index + 1);

    expect(paginateItems(items, 1, 24)).toEqual({
      items: items.slice(0, 24),
      currentPage: 1,
      totalItems: 50,
      totalPages: 3,
      pageSize: 24
    });

    expect(paginateItems(items, 3, 24).items).toEqual([49, 50]);
  });

  it("keeps the first page at the section root", () => {
    expect(buildPageHref("/anime/", 1)).toBe("/anime/");
    expect(buildPageHref("/anime/", 2)).toBe("/anime/page/2/");
    expect(buildPageHref("/series/", 5)).toBe("/series/page/5/");
  });
});
