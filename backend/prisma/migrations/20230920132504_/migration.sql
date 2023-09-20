/*
  Warnings:

  - You are about to drop the `ListingPhoto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProfilePhoto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ListingPhoto" DROP CONSTRAINT "ListingPhoto_listingId_fkey";

-- DropForeignKey
ALTER TABLE "ProfilePhoto" DROP CONSTRAINT "ProfilePhoto_userId_fkey";

-- DropTable
DROP TABLE "ListingPhoto";

-- DropTable
DROP TABLE "ProfilePhoto";

-- CreateTable
CREATE TABLE "ProfileImage" (
    "profileImageId" TEXT NOT NULL,
    "imgUrl" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ProfileImage_pkey" PRIMARY KEY ("profileImageId")
);

-- CreateTable
CREATE TABLE "ListingImage" (
    "listingImageId" TEXT NOT NULL,
    "imageName" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "listingId" TEXT NOT NULL,

    CONSTRAINT "ListingImage_pkey" PRIMARY KEY ("listingImageId")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProfileImage_userId_key" ON "ProfileImage"("userId");

-- AddForeignKey
ALTER TABLE "ProfileImage" ADD CONSTRAINT "ProfileImage_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListingImage" ADD CONSTRAINT "ListingImage_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("listingId") ON DELETE RESTRICT ON UPDATE CASCADE;
