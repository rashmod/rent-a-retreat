import { faker } from '@faker-js/faker';

const generateReservation = () => {
	const checkInDate = faker.date.future();
	const checkOutDate = faker.date.future();
	const tax = 0;
	const totalCost = 0;
	const numOfGuests = 0;
	const isCancelled = false;
	// const refundAmount = 0;
	// const cancellationDate = 0;

	return {
		checkInDate,
		checkOutDate,
		tax,
		totalCost,
		numOfGuests,
		isCancelled,
	};
};

export default generateReservation;
