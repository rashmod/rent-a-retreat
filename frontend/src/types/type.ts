export interface ICardProps {
	listingId: string;
	listingName: string;
	bedroomCount: number;
	bathroomCount: number;
	pricePerNight: number;
	avgRating: number;
	totalRatingCount: number;
	listingPhoto?: { photoUrl: string }[];
}

export interface IPhoto {
	listingPhotoId: string;
	photoUrl: string;
	position: number;
	listingId: string;
}
export interface IPhotoArray {
	photoArray: IPhoto[];
}

export interface IListingDetail {
	user: { firstName: string; lastName: string };
	bedroomCount: number;
	bathroomCount: number;
	maxGuest: number;
	amenity: {
		amenityId: string;
		amenityTitle: string;
		amenityDescription: string;
	}[];
	category: {
		categoryId: string;
		categoryTitle: string;
		categoryDescription: string;
	}[];
	houseRule: {
		houseRuleId: string;
		ruleTitle: string;
		ruleDescription: string;
	}[];
}

export interface IListingHeading {
	listingName: string;
	avgRating: number;
	totalRatingCount: number;
	address: { city: string; state: string; country: string };
	listingId?: string;
}

export interface IReservationData {
	pricePerNight: number;
	cleaningFee: number;
	isRefundable: boolean;
	percentRefundable: number | null;
	daysBeforeCancellation: number | null;
}
