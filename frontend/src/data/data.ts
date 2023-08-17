// frontend\src\pages\NewAddListing.tsx
// const stepTitles = [
// 	'Basic Details',
// 	'Refundable',
// 	'Address',
// 	'Map',
// 	'Misc.',
// 	'Images',
// 	'Confirm',
// ];
export const stepTitles = ['Page One', 'Page Two', 'Page Three', 'Confirm'];

// frontend\src\store\store.tsx
export const STORE_INITIAL_DATA = {
	firstname: '',
	username: '',
	lastname: '',
	email: '',
};

// frontend\src\components\form\Steps\PageTwo.tsx
export const PageTwoInputList = [
	{
		label: 'Last Name',
		placeholder: 'Doe',
		name: 'lastname',
	},
];

// frontend\src\components\form\Steps\PageThree.tsx
export const PageThreeInputList = [
	{
		label: 'Email',
		placeholder: 'abc@xyz.com',
		name: 'email',
	},
];

// frontend\src\components\form\Steps\PageOne.tsx
export const PageOneInputList = [
	{
		label: 'First Name',
		placeholder: 'John',
		name: 'firstname',
	},
	{
		label: 'User Name',
		placeholder: 'spittingbrit456',
		name: 'username',
	},
];

export const PageInputList = [
	PageOneInputList,
	PageTwoInputList,
	PageThreeInputList,
];

// frontend\src\components\form\Steps\ConfirmPage.tsx
// export const ConfirmPageList = [
// 	{
// 		title: 'Page One',
// 		children: [
// 			{ label: 'First Name', name: 'firstname' },
// 			{ label: 'User Name', name: 'username' },
// 		],
// 	},
// 	{
// 		title: 'Page Two',
// 		children: [{ label: 'Last Name', name: 'lastname' }],
// 	},
// 	{
// 		title: 'Page Three',
// 		children: [{ label: 'Email', name: 'email' }],
// 	},
// ];

export const ConfirmPageList = stepTitles
	.map((item, index) => {
		if (index === stepTitles.length - 1) return;
		return { title: item, children: PageInputList[index] };
	})
	.filter((item) => item);
