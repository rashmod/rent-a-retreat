-- CreateTable
CREATE TABLE "User" (
    "user_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" BIGINT NOT NULL,
    "date_of_birth" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "ProfilePhoto" (
    "profile_photo_id" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "ProfilePhoto_pkey" PRIMARY KEY ("profile_photo_id")
);

-- CreateTable
CREATE TABLE "Host" (
    "host_id" TEXT NOT NULL,
    "avg_rating" DOUBLE PRECISION NOT NULL,
    "total_rating_count" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Host_pkey" PRIMARY KEY ("host_id")
);

-- CreateTable
CREATE TABLE "Guest" (
    "guest_id" TEXT NOT NULL,
    "avg_rating" DOUBLE PRECISION NOT NULL,
    "total_rating_count" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Guest_pkey" PRIMARY KEY ("guest_id")
);

-- CreateTable
CREATE TABLE "EmergencyContact" (
    "emergency_contact_id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone_number" BIGINT NOT NULL,
    "relationship" TEXT NOT NULL,
    "host_id" TEXT NOT NULL,

    CONSTRAINT "EmergencyContact_pkey" PRIMARY KEY ("emergency_contact_id")
);

-- CreateTable
CREATE TABLE "Address" (
    "address_id" TEXT NOT NULL,
    "unit_number" TEXT NOT NULL,
    "street_name" TEXT NOT NULL,
    "address_line" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "owner_id" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "Listing" (
    "listing_id" TEXT NOT NULL,
    "listing_name" TEXT NOT NULL,
    "bedroom_count" INTEGER NOT NULL,
    "bathroom_count" INTEGER NOT NULL,
    "price_per_night" INTEGER NOT NULL,
    "cleaning_fee" INTEGER NOT NULL,
    "max_guest" INTEGER NOT NULL,
    "avg_rating" DOUBLE PRECISION NOT NULL,
    "total_rating_count" INTEGER NOT NULL,
    "is_refundable" BOOLEAN NOT NULL,
    "percent_refundable" INTEGER,
    "days_before_cancellation" INTEGER,
    "latitude" DECIMAL(65,30) NOT NULL,
    "longitude" DECIMAL(65,30) NOT NULL,
    "host_id" TEXT NOT NULL,

    CONSTRAINT "Listing_pkey" PRIMARY KEY ("listing_id")
);

-- CreateTable
CREATE TABLE "ListingPhoto" (
    "listing_photo_id" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    "position" INTEGER NOT NULL,
    "listing_id" TEXT NOT NULL,

    CONSTRAINT "ListingPhoto_pkey" PRIMARY KEY ("listing_photo_id")
);

-- CreateTable
CREATE TABLE "HouseRule" (
    "house_rule_id" TEXT NOT NULL,
    "rule_title" TEXT NOT NULL,
    "rule_description" TEXT NOT NULL,

    CONSTRAINT "HouseRule_pkey" PRIMARY KEY ("house_rule_id")
);

-- CreateTable
CREATE TABLE "Category" (
    "category_id" TEXT NOT NULL,
    "category_title" TEXT NOT NULL,
    "category_description" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Amenity" (
    "amenity_id" TEXT NOT NULL,
    "amenity_title" TEXT NOT NULL,
    "amenity_description" TEXT NOT NULL,

    CONSTRAINT "Amenity_pkey" PRIMARY KEY ("amenity_id")
);

-- CreateTable
CREATE TABLE "Reservation" (
    "reservation_id" TEXT NOT NULL,
    "booking_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "check_in_date" TIMESTAMP(3) NOT NULL,
    "check_out_date" TIMESTAMP(3) NOT NULL,
    "tax" INTEGER NOT NULL,
    "total_cost" INTEGER NOT NULL,
    "num_of_guests" INTEGER NOT NULL,
    "is_cancelled" BOOLEAN NOT NULL,
    "refund_amount" INTEGER,
    "cancellation_date" TIMESTAMP(3) NOT NULL,
    "guest_id" TEXT NOT NULL,
    "listing_id" TEXT NOT NULL,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("reservation_id")
);

-- CreateTable
CREATE TABLE "_HouseRuleToListing" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CategoryToListing" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AmenityToListing" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ProfilePhoto_user_id_key" ON "ProfilePhoto"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Host_user_id_key" ON "Host"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Guest_user_id_key" ON "Guest"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "EmergencyContact_email_key" ON "EmergencyContact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Address_owner_id_key" ON "Address"("owner_id");

-- CreateIndex
CREATE UNIQUE INDEX "_HouseRuleToListing_AB_unique" ON "_HouseRuleToListing"("A", "B");

-- CreateIndex
CREATE INDEX "_HouseRuleToListing_B_index" ON "_HouseRuleToListing"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToListing_AB_unique" ON "_CategoryToListing"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToListing_B_index" ON "_CategoryToListing"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_AmenityToListing_AB_unique" ON "_AmenityToListing"("A", "B");

-- CreateIndex
CREATE INDEX "_AmenityToListing_B_index" ON "_AmenityToListing"("B");

-- AddForeignKey
ALTER TABLE "ProfilePhoto" ADD CONSTRAINT "ProfilePhoto_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Host" ADD CONSTRAINT "Host_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guest" ADD CONSTRAINT "Guest_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmergencyContact" ADD CONSTRAINT "EmergencyContact_host_id_fkey" FOREIGN KEY ("host_id") REFERENCES "Host"("host_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "host_address" FOREIGN KEY ("owner_id") REFERENCES "Host"("host_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "listing_address" FOREIGN KEY ("owner_id") REFERENCES "Listing"("listing_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_host_id_fkey" FOREIGN KEY ("host_id") REFERENCES "Host"("host_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ListingPhoto" ADD CONSTRAINT "ListingPhoto_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "Listing"("listing_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_guest_id_fkey" FOREIGN KEY ("guest_id") REFERENCES "Guest"("guest_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "Listing"("listing_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HouseRuleToListing" ADD CONSTRAINT "_HouseRuleToListing_A_fkey" FOREIGN KEY ("A") REFERENCES "HouseRule"("house_rule_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_HouseRuleToListing" ADD CONSTRAINT "_HouseRuleToListing_B_fkey" FOREIGN KEY ("B") REFERENCES "Listing"("listing_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToListing" ADD CONSTRAINT "_CategoryToListing_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("category_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToListing" ADD CONSTRAINT "_CategoryToListing_B_fkey" FOREIGN KEY ("B") REFERENCES "Listing"("listing_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AmenityToListing" ADD CONSTRAINT "_AmenityToListing_A_fkey" FOREIGN KEY ("A") REFERENCES "Amenity"("amenity_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AmenityToListing" ADD CONSTRAINT "_AmenityToListing_B_fkey" FOREIGN KEY ("B") REFERENCES "Listing"("listing_id") ON DELETE CASCADE ON UPDATE CASCADE;
