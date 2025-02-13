export const baseEntityResponseSchema = {
  type: "object",
  properties: {
    fragmentType: { type: "string", enum: ["SEASON", "PROGRAMME", "SERIES"] },
    uuid: { type: "string" },
    alternativeDate: {
      type: "array",
      items: {
        type: "object",
        properties: {
          type: { type: "string" },
          value: { type: "string" },
        },
      },
    },
    genre: {
      type: "array",
      items: {
        type: "object",
        properties: {
          type: {
            type: "string",
            enum: [
              "epgGenres",
              "epgSubGenres",
              "recommendationGenres",
              "microGenres",
            ],
          },
          value: { type: "string" },
        },
      },
    },
    images: {
      type: "array",
      items: {
        type: "object",
        properties: {
          checksum: { type: "string" },
          locale: { type: "string" },
          name: { type: "string" },
          size: { type: "string" },
          usage: { type: "string" },
          url: { type: "string" },
          isEditorial: { type: "string" },
        },
      },
    },
    lastUpdated: { type: "string" },
    localizableInformation: {
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
                type: { type: "string", enum: ["medium", "long", "short"] },
                value: { type: "string" },
              },
            },
          },
          title: { type: "string" },
        },
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
      },
    },
  },
};
