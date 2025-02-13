import {
  ResponseSchemaSeries,
  ResponseSchemaSeriesDetail,
} from "@/schema/utilsSwagger";

export const getSeriesSchema = {
  schema: {
    tags: ["Series"],
    summary: "Get all series (USED)",
    response: {
      200: {
        type: "object",
        properties: {
          data: {
            type: "array",
            items: ResponseSchemaSeries,
          },
        },
      },
    },
  },
};

export const getSeriesDetailSchema = {
  schema: {
    tags: ["Series"],
    summary: "Get series details by ID (USED)",
    params: {
      type: "object",
      properties: {
        idSeries: { type: "string" },
      },
      required: ["idSeries"],
    },
    response: {
      200: {
        type: "object",
        properties: {
          data: ResponseSchemaSeriesDetail,
        },
      },
    },
  },
};

// export const getSeasonsBySeriesSchema = {
//   schema: {
//     tags: ["Series"],
//     summary: "Get seasons by series ID (USED)",
//     params: {
//       type: "object",
//       properties: {
//         idSeries: { type: "string" },
//       },
//       required: ["idSeries"],
//     },
//     response: {
//       200: {
//         type: "object",
//         properties: {
//           data: {
//             type: "array",
//             items: baseEntityResponseSchema,
//           },
//         },
//       },
//     },
//   },
// };
