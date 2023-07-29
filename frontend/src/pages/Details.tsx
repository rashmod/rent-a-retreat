import { useQuery } from '@tanstack/react-query';

import ImageContainer from '../components/ImageContainer';
import ReservationContainer from '../components/ReservationContainer';
import ListingDetailsContainer from '../components/ListingDetailsContainer';
import ListingHeadingContainer from '../components/ListingHeadingContainer';
import { getListingDetails } from '../api/listings';
import { useParams } from 'react-router-dom';

const Details = () => {
	const params = useParams();

	const { data, isLoading, isError } = useQuery({
		queryKey: ['listings', params.listingId],
		queryFn: () => {
			if (params.listingId) return getListingDetails(params.listingId);
		},
	});

	if (isLoading) {
		console.log('loading');
		return <h1>Loading...</h1>;
	}

	if (isError) {
		console.log('error');
		return <h1>Error</h1>;
	}

	return (
		<section className='mt-12'>
			<ListingHeadingContainer
				listingName={data.listingName}
				avgRating={data.avgRating}
				totalRatingCount={data.totalRatingCount}
				address={data.address}
				listingId={params.listingId ? params.listingId : undefined}
			/>
			<ImageContainer photoArray={data.listingPhoto} />

			<section className='grid grid-cols-12 gap-5'>
				<ListingDetailsContainer
					user={data.host.user}
					bedroomCount={data.bedroomCount}
					bathroomCount={data.bathroomCount}
					maxGuest={data.maxGuest}
					amenity={data.amenity}
					category={data.category}
					houseRule={data.houseRule}
				/>

				<ReservationContainer
					pricePerNight={data.pricePerNight}
					cleaningFee={data.cleaningFee}
					isRefundable={data.isRefundable}
					percentRefundable={data.percentRefundable}
					daysBeforeCancellation={data.daysBeforeCancellation}
				/>

				{/* <div>
					<div>latitude {data.latitude}</div>
					<div>longitude {data.longitude}</div>
				</div> */}
			</section>
			<section className='flex items-center justify-center mt-10 text-4xl bg-gray-400 rounded-xl h-80'>
				map
			</section>
		</section>
	);
};

export default Details;
