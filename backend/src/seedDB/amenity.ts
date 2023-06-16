import { faker } from '@faker-js/faker';

const generateAmenity = () => {
	const amenityTitle = faker.company.buzzAdjective();
	const amenityDescription = faker.company.buzzPhrase();

	return { amenityTitle, amenityDescription };
};

export default generateAmenity;
