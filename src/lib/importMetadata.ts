import type { ImportMetadataPart } from "../data/importMetadata";

export function needsManualMetadataReview(part: ImportMetadataPart): boolean {
  return !part.source || part.confidence < 35;
}

export function formatRemoteProgress(part: ImportMetadataPart): string {
  if (needsManualMetadataReview(part)) {
    return "需要确认";
  }

  if (typeof part.totalEpisodes === "number" && part.totalEpisodes > 0) {
    return `${part.totalEpisodes} / ${part.totalEpisodes} 集 (remote)`;
  }

  return "远程集数待补";
}
