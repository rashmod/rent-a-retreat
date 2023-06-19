import Card from './Card';
const obj = {
	listingId: 'bc5631d7-c8f6-4c88-bbee-f90d856004ca',
	listingName: 'Aut sed reprehenderit.',
	bedroomCount: 0,
	bathroomCount: 0,
	pricePerNight: 0,
	avgRating: 0,
	totalRatingCount: 0,
	listingPhoto: [
		{
			photoUrl:
				'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200',
		},
	],
};

const arr = new Array(10).fill(obj);

const CardList = () => {
	return (
		<div className='w-11/12 mx-auto grid grid-cols-4 gap-7'>
			{arr.map((listing) => (
				<Card key={listing.listingId} {...listing} />
			))}
		</div>
	);
};

export default CardList;
