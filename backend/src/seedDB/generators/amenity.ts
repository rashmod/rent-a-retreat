import { faker } from '@faker-js/faker';

function getRandomIndex(len: number) {
	return Math.floor(Math.random() * len);
}

const generateAmenity = () => {
	const index = getRandomIndex(amenities.length);
	const amenityTitle = amenities[index].amenityTitle;
	const amenityDescription = amenities[index].amenityDescription;

	return { amenityTitle, amenityDescription };
};

export const amenities = [
	{
		amenityTitle: 'Wheelchair Accessible',
		amenityDescription:
			'The property is designed to accommodate guests with mobility needs and includes accessible features.',
	},
	{
		amenityTitle: 'BBQ Grill',
		amenityDescription:
			'An outdoor grill is provided for guests to enjoy barbecues and outdoor cooking.',
	},
	{
		amenityTitle: 'WiFi',
		amenityDescription:
			'High-speed internet access is available for guests to stay connected during their stay.',
	},
	{
		amenityTitle: 'Air Conditioning',
		amenityDescription:
			'The property is equipped with air conditioning to provide a comfortable indoor environment.',
	},
	{
		amenityTitle: 'Heating',
		amenityDescription:
			'Central heating or individual heating units are available to keep guests warm during colder months.',
	},
	{
		amenityTitle: 'Pool',
		amenityDescription:
			'A swimming pool is available on the property for guests to relax and enjoy a refreshing swim.',
	},
	{
		amenityTitle: 'Hot Tub',
		amenityDescription:
			'A hot tub is provided for guests to unwind and enjoy a soothing soak.',
	},
	{
		amenityTitle: 'Kitchen',
		amenityDescription:
			'A fully equipped kitchen is available for guests to prepare their meals.',
	},
	{
		amenityTitle: 'Parking',
		amenityDescription:
			'On-site or nearby parking facilities are available for guests to park their vehicles.',
	},
	{
		amenityTitle: 'Gym',
		amenityDescription:
			'A fitness center or gym is accessible to guests for their workout routines.',
	},
	{
		amenityTitle: 'Washer',
		amenityDescription:
			'A washing machine is provided for guests to conveniently do their laundry.',
	},
	{
		amenityTitle: 'Dryer',
		amenityDescription:
			'A dryer is available for guests to dry their clothes after doing laundry.',
	},
	{
		amenityTitle: 'Pet-Friendly',
		amenityDescription:
			'Pets are allowed in the property, subject to specific pet policies and additional fees.',
	},
	{
		amenityTitle: 'Smoking Allowed',
		amenityDescription:
			'Smoking is permitted in designated areas or rooms of the property.',
	},
	{
		amenityTitle: 'Fireplace',
		amenityDescription:
			'A fireplace is available in the property, creating a cozy and warm atmosphere.',
	},
	{
		amenityTitle: 'TV',
		amenityDescription:
			"Television with cable/satellite channels is provided for guests' entertainment.",
	},
	{
		amenityTitle: 'Essentials',
		amenityDescription:
			'Basic amenities such as towels, bed sheets, soap, and toilet paper are provided.',
	},
	{
		amenityTitle: 'Iron',
		amenityDescription:
			'An iron and ironing board are available for guests to keep their clothes wrinkle-free.',
	},
	{
		amenityTitle: 'Hair Dryer',
		amenityDescription:
			"A hair dryer is provided in the property for guests' convenience.",
	},
	{
		amenityTitle: 'Work Friendly',
		amenityDescription:
			'The property offers a suitable workspace or desk for guests who need to work during their stay.',
	},
	{
		amenityTitle: 'Elevator',
		amenityDescription:
			'An elevator is available for guests to access different floors of the building.',
	},
	{
		amenityTitle: 'Family/Kid Friendly',
		amenityDescription:
			"The property is suitable for families and includes amenities for children's comfort and safety.",
	},
	{
		amenityTitle: 'Outdoor Space',
		amenityDescription:
			'A designated outdoor area is provided for guests to enjoy the fresh air and outdoor activities.',
	},
	{
		amenityTitle: 'Beachfront',
		amenityDescription:
			'The property is located directly on the beach, offering easy access to the shoreline.',
	},
	{
		amenityTitle: 'Bicycle Rental',
		amenityDescription:
			'Bicycles are available for guests to rent and explore the surroundings.',
	},
	{
		amenityTitle: '24-Hour Check-in',
		amenityDescription:
			'Guests can check in at any time of the day or night with 24-hour check-in facilities.',
	},
	{
		amenityTitle: 'Security Cameras',
		amenityDescription:
			'Security cameras are installed in and around the property for enhanced safety and surveillance.',
	},
	{
		amenityTitle: 'Concierge Service',
		amenityDescription:
			'A concierge service is available to assist guests with various requests and arrangements.',
	},
	{
		amenityTitle: 'Baby Equipment',
		amenityDescription:
			'Baby equipment such as a crib, high chair, or stroller is provided for guests traveling with infants.',
	},
	{
		amenityTitle: 'Fire Pit',
		amenityDescription:
			'An outdoor fire pit is available for guests to gather around and enjoy a cozy fire.',
	},
	{
		amenityTitle: 'Game Room',
		amenityDescription:
			'A dedicated game room with entertainment options like billiards, foosball, or video games is provided.',
	},
	{
		amenityTitle: 'Library',
		amenityDescription:
			'A collection of books and reading materials is available for guests to enjoy during their stay.',
	},
	{
		amenityTitle: 'Tennis Court',
		amenityDescription:
			'A tennis court is available on the property for guests to engage in a friendly match.',
	},
];

export default generateAmenity;
