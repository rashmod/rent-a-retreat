/*
  Warnings:

  - You are about to drop the column `imgUrl` on the `ProfileImage` table. All the data in the column will be lost.
  - Added the required column `imageName` to the `ProfileImage` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProfileImage" DROP COLUMN "imgUrl",
ADD COLUMN     "imageName" TEXT NOT NULL;
