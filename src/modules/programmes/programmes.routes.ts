import { FastifyInstance } from "fastify";
import {
  getProgrammesController,
  getProgrammesDetailController,
} from "@/modules/programmes/programmes.controller";
import { routePrefix } from "@/configs/routes";
import {
  getProgrammesSchema,
  getProgrammeDetailSchema,
} from "@/modules/programmes/programmes.schema";

export default async function programmesRoutes(fastify: FastifyInstance) {
  fastify.get(
    `${routePrefix.programmes}`,
    // getProgrammesSchema,
    getProgrammesController
  );
  fastify.get(
    `${routePrefix.programmes}/:idProgrammes`,
    // getProgrammeDetailSchema,
    getProgrammesDetailController
  );
}
