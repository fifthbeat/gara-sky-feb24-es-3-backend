import { db } from "@/utils/prisma";
import { selectInfoSeason } from "@/schema/utilsQuery";

export async function getSeasonsServices() {
  console.log("selectInfoSeason", selectInfoSeason);
  const data = await db.entity.findMany({
    where: {
      fragmentType: "SEASON",
    },
    select: selectInfoSeason,
  });
  return data;
}

export async function getSeasonsDetailServies(id: string) {
  const data = await db.entity.findUnique({
    where: {
      fragmentType: "SEASON",
      uuid: id,
    },
    select: selectInfoSeason,
  });

  return data;
}

export async function getSeasonsBySeriesServies(idSeries: string) {
  const data = await db.entity.findMany({
    where: {
      fragmentType: "SEASON",
      parentUuid: idSeries,
    },
    select: selectInfoSeason,
  });

  return data;
}
