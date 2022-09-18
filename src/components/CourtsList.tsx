import { Container, Stack } from "@mui/material";
import usePagination from "$/hooks/usePagination";
import { Court } from "$/services/CourtsService";

import PaginationToolbar from "./PaginationToolbar";
import CourtCard from "./CourtCard";

interface CourtsListProps {
  courts: Court[];
  itemsPerPage?: number;
}

const CourtsList = ({ courts, itemsPerPage = 10 }: CourtsListProps) => {
  const {
    paginatedItems,
    pages,
    currentPage,
    next,
    prev,
    jump,
    hasNext,
    hasPrev,
  } = usePagination(courts, itemsPerPage);

  return (
    <Container maxWidth="lg">
      <Stack spacing={2}>
        <PaginationToolbar
          pages={pages}
          currentPage={currentPage}
          onNext={next}
          onPrev={prev}
          onJump={jump}
          hasNext={hasNext}
          hasPrev={hasPrev}
        />
        <Stack direction="column" spacing={2}>
          {paginatedItems.map((court) => (
            <CourtCard key={court.id} court={court} onSelect={console.log} />
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
export default CourtsList;
