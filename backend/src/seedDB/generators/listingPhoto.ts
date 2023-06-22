import { faker } from '@faker-js/faker';

const generateListingPhoto = () => {
	const photoUrl = faker.image.urlPicsumPhotos({ height: 480, width: 640 });
	const position = 1;

	return { photoUrl, position };
};

export default generateListingPhoto;
