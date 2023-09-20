/*
  Warnings:

  - You are about to drop the column `imageName` on the `ListingImage` table. All the data in the column will be lost.
  - You are about to drop the column `imageName` on the `ProfileImage` table. All the data in the column will be lost.
  - Added the required column `listingImageName` to the `ListingImage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profileImageName` to the `ProfileImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ListingImage" DROP COLUMN "imageName",
ADD COLUMN     "listingImageName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProfileImage" DROP COLUMN "imageName",
ADD COLUMN     "profileImageName" TEXT NOT NULL;
