import { faker, fakerEN_IN } from '@faker-js/faker';

const relationships = [
	'Brother',
	'Sister',
	'Husband',
	'Wife',
	'Father',
	'Mother',
	'Grandfather',
	'Grandmother',
	'Friend',
	'Girlfriend',
	'Boyfriend',
	'Father-in-law',
	'Mother-in-law',
	'Brother-in-law',
	'Sister-in-law',
	'Uncle',
	'Aunt',
];

const random = (arr: string[]): string => {
	const index = Math.floor(Math.random() * arr.length);
	return arr[index];
};

const generateEmergencyContact = () => {
	const firstName = faker.person.firstName();
	const lastName = faker.person.lastName();
	const email = faker.internet.email();
	const phoneNumber = +fakerEN_IN.phone
		.number()
		.replace(/[^a-zA-Z0-9 ]/g, '')
		.slice(2);
	const relationship = random(relationships);

	return { firstName, lastName, email, phoneNumber, relationship };
};

export default generateEmergencyContact;
