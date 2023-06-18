/*
  Warnings:

  - You are about to drop the `CategoryToListing` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CategoryToListing" DROP CONSTRAINT "CategoryToListing_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryToListing" DROP CONSTRAINT "CategoryToListing_listingId_fkey";

-- DropTable
DROP TABLE "CategoryToListing";

-- CreateTable
CREATE TABLE "_CategoryToListing" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToListing_AB_unique" ON "_CategoryToListing"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToListing_B_index" ON "_CategoryToListing"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToListing" ADD CONSTRAINT "_CategoryToListing_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("categoryId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToListing" ADD CONSTRAINT "_CategoryToListing_B_fkey" FOREIGN KEY ("B") REFERENCES "Listing"("listingId") ON DELETE CASCADE ON UPDATE CASCADE;
