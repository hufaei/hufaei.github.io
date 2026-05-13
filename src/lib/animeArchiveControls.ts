export type AnimeSortKey = "default" | "score-desc" | "rank-asc" | "year-desc" | "title-asc";

type SortableDataset = {
  entryIndex?: string;
  rank?: string;
  score?: string;
  titleSort?: string;
  year?: string;
};

export type SortableAnimeCard = {
  dataset: SortableDataset;
};

const pageLabels = {
  zh: { previous: "上一页", next: "下一页", summary: (total: number, page: number, pages: number) => `${total} 部作品 · 第 ${page} / ${pages} 页` },
  ja: { previous: "前へ", next: "次へ", summary: (total: number, page: number, pages: number) => `${total}作品 · ${page} / ${pages}ページ` },
  en: { previous: "Previous", next: "Next", summary: (total: number, page: number, pages: number) => `${total} works · page ${page} of ${pages}` }
};

function parseOptionalNumber(value?: string): number | undefined {
  if (!value) return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
}

function compareOptionalNumber(a?: number, b?: number, direction: "asc" | "desc" = "asc"): number {
  if (a === undefined && b === undefined) return 0;
  if (a === undefined) return 1;
  if (b === undefined) return -1;
  return direction === "asc" ? a - b : b - a;
}

function originalOrder(a: SortableAnimeCard, b: SortableAnimeCard): number {
  return (parseOptionalNumber(a.dataset.entryIndex) ?? 0) - (parseOptionalNumber(b.dataset.entryIndex) ?? 0);
}

export function sortAnimeCards<T extends SortableAnimeCard>(cards: readonly T[], sortKey: AnimeSortKey): T[] {
  return [...cards].sort((a, b) => {
    if (sortKey === "score-desc") {
      return compareOptionalNumber(parseOptionalNumber(a.dataset.score), parseOptionalNumber(b.dataset.score), "desc")
        || compareOptionalNumber(parseOptionalNumber(a.dataset.rank), parseOptionalNumber(b.dataset.rank), "asc")
        || originalOrder(a, b);
    }

    if (sortKey === "rank-asc") {
      return compareOptionalNumber(parseOptionalNumber(a.dataset.rank), parseOptionalNumber(b.dataset.rank), "asc")
        || originalOrder(a, b);
    }

    if (sortKey === "year-desc") {
      return compareOptionalNumber(parseOptionalNumber(a.dataset.year), parseOptionalNumber(b.dataset.year), "desc") || originalOrder(a, b);
    }

    if (sortKey === "title-asc") {
      return (a.dataset.titleSort ?? "").localeCompare(b.dataset.titleSort ?? "", "zh-Hans-CN") || originalOrder(a, b);
    }

    return originalOrder(a, b);
  });
}

function currentLanguage(): keyof typeof pageLabels {
  const language = document.documentElement.dataset.language;
  return language === "ja" || language === "en" ? language : "zh";
}

function createPageButton(label: string, page: number, isCurrent: boolean, isDisabled = false): HTMLButtonElement {
  const button = document.createElement("button");
  button.type = "button";
  button.className = isCurrent ? "page-number is-current" : "page-number";
  button.textContent = label;
  button.dataset.page = String(page);
  button.disabled = isDisabled;
  if (isCurrent) button.setAttribute("aria-current", "page");
  return button;
}

export function mountAnimeArchiveControls(root: ParentNode = document): void {
  const grid = root.querySelector<HTMLElement>("[data-archive-grid]");
  const input = root.querySelector<HTMLInputElement>("[data-filter-input]");
  const pagination = root.querySelector<HTMLElement>("[data-client-pagination]");
  const staticPagination = root.querySelector<HTMLElement>("[data-static-pagination]");
  const summary = root.querySelector<HTMLElement>("[data-list-summary]");
  const sortButtons = [...root.querySelectorAll<HTMLButtonElement>("[data-sort-key]")];
  const cards = [...root.querySelectorAll<HTMLElement>("[data-search-card]")];

  if (!grid || !cards.length) return;

  const archiveGrid = grid;
  const pageSize = Number(archiveGrid.dataset.pageSize) || 24;
  let activeSort = "default" as AnimeSortKey;
  let currentPage = 1;

  function cardMatchesQuery(card: HTMLElement): boolean {
    const query = input?.value.trim().toLowerCase() ?? "";
    if (!query) return true;
    return (card.getAttribute("data-title")?.toLowerCase() ?? "").includes(query);
  }

  function updateSortButtons() {
    for (const button of sortButtons) {
      button.setAttribute("aria-pressed", String(button.dataset.sortKey === activeSort));
    }
  }

  function updateSummary(total: number, page: number, totalPages: number) {
    if (!summary) return;
    summary.textContent = pageLabels[currentLanguage()].summary(total, page, totalPages);
  }

  function renderPagination(totalPages: number) {
    if (!pagination) return;

    pagination.replaceChildren();
    pagination.hidden = false;

    const labels = pageLabels[currentLanguage()];
    const previous = createPageButton(labels.previous, Math.max(1, currentPage - 1), false, currentPage <= 1);
    previous.classList.add("page-step");
    pagination.append(previous);

    const numbers = document.createElement("div");
    numbers.className = "page-numbers";
    for (let page = 1; page <= totalPages; page += 1) {
      numbers.append(createPageButton(String(page), page, page === currentPage));
    }
    pagination.append(numbers);

    const next = createPageButton(labels.next, Math.min(totalPages, currentPage + 1), false, currentPage >= totalPages);
    next.classList.add("page-step");
    pagination.append(next);
  }

  function render() {
    const visibleCards = sortAnimeCards(cards, activeSort).filter(cardMatchesQuery);
    const totalPages = Math.max(1, Math.ceil(visibleCards.length / pageSize));
    currentPage = Math.min(currentPage, totalPages);

    const pageStart = (currentPage - 1) * pageSize;
    const pageCards = visibleCards.slice(pageStart, pageStart + pageSize);
    const pageSet = new Set(pageCards);

    for (const card of cards) {
      card.hidden = !pageSet.has(card);
    }

    for (const card of pageCards) {
      const image = card.querySelector<HTMLImageElement>("img[loading='lazy']");
      if (image) image.loading = "eager";
      archiveGrid.append(card);
    }

    updateSortButtons();
    updateSummary(visibleCards.length, currentPage, totalPages);
    renderPagination(totalPages);
  }

  input?.addEventListener("input", () => {
    currentPage = 1;
    render();
  });

  for (const button of sortButtons) {
    button.addEventListener("click", () => {
      activeSort = (button.dataset.sortKey ?? "default") as AnimeSortKey;
      currentPage = 1;
      render();
    });
  }

  pagination?.addEventListener("click", (event) => {
    const button = (event.target as Element).closest<HTMLButtonElement>("[data-page]");
    if (!button || button.disabled) return;
    currentPage = Number(button.dataset.page) || 1;
    render();
  });

  document.addEventListener("mirune:languagechange", render);
  if (staticPagination) staticPagination.hidden = true;
  render();
}
