import { Court } from "$/services/CourtsService";
import { Container, Stack } from "@mui/material";
import CourtCard from "./CourtCard";

interface CourtsListProps {
  courts: Court[];
}

const CourtsList = ({ courts }: CourtsListProps) => (
  <Container maxWidth="lg">
    <Stack direction="column" spacing={2}>
      {courts.map((court) => (
        <CourtCard key={court.id} court={court} onSelect={console.log} />
      ))}
    </Stack>
  </Container>
);
export default CourtsList;
