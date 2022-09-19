import { useState } from "react";
import CourtOptions from "./components/CourtOptions";
import CourtsList from "./components/CourtsList";
import GovMapEmbed from "./components/GovMapEmbed";
import Navbar from "./Navbar";
import CourtsService, { Court } from "./services/CourtsService";

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  const [courts, setCourts] = useState<Court[]>([]);
  const filterCourts = (courtType: string) => {
    if (courtType === "הכל") setCourts(CourtsService.getCourts());
    else setCourts(CourtsService.getCourtsByType(courtType));
  };

  return (
    <div>
      <Navbar />
      <CourtOptions onSelect={filterCourts} />
      <CourtsList courts={courts} />
    </div>
  );
};

export default HomePage;
