import { resDefault500, tagsApis } from "@/schema/utilsSwagger";
import { resSeriesDetailSchema, resSeriesSchema } from "./series.swagger";
import { resSeasonsSchema } from "@/modules/seasons/seasons.swagger";

export const getSeriesSchema = {
  schema: {
    tags: [tagsApis.SERIES],
    summary: "Get all series (USED)",
    response: {
      200: resSeriesSchema,
      500: resDefault500,
    },
  },
};

export const getSeriesDetailSchema = {
  schema: {
    tags: [tagsApis.SERIES],
    summary: "Get series details by ID (USED)",
    params: {
      type: "object",
      properties: {
        idSeries: { type: "string" },
      },
      required: ["idSeries"],
    },
    response: {
      200: resSeriesDetailSchema,
      500: resDefault500,
    },
  },
};

export const getSeasonsBySeriesSchema = {
  schema: {
    tags: [tagsApis.SERIES],
    summary: "Get seasons by series ID (USED)",
    params: {
      type: "object",
      properties: {
        idSeries: { type: "string" },
      },
      required: ["idSeries"],
    },
    response: {
      200: resSeasonsSchema,
      500: resDefault500,
    },
  },
};
