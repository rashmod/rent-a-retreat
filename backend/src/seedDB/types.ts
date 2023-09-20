export type TAddress = {
	unitNumber: string;
	streetName: string;
	addressLine: string;
	city: string;
	postalCode: string;
	state: string;
	country: string;
};

export type TEmergencyContact = {
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: number;
	relationship: string;
};

export type TListingImage = {
	create: { listingImageName: string; position: number }[];
};

export type TCategory = {
	connect: { categoryId: string }[];
};
export type TAmenity = {
	connect: { amenityId: string }[];
};
export type THouseRule = {
	connect: { houseRuleId: string }[];
};

export type TListing = {
	listingName: string;
	bedroomCount: number;
	bathroomCount: number;
	pricePerNight: number;
	cleaningFee: number;
	maxGuest: number;
	avgRating: number;
	totalRatingCount: number;
	latitude: number;
	longitude: number;
	isRefundable: boolean;
	percentRefundable: number | null;
	daysBeforeCancellation: number | null;
	address?: { create: TAddress };
	listingImage?: TListingImage;
	category?: TCategory;
	amenity?: TAmenity;
	houseRule?: THouseRule;
};

export type TUser = {
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
	password: string;
	phoneNumber: number;
	dateOfBirth: Date;
	host?: { create: THost };
	guest?: { create: TGuest };
	profileImage?: { create: { profileImageName: string } };
};

export type THost = {
	avgRating: number;
	totalRatingCount: number;
	listing: {
		create: TListing[];
	};
	address: { create: TAddress };
	emergencyContact: { create: TEmergencyContact[] };
};

export type TGuest = {
	avgRating: number;
	totalRatingCount: number;
};
