import { z } from 'zod';
import { getCategoryIds } from '../api/categories';
import { getAmenityIds } from '../api/amenities';
import { getHouseRuleIds } from '../api/houseRules';

export const PageFiveSchema = z.object({
	categories: z
		.array(z.string())
		.min(1, 'You must select at least one category')
		.refine(async (value) => {
			const validIds = await getCategoryIds();
			return value.every((id) => validIds.includes(id));
		}, 'Invalid category selected'),
	amenities: z
		.array(z.string())
		.min(1, 'You must select at least one amenity')
		.refine(async (value) => {
			const validIds = await getAmenityIds();
			return value.every((id) => validIds.includes(id));
		}, 'Invalid amenity selected'),
	houseRules: z
		.array(z.string())
		.min(1, 'You must select at least one house rule')
		.refine(async (value) => {
			const validIds = await getHouseRuleIds();
			return value.every((id) => validIds.includes(id));
		}, 'Invalid house rule selected'),
});

export type TPageFiveSchema = z.infer<typeof PageFiveSchema>;
