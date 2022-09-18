import { CssBaseline } from "@mui/material";
import CourtsService, { Court } from "./services/CourtsService";
import GovMapEmbed from "./components/GovMapEmbed";
import CourtOptions from "./components/CourtOptions";
import CourtsList from "./components/CourtsList";
import { useState } from "react";

function App() {
  const [courts, setCourts] = useState<Court[]>([]);
  const filterCourts = (courtType: string) => {
    if (courtType === "הכל") setCourts(CourtsService.getCourts());
    else setCourts(CourtsService.getCourtsByType(courtType));
  };
  return (
    <div className="App">
      <CssBaseline />
      <CourtOptions onSelect={filterCourts} />
      <CourtsList courts={courts} />
      <GovMapEmbed court={CourtsService.getCourts()[1]} />
    </div>
  );
}

export default App;
