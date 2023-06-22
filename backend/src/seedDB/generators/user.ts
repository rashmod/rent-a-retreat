import { faker, fakerEN_IN } from '@faker-js/faker';

const generateBirthDate = (): string => {
	const date = faker.date.birthdate();
	const year = date.getFullYear();
	let month: number | string = date.getMonth() + 1;
	let day: number | string = date.getDate();

	if (day < 10) {
		day = '0' + day;
	}
	if (month < 10) {
		month = '0' + month;
	}

	return `${year}-${month}-${day}`;
};

const generateUser = () => {
	const firstName = faker.person.firstName();
	const lastName = faker.person.lastName();
	const gender = faker.person.gender();
	const email = faker.internet.email();
	const phoneNumber = +fakerEN_IN.phone
		.number()
		.replace(/[^a-zA-Z0-9 ]/g, '')
		.slice(2);
	const dateOfBirth = faker.date.birthdate();

	return { firstName, lastName, gender, email, phoneNumber, dateOfBirth };
};

export const generateHost = () => {
	const avgRating = 0;
	const totalRatingCount = 0;

	return { avgRating, totalRatingCount };
};

export const generateGuest = () => {
	const avgRating = 0;
	const totalRatingCount = 0;

	return { avgRating, totalRatingCount };
};

export default generateUser;
