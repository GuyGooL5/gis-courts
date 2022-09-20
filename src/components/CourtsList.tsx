import { Container, Grid, Stack } from "@mui/material";
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

  const toolbar = (
    <PaginationToolbar
      pages={pages}
      currentPage={currentPage}
      hasNext={hasNext}
      hasPrev={hasPrev}
      onNext={next}
      onPrev={prev}
      onJump={jump}
    />
  );

  return (
    <Stack
      direction="column"
      gap={2}
      justifyContent="center"
      alignContent="center"
    >
      {toolbar}
      <Grid container direction="row-reverse" spacing={2}>
        {paginatedItems.map((court) => (
          <Grid item key={court.id} xs={12} md={6}>
            <CourtCard key={court.id} court={court} onSelect={console.log} />
          </Grid>
        ))}
      </Grid>
      {toolbar}
    </Stack>
  );
};
export default CourtsList;
