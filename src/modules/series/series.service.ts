import { db } from "@/utils/prisma";
import { selectInfo } from "@/schema/utilsQuery";

export async function getSeriesServices() {
  const series = await db.entity.findMany({
    where: {
      fragmentType: "SERIES",
    },
    select: selectInfo,
  });
  return { data: series };
}

/**
 * Fetches all information about Entities with fragmentType = "SERIES".
 * This version omits all fields named `id` from the response by explicitly selecting
 * only the required fields.
 */
export async function getDetailedSeries(id: string) {
  const data = await db.entity.findUnique({
    where: {
      fragmentType: "SERIES",
      uuid: id,
    },
    select: selectInfo,
  });

  return data;
}
