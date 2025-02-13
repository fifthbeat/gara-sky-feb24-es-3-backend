type Image = {
  usage: string;
  url: string;
};

type AlternativeTitle = {
  type: string;
  value: string;
};

type LocalizableInfo = {
  alternativeTitles: AlternativeTitle[];
  title: string;
  seasonNumber?: string | null;
  episodeNumber?: string | null;
};

type Tag = {
  type: string;
  value: string;
};

type Genre = {
  type: string;
  value: string;
};

export type Entity = {
  fragmentType: string;
  uuid: string;
  images: Image[];
  localizableInfo: LocalizableInfo[];
  tags?: Tag[];
  genres: Genre[];
  parentUuid?: string | null;
  durationSeconds?: string | null;
};

export const normaliseSeries = (data: Entity) => {
  return {
    fragmentType: data.fragmentType,
    uuid: data.uuid,
    images: data.images,
    title: data.localizableInfo[0].title,
    subtitle: data.localizableInfo[0].alternativeTitles,
    tags: data.tags || null,
    genre: data.genres,
  };
};

export const normaliseSeasons = (data: Entity) => {
  return {
    fragmentType: data.fragmentType,
    uuid: data.uuid,
    images: data.images,
    title: data.localizableInfo[0].title,
    subtitle: data.localizableInfo[0].alternativeTitles,
    tags: data.tags || null,
    genre: data.genres,
    seasonNumber: data.localizableInfo[0].seasonNumber,
    parentUuid: data.parentUuid,
  };
};

export const normaliseProgrammes = (data: Entity) => {
  return {
    fragmentType: data.fragmentType,
    uuid: data.uuid,
    images: data.images,
    title: data.localizableInfo[0].title,
    subtitle: data.localizableInfo[0].alternativeTitles,
    tags: data.tags || null,
    genre: data.genres,
    episodeNumber: data.localizableInfo[0].episodeNumber,
    parentUuid: data.parentUuid,
    durationSeconds: data.durationSeconds,
  };
};
