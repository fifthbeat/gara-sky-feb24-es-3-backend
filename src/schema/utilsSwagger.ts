const itemSerie = {
  type: "object",
  required: [
    "fragmentType",
    "uuid",
    "images",
    "title",
    "subtitle",
    "tags",
    "genre",
  ],
  properties: {
    fragmentType: {
      type: "string",
      enum: ["SERIES"],
    },
    uuid: {
      type: "string",
      format: "uuid",
      example: "8980dd13-ee24-42b3-b4b8-0b9fc59ab821",
    },
    images: {
      type: "array",
      items: {
        type: "object",
        required: ["usage", "url"],
        properties: {
          usage: {
            type: "string",
            enum: ["Background", "Scene", "BOXART", "Cover"],
          },
          url: {
            type: "string",
            format: "uri",
            example:
              "http://it.imageservice.sky.com/uuid/8980dd13-ee24-42b3-b4b8-0b9fc59ab821/background",
          },
        },
      },
    },
    title: {
      type: "string",
      example: "Serie A Basket",
    },
    subtitle: {
      type: "array",
      items: {
        type: "object",
        required: ["type", "value"],
        properties: {
          type: {
            type: "string",
            enum: ["aka", "brief", "long", "short"],
          },
          value: {
            type: "string",
            example: "Serie A Basket",
          },
        },
      },
    },
    tags: {
      type: "array",
      items: {
        type: "object",
        required: ["type", "value"],
        properties: {
          type: {
            type: "string",
            enum: ["ee"],
          },
          value: {
            type: "string",
            example: "Sport",
          },
        },
      },
    },
    genre: {
      type: "array",
      items: {
        type: "object",
        required: ["type", "value"],
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
          value: {
            type: "string",
            example: "sport",
          },
        },
      },
    },
  },
};

export const ResponseSchemaSeries = {
  type: "object",
  properties: {
    data: {
      type: "array",
      items: itemSerie,
    },
    status: {
      type: "integer",
      enum: [200],
      description: "HTTP status code",
    },
    message: {
      type: "string",
      example: "Success",
    },
  },
  required: ["data", "status", "message"],
};

export const ResponseSchemaSeriesDetail = {
  type: "object",
  properties: {
    data: itemSerie,
    status: {
      type: "integer",
      enum: [200],
      description: "HTTP status code",
    },
    message: {
      type: "string",
      example: "Success",
    },
  },
  required: ["data", "status", "message"],
};

export const baseEntityResponseSchema = {
  type: "object",
  properties: {
    data: {
      type: "array",
      items: {
        type: "object",
        required: [
          "fragmentType",
          "uuid",
          "images",
          "title",
          "subtitle",
          "tags",
          "genre",
        ],
        properties: {
          fragmentType: {
            type: "string",
            enum: ["SERIES"],
          },
          uuid: {
            type: "string",
            format: "uuid",
            example: "8980dd13-ee24-42b3-b4b8-0b9fc59ab821",
          },
          images: {
            type: "array",
            items: {
              type: "object",
              required: ["usage", "url"],
              properties: {
                usage: {
                  type: "string",
                  enum: ["Background", "Scene", "BOXART", "Cover"],
                },
                url: {
                  type: "string",
                  format: "uri",
                  example:
                    "http://it.imageservice.sky.com/uuid/8980dd13-ee24-42b3-b4b8-0b9fc59ab821/background",
                },
              },
            },
          },
          title: {
            type: "string",
            example: "Serie A Basket",
          },
          subtitle: {
            type: "array",
            items: {
              type: "object",
              required: ["type", "value"],
              properties: {
                type: {
                  type: "string",
                  enum: ["aka", "brief", "long", "short"],
                },
                value: {
                  type: "string",
                  example: "Serie A Basket",
                },
              },
            },
          },
          tags: {
            type: "array",
            items: {
              type: "object",
              required: ["type", "value"],
              properties: {
                type: {
                  type: "string",
                  enum: ["ee"],
                },
                value: {
                  type: "string",
                  example: "Sport",
                },
              },
            },
          },
          genre: {
            type: "array",
            items: {
              type: "object",
              required: ["type", "value"],
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
                value: {
                  type: "string",
                  example: "sport",
                },
              },
            },
          },
        },
      },
    },
    status: {
      type: "integer",
      enum: [200],
      description: "HTTP status code",
    },
    message: {
      type: "string",
      example: "Success",
    },
  },
  required: ["data", "status", "message"],
};
