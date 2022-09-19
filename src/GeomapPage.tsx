import { Card, styled, TextField } from "@mui/material";
import { Container, Stack } from "@mui/system";
import GovMapEmbed from "./components/GovMapEmbed";
import Navbar from "./Navbar";
import CourtsService from "./services/CourtsService";

const GeomapPage = () => (
  <Stack
    direction="column"
    sx={{ position: "absolute", width: "100%", height: "100%" }}
  >
    <Navbar />
    <SearchCard>
      <TextField label="Search" />
      <TextField label="Search" />
      <TextField label="Search" />
      <TextField label="Search" />
      <TextField label="Search" />
    </SearchCard>
    <GovMapEmbed court={CourtsService.getCourts()[1]} />
  </Stack>
);

export default GeomapPage;

const SearchCard = styled(Card)`
  position: fixed;
  padding: ${({ theme }) => theme.spacing(1)};
  top: ${({ theme }) => theme.spacing(10)};
  left: ${({ theme }) => theme.spacing(8)};
`;
