export const selectInfo = {
  // For Entity, we use uuid as the primary identifier (there is no "id")
  uuid: true,
  fragmentType: true,
  parentUuid: true,
  parentType: true,
  lastUpdated: true,
  // For AlternativeDate, exclude the "id" field
  alternativeDates: {
    select: {
      entityUuid: true,
      type: true,
      value: true,
    },
  },
  // For Genre
  genres: {
    select: {
      type: true,
      value: true,
    },
  },
  // For Image
  images: {
    select: {
      checksum: true,
      locale: true,
      name: true,
      size: true,
      usage: true,
      url: true,
      isEditorial: true,
    },
  },
  // For LocalizableInformation, exclude "id"
  localizableInfo: {
    select: {
      locale: true,
      seasonNumber: true,
      episodeNumber: true,
      title: true,
      // For AlternativeTitle, exclude "id"
      alternativeTitles: {
        select: {
          infoId: true,
          type: true,
          value: true,
        },
      },
      // For Synopsis, exclude "id"
      synopses: {
        select: {
          type: true,
          value: true,
        },
      },
    },
  },
  // For Tag
  tags: {
    select: {
      type: true,
      value: true,
    },
  },
  // For TargetAudience
  targetAudience: {
    select: {
      entityUuid: true,
      type: true,
      value: true,
    },
  },
};
