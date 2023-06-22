import { faker } from '@faker-js/faker';

const generateAddress = () => {
	const unitNumber = faker.location.buildingNumber();
	const streetName = faker.location.streetAddress();
	const addressLine = faker.lorem.lines();
	const city = faker.location.city();
	const postalCode = faker.location.zipCode();
	const state = faker.location.state();
	const country = faker.location.country();

	return {
		unitNumber,
		streetName,
		addressLine,
		city,
		postalCode,
		state,
		country,
	};
};

export default generateAddress;
