import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const css = readFileSync("src/styles/global.css", "utf-8");

describe("core layout contracts", () => {
  it("keeps series cards on the same wider cover layout as anime cards", () => {
    expect(css).toMatch(/\.series-card\s*{[^}]*display:\s*grid;/s);
    expect(css).toMatch(/\.series-card\s*{[^}]*grid-template-columns:\s*clamp\(176px,\s*48%,\s*228px\)\s+minmax\(0,\s*1fr\);/s);
    expect(css).toMatch(/\.series-card\s+\.series-cover\s*{[^}]*aspect-ratio:\s*2\s*\/\s*3;/s);
  });

  it("keeps cover art proportional inside stable image boxes", () => {
    expect(css).toMatch(/\.anime-card\s*{[^}]*grid-template-columns:\s*clamp\(176px,\s*48%,\s*228px\)\s+minmax\(0,\s*1fr\);/s);
    expect(css).toMatch(/\.cover\s*{[^}]*aspect-ratio:\s*2\s*\/\s*3;/s);
    expect(css).toMatch(/\.cover\s+img,\s*\.series-card\s+\.series-cover\s+img\s*{[^}]*object-fit:\s*contain;/s);
  });
});
