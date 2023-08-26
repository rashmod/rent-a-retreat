export type TCardProps = {
	listingId: string;
	listingName: string;
	bedroomCount: number;
	bathroomCount: number;
	pricePerNight: number;
	avgRating: number;
	totalRatingCount: number;
	listingPhoto?: { photoUrl: string }[];
};

export type TPhoto = {
	listingPhotoId: string;
	photoUrl: string;
	position: number;
	listingId: string;
};
export type TPhotoArray = {
	photoArray: TPhoto[];
};

export type TListingDetail = {
	user: { firstName: string; lastName: string };
	bedroomCount: number;
	bathroomCount: number;
	maxGuest: number;
	amenity: TAmenity[];
	category: TCategory[];
	houseRule: THouseRule[];
};

export type TAmenity = {
	amenityId: string;
	amenityTitle: string;
	amenityDescription: string;
};

export type TCategory = {
	categoryId: string;
	categoryTitle: string;
	categoryDescription: string;
};

export type THouseRule = {
	houseRuleId: string;
	ruleTitle: string;
	ruleDescription: string;
};

export type TModalValues = {
	title: TModalTitle;
	// content: IAmenity[] | ICategory[] | IHouseRule[]
	content: { id: string; title: string; description: string }[];
};

export type TModalTitle = '' | 'Amenities' | 'Categories' | 'House Rules';

export type TListingHeading = {
	listingName: string;
	avgRating: number;
	totalRatingCount: number;
	address: { city: string; state: string; country: string };
	listingId?: string;
};

export type TReservationData = {
	pricePerNight: number;
	cleaningFee: number;
	isRefundable: boolean;
	percentRefundable: number | null;
	daysBeforeCancellation: number | null;
};
