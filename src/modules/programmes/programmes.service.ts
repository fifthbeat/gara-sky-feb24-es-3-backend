import { db } from "@/utils/prisma";
import { selectInfoProgrammes } from "@/schema/utilsQuery";

import { Programme } from "prisma/types";

export async function getProgrammesServices(page: number, limit: number) {
  const [data, totalCount] = await Promise.all([
    db.entity.findMany({
      where: {
        fragmentType: "PROGRAMME",
      },
      select: selectInfoProgrammes,
      skip: (page - 1) * limit,
      take: limit,
    }),
    db.entity.count({
      where: {
        fragmentType: "PROGRAMME",
      },
    }),
  ]);

  return { data, totalCount };
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

export async function createProgrammeService(programmeData: Programme) {
  const {
    fragmentType,
    parentUuid,
    parentType,
    lastUpdated,
    durationSeconds,
    alternativeDates,
    genres,
    images,
    localizableInfo,
    tags,
    targetAudience,
  } = programmeData;
  const newProgramme = await db.entity.create({
    data: {
      fragmentType,
      parentUuid,
      parentType,
      lastUpdated: new Date(lastUpdated), // Ensure Date is correctly formatted
      durationSeconds,

      alternativeDates: {
        create: alternativeDates?.map((date) => ({
          type: date.type,
          value: date.value,
        })),
      },

      genres: {
        create: genres?.map((genre) => ({
          type: genre.type,
          value: genre.value,
        })),
      },

      images: {
        create: images?.map((image) => ({
          checksum: image.checksum,
          locale: image.locale,
          name: image.name,
          size: parseInt(image.size),
          usage: image.usage,
          url: image.url,
          isEditorial: Boolean(image.isEditorial),
        })),
      },

      localizableInfo: {
        create: localizableInfo?.map((info) => ({
          locale: info.locale,
          seasonNumber: info.seasonNumber,
          episodeNumber: info.episodeNumber,
          title: info.title,

          alternativeTitles: {
            create: info.alternativeTitle?.map((altTitle) => ({
              type: altTitle.type,
              value: altTitle.value,
            })),
          },

          synopses: {
            create: info.synopsis?.map((synopsis) => ({
              type: synopsis.type,
              value: synopsis.value,
            })),
          },
        })),
      },

      tags: {
        create: tags?.map((tag) => ({
          type: tag.type,
          value: tag.value,
        })),
      },

      targetAudience: {
        create: targetAudience?.map((audience) => ({
          type: audience.type,
          value: audience.value,
        })),
      },
    },

    select: selectInfoProgrammes,
  });
  return newProgramme;
}
