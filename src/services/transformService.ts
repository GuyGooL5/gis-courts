import proj4 from "proj4";
proj4.defs(
  "EPSG:4141",
  "+title=Israel TM MAPI:4141 (7 param datum shift) +proj=tmerc +lat_0=31.73439361111111 +lon_0=35.20451694444445 +k=1.0000067 +x_0=219529.584 +y_0=626907.39 +ellps=GRS80 +towgs84=23.8085,17.5937,17.8010,-0.3306,-1.85706,1.64828,-5.4374"
);

type TransformResult = {
  x: number;
  y: number;
  z?: number;
};

export const transformWGS1984ToITM = (coords: {
  x: number;
  y: number;
}): TransformResult => {
  const from = proj4.Proj("EPSG:4141");
  const to = proj4.Proj("EPSG:4326");
  const converted = proj4.transform(from, to, [coords.x, coords.y]);
  return converted;
};

export const transformITMToWGS1984 = (coords: {
  x: number;
  y: number;
}): TransformResult => {
  const from = proj4.Proj("EPSG:4326");
  const to = proj4.Proj("EPSG:4141");
  return proj4.transform(from, to, [coords.x, coords.y]);
};
