export const selectInfo = {
  fragmentType: true,
  uuid: true,
  images: {
    select: {
      usage: true,
      url: true,
    },
  },
  localizableInfo: {
    select: {
      alternativeTitles: {
        select: {
          type: true,
          value: true,
        },
      },
      title: true,
    },
  },
  tags: {
    select: {
      type: true,
      value: true,
    },
  },
  genres: {
    select: {
      type: true,
      value: true,
    },
  },
};

export const selectInfoSeason = {
  ...selectInfo,
  localizableInfo: {
    select: {
      alternativeTitles: {
        select: {
          type: true,
          value: true,
        },
      },
      seasonNumber: true,
      title: true,
    },
  },
  parentUuid: true,
};

export const selectInfoProgrammes = {
  ...selectInfo,
  localizableInfo: {
    select: {
      alternativeTitles: {
        select: {
          type: true,
          value: true,
        },
      },
      episodeNumber: true,
      title: true,
    },
  },
  durationSeconds: true,
  parentUuid: true,
};
