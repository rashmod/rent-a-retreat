import { TFormData } from '../../../../store/store';
import { FileWithUrl } from '../../../../schema/PageSixSchema';
import { TAmenity, TCategory, THouseRule } from '../PageFive';

const isFileArray = (item: any[]): item is FileWithUrl[] => {
	if (item.length === 0) return true;
	return item[0].image !== undefined;
};
const isCategoryArray = (item: any[]): item is TCategory[] => {
	if (item.length === 0) return true;
	return item[0].categoryId !== undefined;
};
const isAmenityArray = (item: any[]): item is TAmenity[] => {
	if (item.length === 0) return true;
	return item[0].amenityId !== undefined;
};
const isHouseRuleArray = (item: any[]): item is THouseRule[] => {
	if (item.length === 0) return true;
	return item[0].houseRuleId !== undefined;
};

const createValidFormData = (formData: TFormData): FormData => {
	const formDataToSend = new FormData();
	for (const key in formData) {
		const formDataHasKeyProperty = Object.prototype.hasOwnProperty.call(
			formData,
			key
		);

		if (!formDataHasKeyProperty) continue;

		const value = formData[key as keyof TFormData];
		if (value === undefined || value === null) continue;

		if (!Array.isArray(value)) {
			formDataToSend.append(key, value as string);
			continue;
		}

		if (isFileArray(value)) {
			formData.images.forEach((item) =>
				formDataToSend.append('images', item.image)
			);
			continue;
		}

		if (isCategoryArray(value)) {
			formData.categories.forEach((item) => {
				formDataToSend.append('categoryIds', item.categoryId);
			});
			continue;
		}

		if (isAmenityArray(value)) {
			formData.amenities.forEach((item) =>
				formDataToSend.append('amenityIds', item.amenityId)
			);
			continue;
		}

		if (isHouseRuleArray(value)) {
			formData.houseRules.forEach((item) =>
				formDataToSend.append('houseRuleIds', item.houseRuleId)
			);
			continue;
		}
	}

	return formDataToSend;
};

export default createValidFormData;
