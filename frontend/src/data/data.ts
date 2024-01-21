// add in initial data
// add in page input list
// add in page component

// frontend\src\pages\NewAddListing.tsx
export const stepTitles = [
	'Basic Details',
	'Refundable',
	'Address',
	'Map',
	'Misc.',
	'Images',
	'Confirm',
];

type TEmptyOrNumber = '' | number;
const emptyString: TEmptyOrNumber = '';
// frontend\src\store\store.tsx
export const STORE_INITIAL_DATA = {
	listingName: '',
	bedroom: emptyString,
	bathroom: emptyString,
	pricePerNight: emptyString,
	cleaningFee: emptyString,
	maxGuest: emptyString,
	isRefundable: false,
	percentRefundable: undefined as TEmptyOrNumber | undefined,
	daysBeforeCancellation: undefined as TEmptyOrNumber | undefined,
	unitNumber: '',
	streetName: '',
	addressLine: '',
	city: '',
	postalCode: '',
	state: '',
	country: '',
	longitude: emptyString,
	latitude: emptyString,
	categories: [],
	amenities: [],
	houseRules: [],
	images: [],
};

// frontend\src\components\form\Steps\PageOne.tsx
export const PageOneInputList = [
	{
		label: 'Listing Name',
		placeholder: 'Farm stay in Toscana',
		name: 'listingName',
	},
	{
		label: 'Bedroom',
		placeholder: '4',
		name: 'bedroom',
	},
	{
		label: 'Bathroom',
		placeholder: '2',
		name: 'bathroom',
	},
	{
		label: 'Price per Night',
		placeholder: '250',
		name: 'pricePerNight',
	},
	{
		label: 'Cleaning Fee',
		placeholder: '130',
		name: 'cleaningFee',
	},
	{
		label: 'Max Guests',
		placeholder: '5',
		name: 'maxGuest',
	},
];

// frontend\src\components\form\Steps\PageTwo.tsx
export const PageTwoInputList = [
	{
		label: 'Is Refundable?',
		placeholder: '',
		name: 'isRefundable',
	},
	{
		label: 'Percent refundable',
		placeholder: '70',
		name: 'percentRefundable',
	},
	{
		label: 'Days before cancellation',
		placeholder: '5',
		name: 'daysBeforeCancellation',
	},
];

// frontend\src\components\form\Steps\PageThree.tsx
export const PageThreeInputList = [
	{
		label: 'Unit Number',
		placeholder: 'Room 401',
		name: 'unitNumber',
	},
	{
		label: 'Street Name',
		placeholder: '5th Avenue',
		name: 'streetName',
	},
	{
		label: 'Address Line',
		placeholder: '322 Deckow Corners',
		name: 'addressLine',
	},
	{
		label: 'City',
		placeholder: 'Carissaton',
		name: 'city',
	},
	{
		label: 'Postal Code',
		placeholder: '695284',
		name: 'postalCode',
	},
	{
		label: 'State',
		placeholder: 'North Carolina',
		name: 'state',
	},
	{
		label: 'Country',
		placeholder: 'Belize',
		name: 'country',
	},
];

// frontend\src\components\form\Steps\PageFour.tsx
export const PageFourInputList = [
	{
		label: 'Longitude',
		placeholder: '0',
		name: 'longitude',
	},
	{
		label: 'Latitude',
		placeholder: '0',
		name: 'latitude',
	},
];

export const PageInputList = [
	PageOneInputList,
	PageTwoInputList,
	PageThreeInputList,
	PageFourInputList,
];

export const ConfirmPageList = stepTitles
	.map((item, index) => {
		if (index === stepTitles.length - 1) return;
		return { title: item, children: PageInputList[index] || [] };
	})
	.filter((item) => item);

const exampleResponse = {
	listingId: 'd120d4c8-3c5d-45eb-aa2c-4379e1d3522c',
	listingName: 'Enim laudantium consequatur optio odio consequuntur.',
	bedroomCount: 2,
	bathroomCount: 7,
	pricePerNight: 4874,
	cleaningFee: 305,
	maxGuest: 10,
	avgRating: 0.6,
	totalRatingCount: 24,
	isRefundable: false,
	percentRefundable: null,
	daysBeforeCancellation: null,
	latitude: '46.8553',
	longitude: '-74.2427',
	createdAt: '2023-09-19T09:09:09.676Z',
	updatedAt: '2023-09-19T09:09:09.676Z',
	hostId: 'b87bed28-89c8-4f3c-b017-e48bd60000ea',
	category: [
		{
			categoryId: '7dbff267-bed5-481f-920f-d54224c8345d',
			categoryTitle: 'Barns',
			categoryDescription:
				'Rustic and charming barns for a unique and countryside experience.',
		},
	],
	amenity: [
		{
			amenityId: 'db5f9c06-3399-48a3-b7ec-58e3751e26e9',
			amenityTitle: 'Wheelchair Accessible',
			amenityDescription:
				'The property is designed to accommodate guests with mobility needs and includes accessible features.',
		},
		{
			amenityId: 'f32a1139-4c9d-4c7d-816f-3d921e66f2a2',
			amenityTitle: 'BBQ Grill',
			amenityDescription:
				'An outdoor grill is provided for guests to enjoy barbecues and outdoor cooking.',
		},
	],
	houseRule: [
		{
			houseRuleId: '44f86417-f06a-4d84-9b61-eb4a6bc20257',
			ruleTitle: 'No Smoking',
			ruleDescription:
				'Smoking is strictly prohibited inside the property. Guests are requested to use designated outdoor areas for smoking purposes.',
		},
		{
			houseRuleId: '730d0c17-9ac5-4696-ae11-b057c48db119',
			ruleTitle: 'No Parties or Events',
			ruleDescription:
				'Parties, gatherings, and events are not allowed on the premises without prior permission from the host. The property is intended for quiet and peaceful stays.',
		},
	],
	listingPhoto: [
		{
			listingPhotoId: '1d573358-a309-424d-bcef-85b2b29c5417',
			imageUrl: 'asdf',
			position: 1,
			listingId: 'd120d4c8-3c5d-45eb-aa2c-4379e1d3522c',
		},
		{
			listingPhotoId: '421bc1eb-c8ca-4633-a866-a6c452340b80',
			imageUrl: 'qwer',
			position: 2,
			listingId: 'd120d4c8-3c5d-45eb-aa2c-4379e1d3522c',
		},
	],
};
