import { PrismaClient, Prisma } from "@prisma/client";
import data from "./data/esercizio_3.json";
const prisma = new PrismaClient();
import { LocalizableInformation, AlternativeDate } from "./types";

async function main() {
  for (const entity of data.updateEntities) {
    const createdEntity = await prisma.entity.create({
      data: {
        uuid: entity.uuid,
        fragmentType: entity.fragmentType,
        parentUuid: entity.parentUuid || null,
        parentType: entity.parentType || null,
        lastUpdated: new Date(entity.lastUpdated),
      },
    });

    if (entity.alternativeDate) {
      for (const date of entity.alternativeDate) {
        await prisma.alternativeDate.create({
          data: {
            entityUuid: createdEntity.uuid,
            type: date.type,
            value: date.value,
          },
        });
      }
    }

    if (entity.genre) {
      for (const genre of entity.genre) {
        await prisma.genre.create({
          data: {
            entityUuid: createdEntity.uuid,
            type: genre.type,
            value: genre.value,
          },
        });
      }
    }

    if (entity.images) {
      for (const image of entity.images) {
        await prisma.image.create({
          data: {
            entityUuid: createdEntity.uuid,
            checksum: image.checksum,
            locale: image.locale,
            name: image.name,
            size: parseInt(image.size),
            usage: image.usage,
            url: image.url,
            isEditorial: image.isEditorial === "true",
          },
        });
      }
    }

    if (entity.localizableInformation) {
      for (const info of entity.localizableInformation as LocalizableInformation[]) {
        const createdInfo = await prisma.localizableInformation.create({
          data: {
            entityUuid: createdEntity.uuid,
            locale: info.locale,
            ...(info.seasonNumber && { seasonNumber: info.seasonNumber }),
            ...(info.episodeNumber && { episodeNumber: info.episodeNumber }),
            title: info.title,
          },
        });

        if (info.alternativeTitle) {
          for (const altTitle of info.alternativeTitle) {
            await prisma.alternativeTitle.create({
              data: {
                infoId: createdInfo.id,
                type: altTitle.type,
                value: altTitle.value,
              },
            });
          }
        }

        if (info.synopsis) {
          for (const synopsis of info.synopsis) {
            await prisma.synopsis.create({
              data: {
                infoId: createdInfo.id,
                type: synopsis.type,
                value: synopsis.value,
              },
            });
          }
        }
      }
    }

    if (entity.tags) {
      for (const tag of entity.tags) {
        await prisma.tag.create({
          data: {
            entityUuid: createdEntity.uuid,
            type: tag.type,
            value: tag.value,
          },
        });
      }
    }

    if (entity.targetAudience) {
      for (const audience of entity.targetAudience) {
        await prisma.targetAudience.create({
          data: {
            entityUuid: createdEntity.uuid,
            type: audience.type,
            value: audience.value,
          },
        });
      }
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
