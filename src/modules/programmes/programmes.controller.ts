import { FastifyRequest, FastifyReply } from "fastify";
import {
  getProgrammesServices,
  getProgrammesDetailServies,
  createProgrammeService,
} from "@/modules/programmes/programmes.service";
import { ParamProgrammes } from "./types";
import { normaliseProgrammes } from "@/utils/normalize";

import { Programme } from "prisma/types";

export async function getProgrammesController(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const { page = 1, limit = 10 } = req.query as {
    page: number;
    limit: number;
  };
  const { data, totalCount } = await getProgrammesServices(
    Number(page),
    Number(limit)
  );

  const normalize = data.map((item) => normaliseProgrammes(item));

  return {
    pagination: {
      currentPage: Number(page),
      totalPages: Math.ceil(totalCount / limit),
      totalElements: totalCount,
    },
    data: normalize,
  };
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
  req: FastifyRequest<{ Body: Programme }>,
  reply: FastifyReply
) {
  const programmeData = req.body;
  const newProgramme = await createProgrammeService(programmeData);

  return { data: normaliseProgrammes(newProgramme) };
}
