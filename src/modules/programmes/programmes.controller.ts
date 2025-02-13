import { FastifyRequest, FastifyReply } from "fastify";
import {
  getProgrammesServices,
  getProgrammesDetailServies,
} from "@/modules/programmes/programmes.service";
import { ParamProgrammes } from "./types";
import { normaliseProgrammes } from "@/utils/normalize";

export async function getProgrammesController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const data = await getProgrammesServices();

  if (data.length > 0) {
    const normalize = data.map((item) => normaliseProgrammes(item));
    return { data: normalize };
  }
  return { data };
}

export async function getProgrammesDetailController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const { idProgrammes } = req.params as ParamProgrammes;

  const data = await getProgrammesDetailServies(idProgrammes);
  if (data) {
    const normalize = normaliseProgrammes(data);
    return { normalize };
  }
  return null;
}
