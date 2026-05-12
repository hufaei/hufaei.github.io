import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const css = readFileSync("src/styles/global.css", "utf-8");

describe("core layout contracts", () => {
  it("keeps series card progress anchored to a fixed card body", () => {
    expect(css).toMatch(/\.series-card\s*{[^}]*display:\s*flex;/s);
    expect(css).toMatch(/\.series-card\s*{[^}]*flex-direction:\s*column;/s);
    expect(css).toMatch(/\.series-card\s+\.card-body\s*{[^}]*flex:\s*1;|\.anime-card\s+\.card-body,\s*\.series-card\s+\.card-body\s*{[^}]*flex:\s*1;/s);
  });

  it("keeps cover art inside a stable image box instead of cropping it into strips", () => {
    expect(css).toMatch(/\.cover\s*{[^}]*align-self:\s*stretch;/s);
    expect(css).toMatch(/\.cover\s*{[^}]*height:\s*100%;/s);
    expect(css).toMatch(/\.series-card\s+\.banner\s*{[^}]*aspect-ratio:\s*16\s*\/\s*9;/s);
    expect(css).toMatch(/\.cover\s+img,\s*\.series-card\s+\.banner\s+img\s*{[^}]*object-fit:\s*contain;/s);
  });
});
