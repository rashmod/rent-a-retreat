export interface IAddress {
	unitNumber: string;
	streetName: string;
	addressLine: string;
	city: string;
	postalCode: string;
	state: string;
	country: string;
}

export interface IEmergencyContact {
	email: string;
	firstName: string;
	lastName: string;
	phoneNumber: number;
	relationship: string;
}

export interface IListingPhoto {
	create: { photoUrl: string; position: number }[];
}

export interface ICategory {
	connect: { categoryId: string }[];
}
export interface IAmenity {
	connect: { amenityId: string }[];
}
export interface IHouseRule {
	connect: { houseRuleId: string }[];
}

export interface IListing {
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
	address?: { create: IAddress };
	listingPhoto?: IListingPhoto;
	category?: ICategory;
	amenity?: IAmenity;
	houseRule?: IHouseRule;
}

export interface IUser {
	firstName: string;
	lastName: string;
	gender: string;
	email: string;
	phoneNumber: number;
	dateOfBirth: Date;
	host?: { create: IHost };
	guest?: { create: IGuest };
	profilePhoto?: { create: { imgUrl: string } };
}

export interface IHost {
	avgRating: number;
	totalRatingCount: number;
	listing: {
		create: IListing[];
	};
	address: { create: IAddress };
	emergencyContact: { create: IEmergencyContact[] };
}

export interface IGuest {
	avgRating: number;
	totalRatingCount: number;
}
