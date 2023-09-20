import { faker } from '@faker-js/faker';

const generateProfileImage = () => {
	const profileImageName = faker.image.avatarGitHub();

	return { profileImageName };
};

export default generateProfileImage;
