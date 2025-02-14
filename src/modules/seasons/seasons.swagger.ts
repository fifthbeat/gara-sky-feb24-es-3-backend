import { itemBase, resDefault200 } from "@/schema/utilsSwagger";

export const itemSeason = {
  ...itemBase,
  properties: {
    ...itemBase.properties,
    fragmentType: {
      ...itemBase.properties.fragmentType,
      enum: ["SEASON"],
    },
    seasonNumber: {
      type: "string",
      example: "2024",
    },
    parentUuid: {
      type: "string",
      format: "uuid",
      example: "8980dd13-ee24-42b3-b4b8-0b9fc59ab821",
    },
  },
};

export const resSeasonsSchema = {
  ...resDefault200,
  properties: {
    ...resDefault200.properties,
    data: {
      type: "array",
      items: itemSeason,
    },
  },
};

export const resSeasonsDetailSchema = {
  ...resDefault200,
  properties: {
    ...resDefault200.properties,
    data: itemSeason,
  },
};
