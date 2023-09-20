/*
  Warnings:

  - You are about to drop the column `photoUrl` on the `ListingPhoto` table. All the data in the column will be lost.
  - Added the required column `photoName` to the `ListingPhoto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ListingPhoto" DROP COLUMN "photoUrl",
ADD COLUMN     "photoName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "checkedInDate" TIMESTAMP(3),
ADD COLUMN     "checkedOutDate" TIMESTAMP(3),
ADD COLUMN     "isCheckedIn" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isCheckedOut" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "isCancelled" SET DEFAULT false;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;
