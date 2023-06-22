import { prisma } from '../db/prisma';
import { amenities } from './generators/amenity';
import { categories } from './generators/category';
import { houseRules } from './generators/houseRule';

export const seedHouseRules = async () => {
	await prisma.houseRule.deleteMany();
	await prisma.houseRule.createMany({
		data: houseRules,
	});
};

export const seedCategories = async () => {
	await prisma.category.deleteMany();
	await prisma.category.createMany({
		data: categories,
	});
};

export const seedAmenities = async () => {
	await prisma.amenity.deleteMany();
	await prisma.amenity.createMany({
		data: amenities,
	});
};
