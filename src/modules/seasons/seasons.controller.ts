import { FastifyRequest, FastifyReply } from "fastify";
import {
  getSeasonsServices,
  getSeasonsDetailServies,
} from "@/modules/seasons/seasons.service";
import { ParamSeason } from "./types";
import { getProgrammesBySeasonServies } from "@/modules/programmes/programmes.service";

export async function getSeasonsController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const data = await getSeasonsServices();
  return { data };
}

export async function getSeasonsDetailController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const { idSeason } = req.params as ParamSeason;

  const data = await getSeasonsDetailServies(idSeason);
  return { data };
}

export async function getProgrammesBySeasonsController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const { idSeason } = req.params as ParamSeason;

  const data = await getProgrammesBySeasonServies(idSeason);
  return { data };
}
