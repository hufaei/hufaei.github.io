import { mkdir, mkdtemp, stat, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { describe, expect, it } from "vitest";
// @ts-ignore - Node ESM maintenance script helper.
import { prunePrivatePages } from "../scripts/prune-private-pages.mjs";

async function exists(path: string) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

describe("private pages", () => {
  it("removes local-only review pages from production build output", async () => {
    const distRoot = await mkdtemp(join(tmpdir(), "anime-dist-"));
    const privatePage = join(distRoot, "import-review");
    const publicPage = join(distRoot, "anime");
    await mkdir(privatePage, { recursive: true });
    await mkdir(publicPage, { recursive: true });
    await writeFile(join(privatePage, "index.html"), "private", "utf8");
    await writeFile(join(publicPage, "index.html"), "public", "utf8");

    await prunePrivatePages(distRoot);

    expect(await exists(privatePage)).toBe(false);
    expect(await exists(publicPage)).toBe(true);
  });
});
