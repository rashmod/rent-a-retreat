import { faker, fakerEN_IN } from '@faker-js/faker';

const generateListing = () => {
	const listingName = faker.lorem.sentence({ min: 3, max: 7 });
	const bedroomCount = faker.number.int({ min: 1, max: 15 });
	const bathroomCount = faker.number.int({ min: 1, max: 7 });
	const pricePerNight = faker.number.int({ min: 1000, max: 15000 });
	const cleaningFee = faker.number.int({ min: 150, max: 500 });
	const maxGuest = faker.number.int({ min: 1, max: 10 });
	const totalRatingCount = faker.number.int({ min: 0, max: 40 });
	const avgRating =
		totalRatingCount > 0
			? +faker.number.float({ min: 0, max: 5 }).toFixed(1)
			: 0;
	const latitude = faker.location.latitude();
	const longitude = faker.location.longitude();

	const isRefundable = false;
	const percentRefundable = isRefundable
		? faker.number.float({ min: 0, max: 50 })
		: null;
	const daysBeforeCancellation = isRefundable
		? faker.number.float({ min: 2, max: 10 })
		: null;

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
		percentRefundable,
		daysBeforeCancellation,
	};
};

export default generateListing;
