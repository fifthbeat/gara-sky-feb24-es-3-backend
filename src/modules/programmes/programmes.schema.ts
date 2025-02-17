import { resDefault500, tagsApis } from "@/schema/utilsSwagger";
import {
  resProgrammesDetailSchema,
  resProgrammesSchema,
  itemProgramme,
} from "./programmes.swagger";

export const getProgrammesSchema = {
  schema: {
    tags: [tagsApis.PROGRAMME],
    summary: "Get all programmes",
    querystring: {
      type: "object",
      properties: {
        page: { type: "integer", default: 1 },
        limit: { type: "integer", default: 10 },
      },
    },
    response: {
      200: resProgrammesSchema,
      500: resDefault500,
    },
  },
};

export const getProgrammeDetailSchema = {
  schema: {
    tags: [tagsApis.PROGRAMME],
    summary: "Get programme details by ID (USED)",
    params: {
      type: "object",
      properties: {
        idProgrammes: { type: "string" },
      },
      required: ["idProgrammes"],
    },
    response: {
      200: resProgrammesDetailSchema,
      500: resDefault500,
    },
  },
};

export const createProgrammeSchema = {
  schema: {
    tags: [tagsApis.PROGRAMME],
    summary: "Create a new programme",
    body: {
      type: "object",
      properties: {
        fragmentType: { type: "string", enum: ["PROGRAMME"] },
        images: {
          type: "array",
          items: {
            type: "object",
            properties: {
              checksum: { type: "string" },
              locale: { type: "string" },
              name: { type: "string" },
              size: { type: "integer" },
              usage: { type: "string" },
              url: { type: "string", format: "uri" },
              isEditorial: { type: "boolean" },
            },
            required: ["url", "usage"], // Adjust required fields as necessary
          },
        },
        localizableInfo: {
          type: "array",
          items: {
            type: "object",
            properties: {
              locale: { type: "string" },
              alternativeTitle: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    type: { type: "string" },
                    value: { type: "string" },
                  },
                },
              },
              synopsis: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    type: { type: "string" },
                    value: { type: "string" },
                  },
                },
              },
              title: { type: "string" },
              // seasonNumber: { type: "string", nullable: true },
              episodeNumber: { type: "string", nullable: true },
            },
            required: ["locale", "title"], // Adjust required fields as necessary
          },
        },
        tags: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: { type: "string" },
              value: { type: "string" },
            },
            required: ["type", "value"], // Adjust required fields as necessary
          },
        },
        genres: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: { type: "string" },
              value: { type: "string" },
            },
            required: ["type", "value"], // Adjust required fields as necessary
          },
        },
        targetAudience: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: { type: "string" },
              value: { type: "string" },
            },
            required: ["type", "value"], // Adjust required fields as necessary
          },
        },
        alternativeDates: {
          type: "array",
          items: {
            type: "object",
            properties: {
              type: { type: "string" },
              value: { type: "string" },
            },
            required: ["type", "value"], // Adjust required fields as necessary
          },
        },
        durationSeconds: { type: "string" },
        parentType: { type: "string" },
        parentUuid: { type: "string", format: "uuid" },
        lastInSeason: { type: "boolean" },
        lastUpdated: { type: "string" },
      },
      required: [
        "fragmentType",
        "images",
        "localizableInfo",
        "genres",
        "durationSeconds",
        "parentType",
        "parentUuid",
      ], // Adjust required fields as necessary
    },
    response: {
      200: {
        type: "object",
        properties: {
          data: itemProgramme,
          status: { type: "integer", example: 200 },
          message: { type: "string", example: "Success" },
        },
      },
      500: resDefault500,
    },
  },
};
