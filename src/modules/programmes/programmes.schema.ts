import { resDefault500, tagsApis } from "@/schema/utilsSwagger";
import {
  resProgrammesDetailSchema,
  resProgrammesSchema,
} from "./programmes.swagger";

export const getProgrammesSchema = {
  schema: {
    tags: [tagsApis.PROGRAMME],
    summary: "Get all programmes",
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
