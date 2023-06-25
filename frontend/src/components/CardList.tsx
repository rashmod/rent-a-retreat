import { useQuery } from '@tanstack/react-query';

import Card from './Card';
import { ICardProps } from '../types/type';
import { getListings } from '../api/listings';

const CardList = () => {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['listings'],
		queryFn: getListings,
	});

	if (isLoading) return <h1>Loading...</h1>;

	if (isError) return <h1>Error</h1>;

	return (
		<div className='w-11/12 mx-auto grid grid-cols-4 gap-7'>
			{data.map((listing: ICardProps) => (
				<Card key={listing.listingId} {...listing} />
			))}
		</div>
	);
};

export default CardList;
