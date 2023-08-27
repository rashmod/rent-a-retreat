import { z } from 'zod';
import { getCategories } from '../api/categories';
import { getAmenities } from '../api/amenities';
import { getHouseRules } from '../api/houseRules';

export const PageFiveSchema = z.object({
	categories: z
		.array(
			z.object({
				categoryId: z.string(),
				categoryTitle: z.string(),
				categoryDescription: z.string(),
			})
		)
		.min(1, 'You must select at least one category')
		.refine(async (value) => {
			const validCategories = await getCategories();
			return value.every((item) =>
				validCategories.some(
					(obj) => obj.categoryId === item.categoryId
				)
			);
		}, 'Invalid category selected'),
	amenities: z
		.array(
			z.object({
				amenityId: z.string(),
				amenityTitle: z.string(),
				amenityDescription: z.string(),
			})
		)
		.min(1, 'You must select at least one amenity')
		.refine(async (value) => {
			const validAmenities = await getAmenities();
			return value.every((item) =>
				validAmenities.some((obj) => obj.amenityId === item.amenityId)
			);
		}, 'Invalid amenity selected'),
	houseRules: z
		.array(
			z.object({
				houseRuleId: z.string(),
				ruleTitle: z.string(),
				ruleDescription: z.string(),
			})
		)
		.min(1, 'You must select at least one house rule')
		.refine(async (value) => {
			const validHouseRules = await getHouseRules();
			return value.every((item) =>
				validHouseRules.some(
					(obj) => obj.houseRuleId === item.houseRuleId
				)
			);
		}, 'Invalid house rule selected'),
});

export type TPageFiveSchema = z.infer<typeof PageFiveSchema>;
