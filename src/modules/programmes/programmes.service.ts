import { db } from "@/utils/prisma";
import { selectInfo } from "@/schema/utilsQuery";

export async function getProgrammesServices() {
  const data = await db.entity.findMany({
    where: {
      fragmentType: "PROGRAMME",
    },
    select: selectInfo,
  });
  return data;
}

export async function getProgrammesDetailServies(id: string) {
  const data = await db.entity.findUnique({
    where: {
      fragmentType: "PROGRAMME",
      uuid: id,
    },
    select: selectInfo,
  });

  return data;
}

export async function getProgrammesBySeasonServies(idSeasion: string) {
  const data = await db.entity.findMany({
    where: {
      fragmentType: "PROGRAMME",
      parentUuid: idSeasion,
    },
    select: selectInfo,
  });

  return data;
}
