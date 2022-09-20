import { Stack, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import CourtOptions from "./components/CourtOptions";
import CourtsList from "./components/CourtsList";
import Navbar from "./Navbar";
import CourtsService, { Court } from "./services/CourtsService";

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  const [courts, setCourts] = useState<Court[]>(CourtsService.getCourts());
  const filterCourts = (courtType: string) => {
    if (courtType === "הכל") setCourts(CourtsService.getCourts());
    else setCourts(CourtsService.getCourtsByType(courtType));
  };

  return (
    <div>
      <Navbar />
      <Container sx={{ my: 2 }}>
        <Stack dir="rtl" gap={2} direction="column" justifyContent="flex-start">
          <Typography variant="h5">מיון לפי סוגי בתי משפט</Typography>
          <CourtOptions onSelect={filterCourts} sx={{ width: 360 }} />
          <CourtsList courts={courts} />
        </Stack>
      </Container>
    </div>
  );
};

export default HomePage;
