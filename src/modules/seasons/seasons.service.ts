import { db } from "@/utils/prisma";
import { selectInfo } from "@/schema/utilsQuery";

export async function getSeasonsServices() {
  const data = await db.entity.findMany({
    where: {
      fragmentType: "SEASON",
    },
    select: selectInfo,
  });
  return data;
}

export async function getSeasonsDetailServies(id: string) {
  const data = await db.entity.findUnique({
    where: {
      fragmentType: "SEASON",
      uuid: id,
    },
    select: selectInfo,
  });

  return data;
}

export async function getSeasonsBySeriesServies(idSeries: string) {
  const data = await db.entity.findMany({
    where: {
      fragmentType: "SEASON",
      parentUuid: idSeries,
    },
    select: selectInfo,
  });

  return data;
}
