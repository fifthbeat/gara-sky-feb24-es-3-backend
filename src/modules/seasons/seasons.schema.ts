import { baseEntityResponseSchema } from "@/schema/utilsSwagger";

export const getSeasonsSchema = {
  schema: {
    tags: ["Seasons"],
    summary: "Get all seasons",
    response: {
      200: {
        type: "object",
        properties: {
          data: {
            type: "array",
            items: baseEntityResponseSchema,
          },
        },
      },
    },
  },
};

export const getSeasonDetailSchema = {
  schema: {
    tags: ["Seasons"],
    summary: "Get season details by ID (USED)",
    params: {
      type: "object",
      properties: {
        idSeason: { type: "string" },
      },
      required: ["idSeason"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          data: baseEntityResponseSchema,
        },
      },
    },
  },
};

export const getProgrammesBySeasonSchema = {
  schema: {
    tags: ["Seasons"],
    summary: "Get programmes by season ID (USED)",
    params: {
      type: "object",
      properties: {
        idSeason: { type: "string" },
      },
      required: ["idSeason"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          data: {
            type: "array",
            items: baseEntityResponseSchema,
          },
        },
      },
    },
  },
};
