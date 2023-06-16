import { faker } from '@faker-js/faker';

const generateProfilePhoto = () => {
	const imgUrl = faker.image.urlPicsumPhotos({ height: 480, width: 640 });

	return { imgUrl };
};

export default generateProfilePhoto;
