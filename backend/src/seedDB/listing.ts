import { faker, fakerEN_IN } from '@faker-js/faker';

const generateListing = () => {
	const listingName = faker.lorem.sentence({ min: 3, max: 7 });
	const bedroomCount = 0;
	const bathroomCount = 0;
	const pricePerNight = 0;
	const cleaningFee = 0;
	const maxGuest = 0;
	const avgRating = 0;
	const totalRatingCount = 0;
	const latitude = faker.location.latitude();
	const longitude = faker.location.longitude();

	const isRefundable = false;
	const percentRefundable = '';
	const daysBeforeCancellation = '';

	return {
		listingName,
		bedroomCount,
		bathroomCount,
		pricePerNight,
		cleaningFee,
		maxGuest,
		avgRating,
		totalRatingCount,
		latitude,
		longitude,
		isRefundable,
	};
};

export default generateListing;
