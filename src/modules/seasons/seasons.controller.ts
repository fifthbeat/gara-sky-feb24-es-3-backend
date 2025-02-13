import { FastifyRequest, FastifyReply } from "fastify";
import {
  getSeasonsServices,
  getSeasonsDetailServies,
} from "@/modules/seasons/seasons.service";
import { ParamSeason } from "./types";
import { getProgrammesBySeasonServies } from "@/modules/programmes/programmes.service";
import { normaliseProgrammes, normaliseSeasons } from "@/utils/normalize";

export async function getSeasonsController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const data = await getSeasonsServices();
  if (data.length) {
    const normalize = data.map((item) => normaliseSeasons(item));
    return { data: normalize };
  }
  return { data };
}

export async function getSeasonsDetailController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const { idSeason } = req.params as ParamSeason;

  const data = await getSeasonsDetailServies(idSeason);
  if (data) {
    const normalize = normaliseSeasons(data);
    return { data: normalize };
  }
  return null;
}

export async function getProgrammesBySeasonsController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const { idSeason } = req.params as ParamSeason;

  const data = await getProgrammesBySeasonServies(idSeason);
  if (data.length > 0) {
    const normalize = data.map((item) => normaliseProgrammes(item));
    return { data: normalize };
  }
  return { data };
}
