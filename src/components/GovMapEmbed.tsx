import CourtsService, { Court } from "$/services/CourtsService";

export enum RendererType {
  Simple = "0",
  SimplePicture = "1",
  JenksNaturalBreaks = "2",
  EqualInterval = "3",
  Quantile = "4",
  ClassBreaks = "5",
}

interface GovMapEmbedProps {
  court: Court;
  layer?: RendererType;
  depth?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
}

const GovMapEmbed = ({
  court,
  layer = RendererType.Simple,
  depth = "5",
}: GovMapEmbedProps) => {
  const { coords, data } = court;
  const coordsString = `${coords.x},${coords.y}`;
  const queryParams = {
    c: coordsString,
    b: layer, // layer ty
    z: depth, // dep
    lay: "BATEI_MISHPAT",
    bs: `BATEI_MISHPAT|${coordsString}`,
  };
  const paramsString = Object.entries(queryParams)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  const url = `https://www.govmap.gov.il/map.html?${paramsString}`;
  console.log({ court, url });
  return <iframe src={url} width="100%" height="100%"></iframe>;
};

export default GovMapEmbed;
