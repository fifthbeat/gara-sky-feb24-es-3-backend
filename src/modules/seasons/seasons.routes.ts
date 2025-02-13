import { FastifyInstance } from "fastify";
import {
  getSeasonsController,
  getSeasonsDetailController,
  getProgrammesBySeasonsController,
} from "@/modules/seasons/seasons.controller";
import { routePrefix } from "@/configs/routes";
import {
  getSeasonsSchema,
  getSeasonDetailSchema,
  getProgrammesBySeasonSchema,
} from "@/modules/seasons/seasons.schema";

export default async function seasonsRoutes(fastify: FastifyInstance) {
  fastify.get(
    `${routePrefix.seasons}`,
    // getSeasonsSchema,
    getSeasonsController
  );
  fastify.get(
    `${routePrefix.seasons}/:idSeason`,
    // getSeasonDetailSchema,
    getSeasonsDetailController
  );
  fastify.get(
    `${routePrefix.seasons}/:idSeason${routePrefix.programmes}`,
    // getProgrammesBySeasonSchema,
    getProgrammesBySeasonsController
  );
}
