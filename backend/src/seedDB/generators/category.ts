import { faker } from '@faker-js/faker';

function getRandomIndex(len: number) {
	return Math.floor(Math.random() * len);
}

const generateCategory = () => {
	const index = getRandomIndex(categories.length);
	const categoryTitle = categories[index].categoryTitle;
	const categoryDescription = categories[index].categoryDescription;

	return { categoryTitle, categoryDescription };
};

export const categories = [
	{
		categoryTitle: 'Barns',
		categoryDescription:
			'Rustic and charming barns for a unique and countryside experience.',
	},
	{
		categoryTitle: 'Beach',
		categoryDescription:
			'Properties located near or with easy access to beautiful beaches and coastal areas.',
	},
	{
		categoryTitle: 'Beachfront',
		categoryDescription:
			'Properties situated right on the beach, offering stunning ocean views and immediate beach access.',
	},
	{
		categoryTitle: 'Cabin',
		categoryDescription:
			'Cozy cabins nestled in scenic locations, perfect for a peaceful getaway in nature.',
	},
	{
		categoryTitle: 'Chalet',
		categoryDescription:
			'Mountain retreats with a cozy and alpine charm, ideal for winter sports or nature exploration.',
	},
	{
		categoryTitle: 'City Center',
		categoryDescription:
			'Properties located in the heart of the city, offering easy access to attractions, dining, and entertainment.',
	},
	{
		categoryTitle: 'Farmstay',
		categoryDescription:
			'Properties on working farms, allowing guests to experience farm life and enjoy fresh produce.',
	},
	{
		categoryTitle: 'Lakefront',
		categoryDescription:
			'Properties situated right on the shores of a picturesque lake, providing scenic views and water activities.',
	},
	{
		categoryTitle: 'Treehouse',
		categoryDescription:
			'Unique accommodations built in trees, offering a whimsical and nature-centric experience.',
	},
	{
		categoryTitle: 'Villa',
		categoryDescription:
			'Luxurious and spacious residences with upscale amenities and often featuring private pools or gardens.',
	},
	{
		categoryTitle: 'Historic',
		categoryDescription:
			'Properties with significant historical value, providing a glimpse into the past and architectural charm.',
	},
	{
		categoryTitle: 'Mountain',
		categoryDescription:
			'Getaways located in the mountains, perfect for outdoor enthusiasts and stunning panoramic views.',
	},
	{
		categoryTitle: 'Rural',
		categoryDescription:
			'Properties in peaceful rural areas, surrounded by nature and offering a tranquil escape from the city.',
	},
	{
		categoryTitle: 'Modern',
		categoryDescription:
			'Contemporary and stylish properties with sleek designs, cutting-edge amenities, and a modern aesthetic.',
	},
	{
		categoryTitle: 'Luxury',
		categoryDescription:
			'Opulent and extravagant accommodations, featuring high-end amenities, elegant decor, and exceptional service.',
	},
	{
		categoryTitle: 'Pet-Friendly',
		categoryDescription:
			'Properties that warmly welcome furry friends, providing pet-friendly amenities and nearby pet-friendly attractions.',
	},
	{
		categoryTitle: 'Ski-In/Ski-Out',
		categoryDescription:
			'Properties conveniently located on or near ski slopes, offering easy access to winter sports activities.',
	},
	{
		categoryTitle: 'Waterfront',
		categoryDescription:
			'Properties situated along rivers, canals, or other bodies of water, providing a serene and scenic setting.',
	},
	{
		categoryTitle: 'Treehouses',
		categoryDescription:
			'Enchanting accommodations built high in the trees, providing a unique and whimsical experience.',
	},
	{
		categoryTitle: 'Tiny Houses',
		categoryDescription:
			'Compact and cozy dwellings with clever designs, perfect for those seeking a minimalist lifestyle.',
	},
	{
		categoryTitle: 'Glamping',
		categoryDescription:
			'Luxury camping experiences, combining the joys of nature with the comforts of upscale accommodations.',
	},
	{
		categoryTitle: 'Castle',
		categoryDescription:
			'Grand and majestic castles for a regal and unforgettable stay, immersing guests in history and elegance.',
	},
	{
		categoryTitle: 'Island',
		categoryDescription:
			'Private islands or properties located on secluded islands, providing an exclusive and idyllic retreat.',
	},
	{
		categoryTitle: 'Eco-Friendly',
		categoryDescription:
			'Sustainable accommodations designed with eco-friendly practices, promoting responsible travel.',
	},
	{
		categoryTitle: 'Tent',
		categoryDescription:
			'Traditional camping experiences with comfortable tents, allowing guests to reconnect with nature.',
	},
	{
		categoryTitle: 'Unique',
		categoryDescription:
			'One-of-a-kind accommodations with extraordinary features or unconventional designs.',
	},
	{
		categoryTitle: 'Historical Landmark',
		categoryDescription:
			'Properties recognized as historical landmarks, preserving cultural heritage and offering a glimpse into the past.',
	},
];

export default generateCategory;
