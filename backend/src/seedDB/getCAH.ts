import { prisma } from '../db/prisma';

export const getCategories = async () => {
	const categories = await prisma.category.findMany({
		select: {
			categoryId: true,
		},
	});

	const arr = [];
	for (let i = 0; i < categories.length; i++) {
		arr.push(categories[i].categoryId);
	}
	return arr;
};

export const getAmenities = async () => {
	const amenities = await prisma.amenity.findMany({
		select: {
			amenityId: true,
		},
	});

	const arr = [];
	for (let i = 0; i < amenities.length; i++) {
		arr.push(amenities[i].amenityId);
	}
	return arr;
};

export const getHouseRules = async () => {
	const houseRules = await prisma.houseRule.findMany({
		select: {
			houseRuleId: true,
		},
	});

	const arr = [];
	for (let i = 0; i < houseRules.length; i++) {
		arr.push(houseRules[i].houseRuleId);
	}
	return arr;
};
