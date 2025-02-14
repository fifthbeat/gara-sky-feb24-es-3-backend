export const tagsApis = {
  SERIES: "Series",
  SEASON: "Seasons",
  PROGRAMME: "Programmes",
};

export const itemBase = {
  type: "object",
  properties: {
    fragmentType: {
      type: "string",
      enum: ["SERIES", "SEASON", "PROGRAMME"],
    },
    uuid: {
      type: "string",
      format: "uuid",
    },
    images: {
      type: "array",
      items: {
        type: "object",
        properties: {
          usage: { type: "string" },
          url: { type: "string", format: "uri" },
        },
      },
    },
    localizableInfo: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: { type: "string" },
          alternativeTitles: {
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
    genre: {
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

export const resDefault200 = {
  type: "object",
  properties: {
    data: {},
    status: {
      type: "integer",
      example: 200,
    },
    message: {
      type: "string",
      example: "Success",
    },
  },
};

export const resDefault500 = {
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
};
