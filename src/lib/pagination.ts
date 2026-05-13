export type PageSlice<T> = {
  items: T[];
  currentPage: number;
  totalItems: number;
  totalPages: number;
  pageSize: number;
};

export function paginateItems<T>(items: T[], currentPage: number, pageSize: number): PageSlice<T> {
  if (!Number.isInteger(currentPage) || currentPage < 1) {
    throw new Error("currentPage must be a positive integer");
  }

  if (!Number.isInteger(pageSize) || pageSize < 1) {
    throw new Error("pageSize must be a positive integer");
  }

  const totalItems = items.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  if (currentPage > totalPages) {
    throw new Error(`currentPage ${currentPage} exceeds totalPages ${totalPages}`);
  }

  const start = (currentPage - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    currentPage,
    totalItems,
    totalPages,
    pageSize
  };
}

export function buildPageHref(sectionPath: string, page: number): string {
  if (!Number.isInteger(page) || page < 1) {
    throw new Error("page must be a positive integer");
  }

  const normalized = sectionPath.endsWith("/") ? sectionPath : `${sectionPath}/`;
  return page === 1 ? normalized : `${normalized}page/${page}/`;
}
