import { createHash } from "node:crypto";

export const metadataCacheVersion = 1;

export function createHintSignature(hints = []) {
  return JSON.stringify([...new Set(hints.map((hint) => String(hint).trim()).filter(Boolean))]);
}

export function createMetadataCacheKey({ raw, inputTitle, context, hints }) {
  const signature = JSON.stringify({
    version: metadataCacheVersion,
    raw,
    inputTitle,
    context: context ?? "",
    hints: createHintSignature(hints)
  });
  const digest = createHash("sha256").update(signature).digest("hex").slice(0, 20);

  return `import-metadata-v${metadataCacheVersion}:${digest}`;
}

export function shouldReuseMetadataPart(cachedPart, context) {
  if (context.forceRefresh || !cachedPart) return false;
  if (cachedPart.inputTitle !== context.inputTitle) return false;
  if (!cachedPart.source || typeof cachedPart.confidence !== "number") return false;
  if (cachedPart.confidence < (context.confidenceThreshold ?? 35)) return false;

  const expectedCacheKey = createMetadataCacheKey(context);
  if (cachedPart.cacheKey) return cachedPart.cacheKey === expectedCacheKey;
  if (cachedPart.hintSignature) return cachedPart.hintSignature === createHintSignature(context.hints);

  return true;
}

export function stampMetadataCache(part, context) {
  return {
    ...part,
    cacheKey: createMetadataCacheKey(context),
    hintSignature: createHintSignature(context.hints)
  };
}

export function parseImportMetadataRecords(source) {
  const [, recordsJson] = source.match(/export const importMetadataRecords: ImportMetadataRecord\[\] = ([\s\S]*?);\s*$/u) ?? [];
  if (!recordsJson) return [];

  try {
    const records = JSON.parse(recordsJson);
    return Array.isArray(records) ? records : [];
  } catch {
    return [];
  }
}

export function findCachedMetadataPart(record, context) {
  const indexedPart = record?.parts?.[context.partIndex];
  if (indexedPart?.inputTitle === context.inputTitle) return indexedPart;

  return record?.parts?.find((part) => part.inputTitle === context.inputTitle);
}
