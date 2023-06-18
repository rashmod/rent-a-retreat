/*
  Warnings:

  - You are about to drop the column `categoryCategoryId` on the `CategoryToListing` table. All the data in the column will be lost.
  - You are about to drop the column `listingListingId` on the `CategoryToListing` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `CategoryToListing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listingId` to the `CategoryToListing` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CategoryToListing" DROP CONSTRAINT "CategoryToListing_categoryCategoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryToListing" DROP CONSTRAINT "CategoryToListing_listingListingId_fkey";

-- AlterTable
ALTER TABLE "CategoryToListing" DROP COLUMN "categoryCategoryId",
DROP COLUMN "listingListingId",
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "listingId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CategoryToListing" ADD CONSTRAINT "CategoryToListing_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("listingId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryToListing" ADD CONSTRAINT "CategoryToListing_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("categoryId") ON DELETE CASCADE ON UPDATE CASCADE;
