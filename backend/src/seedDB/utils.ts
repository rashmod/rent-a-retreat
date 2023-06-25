import generateAddress from './generators/address';
import generateListing from './generators/listing';
import generateListingPhoto from './generators/listingPhoto';
import { IListing } from './types';

export const flipThreeSidedCoin = (): number => {
	const res = Math.floor(Math.random() * 10);
	return res < 4 ? 1 : res < 8 ? 2 : 3;
};

export const randomNumInRange = (max: number, min = 0) => {
	return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomElements = (array: string[], count: number) => {
	const shuffled = array.slice(); // Create a shallow copy of the original array
	let currentIndex = shuffled.length;
	let temporaryValue, randomIndex;

	// While there are elements to shuffle
	while (currentIndex !== 0) {
		// Pick a remaining element
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// Swap it with the current element
		temporaryValue = shuffled[currentIndex];
		shuffled[currentIndex] = shuffled[randomIndex];
		shuffled[randomIndex] = temporaryValue;
	}

	return shuffled.slice(0, count); // Return the first 'count' elements
};

export const generateArray = (func: Function, num: number) => {
	const arr = [];
	for (let i = 0; i < num; i++) {
		arr.push(func());
	}

	return arr;
};

export const seedListing = (
	categories: string[],
	amenities: string[],
	houseRules: string[]
) => {
	const len = Math.floor(Math.random() * 5);
	const res = [];
	for (let i = 0; i <= len; i++) {
		const listing: IListing = generateListing();
		const address = generateAddress();
		const listingPhotos: { photoUrl: string; position: number }[] =
			generateArray(generateListingPhoto, randomNumInRange(5, 1));
		const categoryArray = getRandomElements(
			categories,
			randomNumInRange(10, 1)
		);
		const amenityArray = getRandomElements(
			amenities,
			randomNumInRange(10, 1)
		);
		const houseRuleArray = getRandomElements(
			houseRules,
			randomNumInRange(10, 1)
		);

		listing.address = { create: address };
		listing.listingPhoto = { create: listingPhotos };
		listing.category = {
			connect: categoryArray.map((categoryId) => ({ categoryId })),
		};
		listing.amenity = {
			connect: amenityArray.map((amenityId) => ({ amenityId })),
		};
		listing.houseRule = {
			connect: houseRuleArray.map((houseRuleId) => ({
				houseRuleId,
			})),
		};

		res.push(listing);
	}

	return res;
};

export const seedCallback = async (func: Function, str: string) => {
	try {
		const res = await func();
		// console.log(res);
		console.log(`successfully seeded ${str}`);
	} catch (error) {
		console.log(error);
		console.log(`failed to seed ${str}`);
	}
};
