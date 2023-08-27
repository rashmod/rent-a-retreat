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
	email: '',
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
