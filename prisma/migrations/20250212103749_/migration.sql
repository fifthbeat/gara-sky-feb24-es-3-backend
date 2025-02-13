-- CreateTable
CREATE TABLE "Entity" (
    "uuid" TEXT NOT NULL PRIMARY KEY,
    "fragmentType" TEXT NOT NULL,
    "parentUuid" TEXT,
    "parentType" TEXT,
    "lastUpdated" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "AlternativeDate" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entityUuid" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "AlternativeDate_entityUuid_fkey" FOREIGN KEY ("entityUuid") REFERENCES "Entity" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Genre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entityUuid" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "Genre_entityUuid_fkey" FOREIGN KEY ("entityUuid") REFERENCES "Entity" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Image" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entityUuid" TEXT NOT NULL,
    "checksum" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "size" INTEGER NOT NULL,
    "usage" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "isEditorial" BOOLEAN NOT NULL,
    CONSTRAINT "Image_entityUuid_fkey" FOREIGN KEY ("entityUuid") REFERENCES "Entity" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "LocalizableInformation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entityUuid" TEXT NOT NULL,
    "locale" TEXT NOT NULL,
    "seasonNumber" TEXT,
    "title" TEXT NOT NULL,
    CONSTRAINT "LocalizableInformation_entityUuid_fkey" FOREIGN KEY ("entityUuid") REFERENCES "Entity" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AlternativeTitle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "infoId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "AlternativeTitle_infoId_fkey" FOREIGN KEY ("infoId") REFERENCES "LocalizableInformation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Synopsis" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "infoId" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "Synopsis_infoId_fkey" FOREIGN KEY ("infoId") REFERENCES "LocalizableInformation" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tag" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entityUuid" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "Tag_entityUuid_fkey" FOREIGN KEY ("entityUuid") REFERENCES "Entity" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TargetAudience" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entityUuid" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    CONSTRAINT "TargetAudience_entityUuid_fkey" FOREIGN KEY ("entityUuid") REFERENCES "Entity" ("uuid") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "AlternativeDate_entityUuid_key" ON "AlternativeDate"("entityUuid");
