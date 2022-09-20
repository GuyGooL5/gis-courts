import { Box, Card, styled, Switch, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import AutocompleteCourt from "./components/AutocompleteCourt";
import GovMapEmbed, { RendererType } from "./components/GovMapEmbed";
import Navbar from "./Navbar";
import CourtsService from "./services/CourtsService";

const GeomapPage = () => {
  const [activeCourt, setActiveCourt] = useState(CourtsService.getCourts()[0]);
  const [layer, setLayer] = useState<RendererType>(RendererType.Simple);
  return (
    <Stack
      direction="column"
      sx={{ position: "absolute", width: "100%", height: "100%" }}
    >
      <Navbar />
      <SearchCard dir="rtl">
        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" color="text.secondary">
            בחירת שכבה
          </Typography>
          <Typography>
            תצלום אוויר
            <Switch
              color="default"
              checked={layer === RendererType.SimplePicture}
              onChange={(e) =>
                setLayer(
                  e.target.checked
                    ? RendererType.SimplePicture
                    : RendererType.Simple
                )
              }
            />
            מפה
          </Typography>
        </Box>
        <AutocompleteCourt onSelectCourt={setActiveCourt} />
      </SearchCard>
      <GovMapEmbed court={activeCourt} layer={layer} depth="9" />
    </Stack>
  );
};

export default GeomapPage;

const SearchCard = styled(Card)`
  position: fixed;
  padding: ${({ theme }) => theme.spacing(1)};
  padding-top: ${({ theme }) => theme.spacing(2)};
  top: ${({ theme }) => theme.spacing(10)};
  left: ${({ theme }) => theme.spacing(8)};
`;
