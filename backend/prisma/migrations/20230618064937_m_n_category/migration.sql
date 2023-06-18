/*
  Warnings:

  - You are about to drop the `_CategoryToListing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToListing" DROP CONSTRAINT "_CategoryToListing_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToListing" DROP CONSTRAINT "_CategoryToListing_B_fkey";

-- DropTable
DROP TABLE "_CategoryToListing";

-- CreateTable
CREATE TABLE "CategoryToListing" (
    "categoryToListingId" TEXT NOT NULL,
    "listingListingId" TEXT NOT NULL,
    "categoryCategoryId" TEXT NOT NULL,

    CONSTRAINT "CategoryToListing_pkey" PRIMARY KEY ("categoryToListingId")
);

-- AddForeignKey
ALTER TABLE "CategoryToListing" ADD CONSTRAINT "CategoryToListing_listingListingId_fkey" FOREIGN KEY ("listingListingId") REFERENCES "Listing"("listingId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryToListing" ADD CONSTRAINT "CategoryToListing_categoryCategoryId_fkey" FOREIGN KEY ("categoryCategoryId") REFERENCES "Category"("categoryId") ON DELETE CASCADE ON UPDATE CASCADE;
