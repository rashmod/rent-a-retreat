import ImageContainer from '../components/ImageContainer';
import ReservationContainer from '../components/ReservationContainer';
import ListingDetailsContainer from '../components/ListingDetailsContainer';
import ListingHeadingContainer from '../components/ListingHeadingContainer';

const details = {
	listingId: 'bc5631d7-c8f6-4c88-bbee-f90d856004ca',
	listingName: 'Aut sed reprehenderit.',
	bedroomCount: 0,
	bathroomCount: 0,
	pricePerNight: 0,
	cleaningFee: 0,
	maxGuest: 0,
	avgRating: 0,
	totalRatingCount: 0,
	isRefundable: false,
	percentRefundable: null,
	daysBeforeCancellation: null,
	latitude: '-82.5283',
	longitude: '-71.9473',
	hostId: '0f5f7eed-c342-4e91-b284-d31583727988',
	address: {
		addressId: 'afaa4109-c715-4dc0-bd41-0cdc375601a0',
		unitNumber: '437',
		streetName: '4745 Lonzo Lane',
		addressLine:
			'Iusto tenetur molestias debitis doloribus labore quaerat optio ab.\nEnim corrupti hic sit laborum.\nEligendi accusantium nobis dolorem rem impedit.\nReprehenderit iure praesentium.',
		city: 'Earnestcester',
		postalCode: '10893-7361',
		state: 'Washington',
		country: 'Saint Lucia',
		hostId: null,
		listingId: '1f57e980-bc1a-4737-a354-39a5c7eac960',
	},
	amenity: [
		{
			amenityId: '9c84b7f5-3b79-4319-859c-062b8bab7a2a',
			amenityTitle: '24/7',
			amenityDescription: 'streamline cross-media content',
		},
	],
	category: [
		{
			categoryId: '84011837-247a-4f2b-aa50-d074727ecf35',
			categoryTitle: 'Intelligent',
			categoryDescription:
				'Carbonite web goalkeeper gloves are ergonomically designed to give easy fit',
		},
	],
	host: {
		user: {
			firstName: 'Wilber',
			lastName: 'Ebert',
		},
	},
	houseRule: [
		{
			houseRuleId: 'a66b5e2e-6221-477b-857f-c4fe30cc3a94',
			ruleTitle: 'Seamless',
			ruleDescription: 'attitude-oriented',
		},
	],
	listingPhoto: [
		{
			listingPhotoId: 'e48b5ee5-81c5-42ac-beb2-f92bf21917de',
			photoUrl:
				'https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200',
			position: 1,
			listingId: 'bc5631d7-c8f6-4c88-bbee-f90d856004ca',
		},
	],
	reservation: [
		{
			reservationId: '5b2fcff9-67c4-48a6-a2be-d9d1eddc55e8',
			bookingDate: '2023-06-18T14:18:33.260Z',
			checkInDate: '2024-05-22T03:33:44.531Z',
			checkOutDate: '2024-05-08T16:04:35.373Z',
			tax: 0,
			totalCost: 0,
			numOfGuests: 0,
			isCancelled: false,
			refundAmount: null,
			cancellationDate: null,
			guestId: '7132683f-2474-4913-89b3-9d3c1fbc0d2c',
			listingId: '1f57e980-bc1a-4737-a354-39a5c7eac960',
		},
	],
};

const photoArray = new Array(5).fill(details.listingPhoto[0]);

const Details = () => {
	return (
		<section className='w-11/12 pb-10'>
			<ListingHeadingContainer
				listingName={details.listingName}
				avgRating={details.avgRating}
				totalRatingCount={details.totalRatingCount}
				address={details.address}
			/>
			<ImageContainer photoArray={photoArray} />

			<section className='grid grid-cols-6 gap-5 mt-10'>
				<ListingDetailsContainer
					user={details.host.user}
					bedroomCount={details.bedroomCount}
					bathroomCount={details.bathroomCount}
					maxGuest={details.maxGuest}
					amenity={details.amenity}
					category={details.category}
					houseRule={details.houseRule}
				/>

				<ReservationContainer
					pricePerNight={details.pricePerNight}
					cleaningFee={details.cleaningFee}
					isRefundable={details.isRefundable}
					percentRefundable={details.percentRefundable}
					daysBeforeCancellation={details.daysBeforeCancellation}
				/>

				{/* <div>
					<div>latitude {details.latitude}</div>
					<div>longitude {details.longitude}</div>
				</div> */}
			</section>
		</section>
	);
};

export default Details;
