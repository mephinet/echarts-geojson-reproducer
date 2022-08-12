import * as echarts from "echarts/core";

const myGeoJson = {
  type: "FeatureCollection",
  features: [
    {
      id: "0",
      type: "Feature",
      properties: {
        iso: "10000",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [16.37249934206516, 47.642484642750496],
          [16.313160583806958, 47.56534630130873],
        ],
      },
      bbox: [
        15.996239577890442, 46.83539991973965, 17.160773200001586,
        48.118682159564464,
      ],
    },
  ],
};

echarts.registerMap("test", myGeoJson);
