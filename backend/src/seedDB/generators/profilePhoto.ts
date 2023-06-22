import { faker } from '@faker-js/faker';

const generateProfilePhoto = () => {
	const imgUrl = faker.image.avatarGitHub();

	return { imgUrl };
};

export default generateProfilePhoto;
