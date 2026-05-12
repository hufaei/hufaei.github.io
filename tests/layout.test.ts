import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";

const css = readFileSync("src/styles/global.css", "utf-8");

describe("core layout contracts", () => {
  it("keeps series card progress anchored to a fixed card body", () => {
    expect(css).toMatch(/\.series-card\s*{[^}]*display:\s*flex;/s);
    expect(css).toMatch(/\.series-card\s*{[^}]*flex-direction:\s*column;/s);
    expect(css).toMatch(/\.series-card\s+\.card-body\s*{[^}]*flex:\s*1;/s);
  });
});
