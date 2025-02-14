import { FastifyInstance } from "fastify";
import {
  getSeriesController,
  getSeriesDetailController,
  getSeasonsBySeriesController,
} from "@/modules/series/series.controller";
import { routePrefix } from "@/configs/routes";
import {
  getSeriesSchema,
  getSeriesDetailSchema,
  getSeasonsBySeriesSchema,
} from "@/modules/series/series.schema";

export default async function seriesRoutes(fastify: FastifyInstance) {
  fastify.get(routePrefix.series, getSeriesSchema, getSeriesController);
  fastify.get(
    `${routePrefix.series}/:idSeries`,
    getSeriesDetailSchema,
    getSeriesDetailController
  );
  fastify.get(
    `${routePrefix.series}/:idSeries${routePrefix.seasons}`,
    getSeasonsBySeriesSchema,
    getSeasonsBySeriesController
  );
}
