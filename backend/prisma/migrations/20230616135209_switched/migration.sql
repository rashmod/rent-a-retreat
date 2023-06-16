/*
  Warnings:

  - The primary key for the `Address` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `address_id` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `address_line` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `owner_id` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `postal_code` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `street_name` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `unit_number` on the `Address` table. All the data in the column will be lost.
  - The primary key for the `Amenity` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `amenity_description` on the `Amenity` table. All the data in the column will be lost.
  - You are about to drop the column `amenity_id` on the `Amenity` table. All the data in the column will be lost.
  - You are about to drop the column `amenity_title` on the `Amenity` table. All the data in the column will be lost.
  - The primary key for the `Category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category_description` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `category_id` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `category_title` on the `Category` table. All the data in the column will be lost.
  - The primary key for the `EmergencyContact` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `emergency_contact_id` on the `EmergencyContact` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `EmergencyContact` table. All the data in the column will be lost.
  - You are about to drop the column `host_id` on the `EmergencyContact` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `EmergencyContact` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `EmergencyContact` table. All the data in the column will be lost.
  - The primary key for the `Guest` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `avg_rating` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `guest_id` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `total_rating_count` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Guest` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Guest` table. All the data in the column will be lost.
  - The primary key for the `Host` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `avg_rating` on the `Host` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Host` table. All the data in the column will be lost.
  - You are about to drop the column `host_id` on the `Host` table. All the data in the column will be lost.
  - You are about to drop the column `total_rating_count` on the `Host` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Host` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Host` table. All the data in the column will be lost.
  - The primary key for the `HouseRule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `house_rule_id` on the `HouseRule` table. All the data in the column will be lost.
  - You are about to drop the column `rule_description` on the `HouseRule` table. All the data in the column will be lost.
  - You are about to drop the column `rule_title` on the `HouseRule` table. All the data in the column will be lost.
  - The primary key for the `Listing` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `avg_rating` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `bathroom_count` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `bedroom_count` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `cleaning_fee` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `days_before_cancellation` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `host_id` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `is_refundable` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `listing_id` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `listing_name` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `max_guest` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `percent_refundable` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `price_per_night` on the `Listing` table. All the data in the column will be lost.
  - You are about to drop the column `total_rating_count` on the `Listing` table. All the data in the column will be lost.
  - The primary key for the `ListingPhoto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `listing_id` on the `ListingPhoto` table. All the data in the column will be lost.
  - You are about to drop the column `listing_photo_id` on the `ListingPhoto` table. All the data in the column will be lost.
  - You are about to drop the column `photo_url` on the `ListingPhoto` table. All the data in the column will be lost.
  - The primary key for the `ProfilePhoto` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `img_url` on the `ProfilePhoto` table. All the data in the column will be lost.
  - You are about to drop the column `profile_photo_id` on the `ProfilePhoto` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `ProfilePhoto` table. All the data in the column will be lost.
  - The primary key for the `Reservation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `booking_date` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `cancellation_date` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `check_in_date` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `check_out_date` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `guest_id` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `is_cancelled` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `listing_id` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `num_of_guests` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `refund_amount` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `reservation_id` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `total_cost` on the `Reservation` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `date_of_birth` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phone_number` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ownerId]` on the table `Address` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Guest` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Host` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `ProfilePhoto` will be added. If there are existing duplicate values, this will fail.
  - The required column `addressId` was added to the `Address` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `addressLine` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ownerId` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postalCode` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `streetName` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unitNumber` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `amenityDescription` to the `Amenity` table without a default value. This is not possible if the table is not empty.
  - The required column `amenityId` was added to the `Amenity` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `amenityTitle` to the `Amenity` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryDescription` to the `Category` table without a default value. This is not possible if the table is not empty.
  - The required column `categoryId` was added to the `Category` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `categoryTitle` to the `Category` table without a default value. This is not possible if the table is not empty.
  - The required column `emergencyContactId` was added to the `EmergencyContact` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `firstName` to the `EmergencyContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostId` to the `EmergencyContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `EmergencyContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `EmergencyContact` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avgRating` to the `Guest` table without a default value. This is not possible if the table is not empty.
  - The required column `guestId` was added to the `Guest` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `totalRatingCount` to the `Guest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Guest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Guest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avgRating` to the `Host` table without a default value. This is not possible if the table is not empty.
  - The required column `hostId` was added to the `Host` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `totalRatingCount` to the `Host` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Host` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Host` table without a default value. This is not possible if the table is not empty.
  - The required column `houseRuleId` was added to the `HouseRule` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `ruleDescription` to the `HouseRule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ruleTitle` to the `HouseRule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `avgRating` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bathroomCount` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bedroomCount` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cleaningFee` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hostId` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRefundable` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - The required column `listingId` was added to the `Listing` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `listingName` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxGuest` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pricePerNight` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalRatingCount` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listingId` to the `ListingPhoto` table without a default value. This is not possible if the table is not empty.
  - The required column `listingPhotoId` was added to the `ListingPhoto` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `photoUrl` to the `ListingPhoto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgUrl` to the `ProfilePhoto` table without a default value. This is not possible if the table is not empty.
  - The required column `profilePhotoId` was added to the `ProfilePhoto` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `userId` to the `ProfilePhoto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cancellationDate` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkInDate` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `checkOutDate` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `guestId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isCancelled` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listingId` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numOfGuests` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - The required column `reservationId` was added to the `Reservation` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `totalCost` to the `Reservation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dateOfBirth` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `User` table without a default value. This is not possible if the table is not empty.
  - The required column `userId` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "host_address";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "listing_address";

-- DropForeignKey
ALTER TABLE "EmergencyContact" DROP CONSTRAINT "EmergencyContact_host_id_fkey";

-- DropForeignKey
ALTER TABLE "Guest" DROP CONSTRAINT "Guest_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Host" DROP CONSTRAINT "Host_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Listing" DROP CONSTRAINT "Listing_host_id_fkey";

-- DropForeignKey
ALTER TABLE "ListingPhoto" DROP CONSTRAINT "ListingPhoto_listing_id_fkey";

-- DropForeignKey
ALTER TABLE "ProfilePhoto" DROP CONSTRAINT "ProfilePhoto_user_id_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_guest_id_fkey";

-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_listing_id_fkey";

-- DropForeignKey
ALTER TABLE "_AmenityToListing" DROP CONSTRAINT "_AmenityToListing_A_fkey";

-- DropForeignKey
ALTER TABLE "_AmenityToListing" DROP CONSTRAINT "_AmenityToListing_B_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToListing" DROP CONSTRAINT "_CategoryToListing_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToListing" DROP CONSTRAINT "_CategoryToListing_B_fkey";

-- DropForeignKey
ALTER TABLE "_HouseRuleToListing" DROP CONSTRAINT "_HouseRuleToListing_A_fkey";

-- DropForeignKey
ALTER TABLE "_HouseRuleToListing" DROP CONSTRAINT "_HouseRuleToListing_B_fkey";

-- DropIndex
DROP INDEX "Address_owner_id_key";

-- DropIndex
DROP INDEX "Guest_user_id_key";

-- DropIndex
DROP INDEX "Host_user_id_key";

-- DropIndex
DROP INDEX "ProfilePhoto_user_id_key";

-- AlterTable
ALTER TABLE "Address" DROP CONSTRAINT "Address_pkey",
DROP COLUMN "address_id",
DROP COLUMN "address_line",
DROP COLUMN "owner_id",
DROP COLUMN "postal_code",
DROP COLUMN "street_name",
DROP COLUMN "unit_number",
ADD COLUMN     "addressId" TEXT NOT NULL,
ADD COLUMN     "addressLine" TEXT NOT NULL,
ADD COLUMN     "ownerId" TEXT NOT NULL,
ADD COLUMN     "postalCode" TEXT NOT NULL,
ADD COLUMN     "streetName" TEXT NOT NULL,
ADD COLUMN     "unitNumber" TEXT NOT NULL,
ADD CONSTRAINT "Address_pkey" PRIMARY KEY ("addressId");

-- AlterTable
ALTER TABLE "Amenity" DROP CONSTRAINT "Amenity_pkey",
DROP COLUMN "amenity_description",
DROP COLUMN "amenity_id",
DROP COLUMN "amenity_title",
ADD COLUMN     "amenityDescription" TEXT NOT NULL,
ADD COLUMN     "amenityId" TEXT NOT NULL,
ADD COLUMN     "amenityTitle" TEXT NOT NULL,
ADD CONSTRAINT "Amenity_pkey" PRIMARY KEY ("amenityId");

-- AlterTable
ALTER TABLE "Category" DROP CONSTRAINT "Category_pkey",
DROP COLUMN "category_description",
DROP COLUMN "category_id",
DROP COLUMN "category_title",
ADD COLUMN     "categoryDescription" TEXT NOT NULL,
ADD COLUMN     "categoryId" TEXT NOT NULL,
ADD COLUMN     "categoryTitle" TEXT NOT NULL,
ADD CONSTRAINT "Category_pkey" PRIMARY KEY ("categoryId");

-- AlterTable
ALTER TABLE "EmergencyContact" DROP CONSTRAINT "EmergencyContact_pkey",
DROP COLUMN "emergency_contact_id",
DROP COLUMN "first_name",
DROP COLUMN "host_id",
DROP COLUMN "last_name",
DROP COLUMN "phone_number",
ADD COLUMN     "emergencyContactId" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "hostId" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" BIGINT NOT NULL,
ADD CONSTRAINT "EmergencyContact_pkey" PRIMARY KEY ("emergencyContactId");

-- AlterTable
ALTER TABLE "Guest" DROP CONSTRAINT "Guest_pkey",
DROP COLUMN "avg_rating",
DROP COLUMN "created_at",
DROP COLUMN "guest_id",
DROP COLUMN "total_rating_count",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "avgRating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "guestId" TEXT NOT NULL,
ADD COLUMN     "totalRatingCount" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "Guest_pkey" PRIMARY KEY ("guestId");

-- AlterTable
ALTER TABLE "Host" DROP CONSTRAINT "Host_pkey",
DROP COLUMN "avg_rating",
DROP COLUMN "created_at",
DROP COLUMN "host_id",
DROP COLUMN "total_rating_count",
DROP COLUMN "updated_at",
DROP COLUMN "user_id",
ADD COLUMN     "avgRating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "hostId" TEXT NOT NULL,
ADD COLUMN     "totalRatingCount" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "Host_pkey" PRIMARY KEY ("hostId");

-- AlterTable
ALTER TABLE "HouseRule" DROP CONSTRAINT "HouseRule_pkey",
DROP COLUMN "house_rule_id",
DROP COLUMN "rule_description",
DROP COLUMN "rule_title",
ADD COLUMN     "houseRuleId" TEXT NOT NULL,
ADD COLUMN     "ruleDescription" TEXT NOT NULL,
ADD COLUMN     "ruleTitle" TEXT NOT NULL,
ADD CONSTRAINT "HouseRule_pkey" PRIMARY KEY ("houseRuleId");

-- AlterTable
ALTER TABLE "Listing" DROP CONSTRAINT "Listing_pkey",
DROP COLUMN "avg_rating",
DROP COLUMN "bathroom_count",
DROP COLUMN "bedroom_count",
DROP COLUMN "cleaning_fee",
DROP COLUMN "days_before_cancellation",
DROP COLUMN "host_id",
DROP COLUMN "is_refundable",
DROP COLUMN "listing_id",
DROP COLUMN "listing_name",
DROP COLUMN "max_guest",
DROP COLUMN "percent_refundable",
DROP COLUMN "price_per_night",
DROP COLUMN "total_rating_count",
ADD COLUMN     "avgRating" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "bathroomCount" INTEGER NOT NULL,
ADD COLUMN     "bedroomCount" INTEGER NOT NULL,
ADD COLUMN     "cleaningFee" INTEGER NOT NULL,
ADD COLUMN     "daysBeforeCancellation" INTEGER,
ADD COLUMN     "hostId" TEXT NOT NULL,
ADD COLUMN     "isRefundable" BOOLEAN NOT NULL,
ADD COLUMN     "listingId" TEXT NOT NULL,
ADD COLUMN     "listingName" TEXT NOT NULL,
ADD COLUMN     "maxGuest" INTEGER NOT NULL,
ADD COLUMN     "percentRefundable" INTEGER,
ADD COLUMN     "pricePerNight" INTEGER NOT NULL,
ADD COLUMN     "totalRatingCount" INTEGER NOT NULL,
ADD CONSTRAINT "Listing_pkey" PRIMARY KEY ("listingId");

-- AlterTable
ALTER TABLE "ListingPhoto" DROP CONSTRAINT "ListingPhoto_pkey",
DROP COLUMN "listing_id",
DROP COLUMN "listing_photo_id",
DROP COLUMN "photo_url",
ADD COLUMN     "listingId" TEXT NOT NULL,
ADD COLUMN     "listingPhotoId" TEXT NOT NULL,
ADD COLUMN     "photoUrl" TEXT NOT NULL,
ADD CONSTRAINT "ListingPhoto_pkey" PRIMARY KEY ("listingPhotoId");

-- AlterTable
ALTER TABLE "ProfilePhoto" DROP CONSTRAINT "ProfilePhoto_pkey",
DROP COLUMN "img_url",
DROP COLUMN "profile_photo_id",
DROP COLUMN "user_id",
ADD COLUMN     "imgUrl" TEXT NOT NULL,
ADD COLUMN     "profilePhotoId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "ProfilePhoto_pkey" PRIMARY KEY ("profilePhotoId");

-- AlterTable
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_pkey",
DROP COLUMN "booking_date",
DROP COLUMN "cancellation_date",
DROP COLUMN "check_in_date",
DROP COLUMN "check_out_date",
DROP COLUMN "guest_id",
DROP COLUMN "is_cancelled",
DROP COLUMN "listing_id",
DROP COLUMN "num_of_guests",
DROP COLUMN "refund_amount",
DROP COLUMN "reservation_id",
DROP COLUMN "total_cost",
ADD COLUMN     "bookingDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "cancellationDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "checkInDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "checkOutDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "guestId" TEXT NOT NULL,
ADD COLUMN     "isCancelled" BOOLEAN NOT NULL,
ADD COLUMN     "listingId" TEXT NOT NULL,
ADD COLUMN     "numOfGuests" INTEGER NOT NULL,
ADD COLUMN     "refundAmount" INTEGER,
ADD COLUMN     "reservationId" TEXT NOT NULL,
ADD COLUMN     "totalCost" INTEGER NOT NULL,
ADD CONSTRAINT "Reservation_pkey" PRIMARY KEY ("reservationId");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "date_of_birth",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
DROP COLUMN "phone_number",
DROP COLUMN "user_id",
ADD COLUMN     "dateOfBirth" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" BIGINT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Address_ownerId_key" ON "Address"("ownerId");

-- CreateIndex
CREATE UNIQUE INDEX "Guest_userId_key" ON "Guest"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Host_userId_key" ON "Host"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "ProfilePhoto_userId_key" ON "ProfilePhoto"("userId");

-- AddForeignKey
ALTER TABLE "ProfilePhoto" ADD CONSTRAINT "ProfilePhoto_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Host" ADD CONSTRAINT "Host_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmergencyContact" ADD CONSTRAINT "EmergencyContact_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("hostId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "hostAddress" FOREIGN KEY ("ownerId") REFERENCES "Host"("hostId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "listingAddress" FOREIGN KEY ("ownerId") REFERENCES "Listing"("listingId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("hostId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListingPhoto" ADD CONSTRAINT "ListingPhoto_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("listingId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_guestId_fkey" FOREIGN KEY ("guestId") REFERENCES "Guest"("guestId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_listingId_fkey" FOREIGN KEY ("listingId") REFERENCES "Listing"("listingId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HouseRuleToListing" ADD CONSTRAINT "_HouseRuleToListing_A_fkey" FOREIGN KEY ("A") REFERENCES "HouseRule"("houseRuleId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HouseRuleToListing" ADD CONSTRAINT "_HouseRuleToListing_B_fkey" FOREIGN KEY ("B") REFERENCES "Listing"("listingId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToListing" ADD CONSTRAINT "_CategoryToListing_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("categoryId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToListing" ADD CONSTRAINT "_CategoryToListing_B_fkey" FOREIGN KEY ("B") REFERENCES "Listing"("listingId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AmenityToListing" ADD CONSTRAINT "_AmenityToListing_A_fkey" FOREIGN KEY ("A") REFERENCES "Amenity"("amenityId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AmenityToListing" ADD CONSTRAINT "_AmenityToListing_B_fkey" FOREIGN KEY ("B") REFERENCES "Listing"("listingId") ON DELETE CASCADE ON UPDATE CASCADE;
