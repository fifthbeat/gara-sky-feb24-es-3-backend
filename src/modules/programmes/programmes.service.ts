import { db } from "@/utils/prisma";
import { selectInfoProgrammes } from "@/schema/utilsQuery";

export async function getProgrammesServices() {
  const data = await db.entity.findMany({
    where: {
      fragmentType: "PROGRAMME",
    },
    select: selectInfoProgrammes,
  });
  return data;
}

export async function getProgrammesDetailServies(id: string) {
  const data = await db.entity.findUnique({
    where: {
      fragmentType: "PROGRAMME",
      uuid: id,
    },
    select: selectInfoProgrammes,
  });

  return data;
}

export async function getProgrammesBySeasonServies(idSeasion: string) {
  const data = await db.entity.findMany({
    where: {
      fragmentType: "PROGRAMME",
      parentUuid: idSeasion,
    },
    select: selectInfoProgrammes,
  });

  return data;
}
