/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Address` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[hostId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[listingId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "hostAddress";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "listingAddress";

-- DropIndex
DROP INDEX "Address_ownerId_key";

-- AlterTable
ALTER TABLE "Address" DROP COLUMN "ownerId",
ADD COLUMN     "hostId" TEXT,
ADD COLUMN     "listingId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Address_hostId_key" ON "Address"("hostId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_listingId_key" ON "Address"("listingId");

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("hostId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("listingId") ON DELETE SET NULL ON UPDATE CASCADE;
