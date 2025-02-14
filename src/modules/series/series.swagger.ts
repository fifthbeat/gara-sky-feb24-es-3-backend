import { itemBase, resDefault200 } from "@/schema/utilsSwagger";

export const itemSerie = {
  ...itemBase,
  properties: {
    ...itemBase.properties,
    fragmentType: {
      ...itemBase.properties.fragmentType,
      enum: ["SERIES"],
    },
  },
};

export const resSeriesSchema = {
  ...resDefault200,
  properties: {
    ...resDefault200.properties,
    data: {
      type: "array",
      items: itemSerie,
    },
  },
};

export const resSeriesDetailSchema = {
  ...resDefault200,
  properties: {
    ...resDefault200.properties,
    data: itemSerie,
  },
};
