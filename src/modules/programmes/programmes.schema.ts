import { baseEntityResponseSchema } from "@/schema/utilsSwagger";

export const getProgrammesSchema = {
  schema: {
    tags: ["Programmes"],
    summary: "Get all programmes",
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

export const getProgrammeDetailSchema = {
  schema: {
    tags: ["Programmes"],
    summary: "Get programme details by ID (USED)",
    params: {
      type: "object",
      properties: {
        idProgrammes: { type: "string" },
      },
      required: ["idProgrammes"],
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
