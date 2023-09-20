/*
  Warnings:

  - You are about to drop the column `photoName` on the `ListingPhoto` table. All the data in the column will be lost.
  - Added the required column `imageName` to the `ListingPhoto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ListingPhoto" DROP COLUMN "photoName",
ADD COLUMN     "imageName" TEXT NOT NULL;
