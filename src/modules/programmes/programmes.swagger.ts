import { itemBase, resDefault200 } from "@/schema/utilsSwagger";

export const itemProgramme = {
  ...itemBase,
  properties: {
    ...itemBase.properties,
    fragmentType: {
      ...itemBase.properties.fragmentType,
      enum: ["PROGRAMME"],
    },
    episodeNumber: {
      type: "string",
      example: "18",
    },
    durationSeconds: {
      type: "string",
      example: "9000",
    },
    parentUuid: {
      type: "string",
      format: "uuid",
      example: "8980dd13-ee24-42b3-b4b8-0b9fc59ab821",
    },
  },
};

export const resProgrammesSchema = {
  ...resDefault200,
  properties: {
    ...resDefault200.properties,
    pagination: {
      type: "object",
      properties: {
        currentPage: { type: "integer" },
        totalPages: { type: "integer" },
        totalElements: { type: "integer" },
      },
    },
    data: {
      type: "array",
      items: itemProgramme,
    },
  },
};

export const resProgrammesDetailSchema = {
  ...resDefault200,
  properties: {
    ...resDefault200.properties,
    data: itemProgramme,
  },
};
