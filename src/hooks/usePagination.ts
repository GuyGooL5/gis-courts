import { useEffect, useState } from "react";

const usePagination = <T>(items: T[], itemsPerPage: number) => {
  const [selectedPage, setSelectedPage] = useState(0);
  const pages = Math.ceil(items.length / itemsPerPage);
  const start = selectedPage * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedItems = items.slice(start, end);
  const hasPrev = selectedPage > 0;
  const hasNext = selectedPage < pages - 1;
  useEffect(() => {
    setSelectedPage(0);
  }, [items]);

  const next = () => {
    if (hasNext) {
      setSelectedPage(selectedPage + 1);
    }
  };

  const prev = () => {
    if (hasPrev) {
      setSelectedPage(selectedPage - 1);
    }
  };

  const jump = (page: number) => {
    const pageNumber = Math.max(0, page);
    setSelectedPage(Math.min(pageNumber, pages - 1));
  };

  return {
    next,
    prev,
    jump,
    selectedPage,
    pages,
    paginatedItems,
    hasPrev,
    hasNext,
  };
};

export default usePagination;
