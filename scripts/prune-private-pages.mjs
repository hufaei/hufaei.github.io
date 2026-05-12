import { rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

export const privatePagePaths = ["import-review"];

const scriptPath = fileURLToPath(import.meta.url);
const repoRoot = dirname(dirname(scriptPath));

export async function prunePrivatePages(distRoot = join(repoRoot, "dist")) {
  await Promise.all(
    privatePagePaths.map((pagePath) =>
      rm(join(distRoot, pagePath), { recursive: true, force: true })
    )
  );
}

if (process.argv[1] === scriptPath) {
  await prunePrivatePages();
  console.log(`Pruned private pages: ${privatePagePaths.join(", ")}`);
}
