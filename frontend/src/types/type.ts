import {
	TAmenity,
	TCategory,
	THouseRule,
} from '../components/form/Steps/PageFive';

export type TCardProps = {
	listingId: string;
	listingName: string;
	bedroomCount: number;
	bathroomCount: number;
	pricePerNight: number;
	avgRating: number;
	totalRatingCount: number;
	listingImage?: { listingImageName: string }[];
};

export type TListingImage = {
	listingImageId: string;
	imageUrl: string;
	position: number;
	listingId: string;
};
export type TListingImageArray = {
	listingImageArray: TListingImage[];
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
