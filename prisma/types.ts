// Basic shared types
export type AlternativeDate = {
  type: string;
  value: string;
};

type Genre = {
  type: "epgGenres" | "epgSubGenres" | "recommendationGenres" | "microGenres";
  value: string;
};

type Image = {
  checksum: string;
  locale: string;
  name: string;
  size: string;
  usage: string;
  url: string;
  isEditorial: string;
};

type AlternativeTitle = {
  type: string;
  value: string;
};

type Synopsis = {
  type: "medium" | "long" | "short";
  value: string;
};

export type LocalizableInformation = {
  locale: string;
  alternativeTitle: AlternativeTitle[];
  synopsis: Synopsis[];
  title: string;
  seasonNumber?: string;
  episodeNumber?: string;
};

type Tag = {
  type: string;
  value: string;
};

type TargetAudience = {
  type: string;
  value: string;
};

// Main entity types
export type BaseEntity = {
  fragmentType: "SEASON" | "PROGRAMME" | "SERIES";
  uuid: string;
  alternativeDate: AlternativeDate[];
  genre: Genre[];
  images: Image[];
  lastUpdated: string;
  localizableInformation: LocalizableInformation[];
  tags: Tag[];
  targetAudience: TargetAudience[];
  parentType?: string;
  parentUuid?: string;
};

type Season = BaseEntity & {
  fragmentType: "SEASON";
};

type Programme = BaseEntity & {
  fragmentType: "PROGRAMME";
  durationSeconds: string;
  lastInSeason: boolean;
};

type Series = BaseEntity & {
  fragmentType: "SERIES";
  isNeverMissFlag: boolean;
};

// Root level type
export type ContentUpdate = {
  lastPublishedTs: string;
  updateEntities: (Season | Programme | Series)[];
  deleteEntities: any[];
};
