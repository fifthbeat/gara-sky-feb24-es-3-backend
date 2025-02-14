import Fastify from "fastify";
import FastifyEnv from "@fastify/env";
import seriesRoutes from "@/modules/series/series.routes";
import { Envs, optionsConfig } from "@/configs/evn.schema";
import SwaggerUI from "@fastify/swagger-ui";
import Swagger from "@fastify/swagger";
import seasonsRoutes from "@/modules/seasons/seasons.routes";
import programmesRoutes from "@/modules/programmes/programmes.routes";
// import { authenticate } from "./middleware/authenticate";

const fastifyApp = Fastify({ logger: true });

fastifyApp.register(Swagger, {
  openapi: {
    info: {
      title: "Fastify API",
      description: "API documentation for Fastify app",
      version: "1.0.0",
    },
  },
});

fastifyApp.register(SwaggerUI, {
  routePrefix: "/", // Swagger UI available at http://localhost:3000/docs
  staticCSP: true,
  transformSpecification: (swaggerObject, req, reply) => {
    return swaggerObject;
  },
});

/*
SERVER
*/
const start = async () => {
  try {
    await fastifyApp.register(FastifyEnv, optionsConfig);

    const envs = fastifyApp.getEnvs<Envs>();

    /*
    ROUTES
    */
    fastifyApp.register(seriesRoutes, { prefix: envs.API_PREFIX });
    fastifyApp.register(seasonsRoutes, { prefix: envs.API_PREFIX });
    fastifyApp.register(programmesRoutes, { prefix: envs.API_PREFIX });

    // Register the authentication middleware globally
    // fastifyApp.addHook("preHandler", authenticate);

    await fastifyApp.listen({ port: envs.PORT });
    console.log(`Server is running at http://localhost:${envs.PORT}`);
  } catch (err) {
    fastifyApp.log.error(err);
    process.exit(1);
  }
};

start();
