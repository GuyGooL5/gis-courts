import { useEffect, useState } from "react";

const usePagination = <T>(items: T[], itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(items.length / itemsPerPage);
  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = items.slice(start, end);
  const hasPrev = currentPage > 0;
  const hasNext = currentPage < pages - 1;
  useEffect(() => {
    setCurrentPage(0);
  }, [items]);

  const next = () => {
    if (hasNext) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prev = () => {
    if (hasPrev) {
      setCurrentPage(currentPage - 1);
    }
  };

  const jump = (page: number) => {
    const pageNumber = Math.max(0, page);
    setCurrentPage(Math.min(pageNumber, pages - 1));
  };

  return {
    next,
    prev,
    jump,
    currentPage,
    pages,
    paginatedItems,
    hasPrev,
    hasNext,
  };
};

export default usePagination;
