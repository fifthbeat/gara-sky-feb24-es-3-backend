import { FastifyRequest, FastifyReply } from "fastify";
import {
  getProgrammesServices,
  getProgrammesDetailServies,
  createProgrammeService,
} from "@/modules/programmes/programmes.service";
import { ParamProgrammes } from "./types";
import { normaliseProgrammes } from "@/utils/normalize";
// TODO: fix type
import { Programme, Programme2 } from "prisma/types";

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
    return { data: normalize };
  }
  return null;
}

export async function createProgrammeController(
  // TODO: fix type
  req: FastifyRequest<{ Body: Programme2 }>,
  reply: FastifyReply
) {
  const programmeData = req.body;
  console.log("programmeData", programmeData);
  const newProgramme = await createProgrammeService(programmeData);

  return { data: normaliseProgrammes(newProgramme) };
}
