const schema = {
  type: "object",
  required: ["PORT"],
  properties: {
    PORT: {
      type: "string",
      default: 4000,
    },
    DATABASE_URL: {
      type: "string",
    },
    NODE_ENV: {
      type: "string",
      default: "development",
    },
    API_PREFIX: {
      type: "string",
      default: "/api/v1",
    },
  },
};

export type Envs = {
  PORT: number;
  DATABASE_URL: string;
  NODE_ENV: "development" | "test" | "production";
  API_PREFIX: string;
};

export const optionsConfig = {
  confKey: "config", // optional, default: 'config'
  schema: schema,
  dotenv: true,
};
