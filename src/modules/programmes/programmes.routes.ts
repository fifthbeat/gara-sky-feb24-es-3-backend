import { FastifyInstance } from "fastify";
import {
  getProgrammesController,
  getProgrammesDetailController,
  createProgrammeController,
} from "@/modules/programmes/programmes.controller";
import { routePrefix } from "@/configs/routes";
import {
  getProgrammesSchema,
  getProgrammeDetailSchema,
  createProgrammeSchema,
} from "@/modules/programmes/programmes.schema";
import { authenticate } from "@/middleware/authenticate";

export default async function programmesRoutes(fastify: FastifyInstance) {
  fastify.get(
    `${routePrefix.programmes}`,
    getProgrammesSchema,
    getProgrammesController
  );
  fastify.get(
    `${routePrefix.programmes}/:idProgrammes`,
    getProgrammeDetailSchema,
    getProgrammesDetailController
  );
  fastify.post(`${routePrefix.programmes}`, {
    ...createProgrammeSchema,
    preHandler: [authenticate],
    handler: createProgrammeController,
  });
}
