import { db } from "@/utils/prisma";
import { selectInfoProgrammes } from "@/schema/utilsQuery";
// TODO: fix type
import { Programme, Programme2 } from "prisma/types";

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

export async function createProgrammeService(programmeData: Programme2) {
  console.log("programmeData", programmeData);

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
      // lastUpdated: new Date(lastUpdated), // Ensure Date is correctly formatted
      lastUpdated: new Date(lastUpdated), // Ensure Date is correctly formatted
      durationSeconds,

      // Nested writes for related tables
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
        // TODO: fix
        // @ts-expect-error fix type model
        create: programmeData.localizableInformation?.map((info) => ({
          locale: info.locale,
          seasonNumber: info.seasonNumber,
          episodeNumber: info.episodeNumber,
          title: info.title,

          alternativeTitles: {
            // @ts-expect-error fix type model
            create: info.alternativeTitle?.map((altTitle) => ({
              type: altTitle.type,
              value: altTitle.value,
            })),
          },

          synopses: {
            // @ts-expect-error
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
