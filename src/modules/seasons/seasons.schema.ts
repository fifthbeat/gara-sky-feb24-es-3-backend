import { resDefault500, tagsApis } from "@/schema/utilsSwagger";
import { resSeasonsDetailSchema, resSeasonsSchema } from "./seasons.swagger";
import { resProgrammesSchema } from "@/modules/programmes/programmes.swagger";

export const getSeasonsSchema = {
  schema: {
    tags: [tagsApis.SEASON],
    summary: "Get all seasons",
    response: {
      200: resSeasonsSchema,
      500: resDefault500,
    },
  },
};

export const getSeasonDetailSchema = {
  schema: {
    tags: [tagsApis.SEASON],
    summary: "Get season details by ID (USED)",
    params: {
      type: "object",
      properties: {
        idSeason: { type: "string" },
      },
      required: ["idSeason"],
    },
    response: {
      200: resSeasonsDetailSchema,
      500: resDefault500,
    },
  },
};

export const getProgrammesBySeasonSchema = {
  schema: {
    tags: [tagsApis.SEASON],
    summary: "Get programmes by season ID (USED)",
    params: {
      type: "object",
      properties: {
        idSeason: { type: "string" },
      },
      required: ["idSeason"],
    },
    response: {
      200: resProgrammesSchema,
      500: {
        type: "object",
        properties: {
          statusCode: {
            type: "integer",
            example: 500,
          },
          error: {
            type: "string",
            example: "Internal Server Error",
          },
          message: {
            type: "string",
            example: "An unexpected error occurred.",
          },
        },
      },
    },
  },
};
