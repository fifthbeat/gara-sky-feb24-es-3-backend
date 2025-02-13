import { FastifyRequest, FastifyReply } from "fastify";
import {
  getSeriesServices,
  getDetailedSeries,
} from "@/modules/series/series.service";
import { GetSeries } from "./types";
import { getSeasonsBySeriesServies } from "@/modules/seasons/seasons.service";
import { normaliseSeries, normaliseSeasons } from "@/utils/normalize";

export async function getSeriesController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const data = await getSeriesServices();
  if (data.length > 0) {
    const normalize = data.map((item) => normaliseSeries(item));
    return { data: normalize };
  }
  return data;
}

export async function getSeriesDetailController(
  req: FastifyRequest<{
    Params: GetSeries;
  }>,
  reply: FastifyReply
) {
  const { idSeries } = req.params;

  const data = await getDetailedSeries(idSeries);
  if (data) {
    const normalize = normaliseSeries(data);
    return { data: normalize };
  }
  return null;
}

export async function getSeasonsBySeriesController(
  req: FastifyRequest<{
    Params: GetSeries;
  }>,
  reply: FastifyReply
) {
  const { idSeries } = req.params;
  const data = await getSeasonsBySeriesServies(idSeries);
  if (data.length > 0) {
    const normalize = data.map((item) => normaliseSeasons(item));
    return { data: normalize };
  }
  return data;
}
