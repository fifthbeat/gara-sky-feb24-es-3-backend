import { FastifyRequest, FastifyReply } from "fastify";
import {
  getProgrammesServices,
  getProgrammesDetailServies,
} from "@/modules/programmes/programmes.service";
import { ParamProgrammes } from "./types";

export async function getProgrammesController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const data = await getProgrammesServices();
  return { data };
}

export async function getProgrammesDetailController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const { idProgrammes } = req.params as ParamProgrammes;

  const data = await getProgrammesDetailServies(idProgrammes);
  return { data };
}
