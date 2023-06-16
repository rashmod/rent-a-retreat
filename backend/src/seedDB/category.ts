import { faker } from '@faker-js/faker';

const generateCategory = () => {
	const categoryTitle = faker.commerce.productAdjective();
	const categoryDescription = faker.commerce.productDescription();

	return { categoryTitle, categoryDescription };
};

export default generateCategory;
