import { FastifyRequest, FastifyReply } from "fastify";
import {
  getSeriesServices,
  getDetailedSeries,
} from "@/modules/series/series.service";
import { GetSeries } from "./types";
import { getSeasonsBySeriesServies } from "@/modules/seasons/seasons.service";

export async function getSeriesController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const data = await getSeriesServices();
  return { data };
}

export async function getSeriesDetailController(
  req: FastifyRequest<{
    Params: GetSeries;
  }>,
  reply: FastifyReply
) {
  const { idSeries } = req.params;

  const data = await getDetailedSeries(idSeries);
  return { data };
}

export async function getSeasonsBySeriesController(
  req: FastifyRequest<{
    Params: GetSeries;
  }>,
  reply: FastifyReply
) {
  const { idSeries } = req.params;
  const data = await getSeasonsBySeriesServies(idSeries);
  return { data };
}
