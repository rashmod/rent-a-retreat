import { faker } from '@faker-js/faker';

const generateListingImage = () => {
	const listingImageName = faker.image.urlPicsumPhotos({
		height: 480,
		width: 640,
	});
	const position = 1;

	return { listingImageName, position };
};

export default generateListingImage;
