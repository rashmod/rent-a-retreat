import { Link } from 'react-router-dom';

interface ICardProps {
	listingId: string;
	listingName: string;
	bedroomCount: number;
	bathroomCount: number;
	pricePerNight: number;
	avgRating: number;
	totalRatingCount: number;
	listingPhoto?: [{ photoUrl: string }];
}

const Card = ({
	listingId,
	listingName,
	bedroomCount,
	bathroomCount,
	pricePerNight,
	avgRating,
	totalRatingCount,
	listingPhoto,
}: ICardProps) => {
	return (
		<Link
			to={`/listing/${listingId}`}
			className='bg-white p-4 rounded-3xl text-sm font-medium block'>
			<div className='relative'>
				{listingPhoto && listingPhoto.length > 0 && (
					<img
						className='mb-4 aspect-square object-cover rounded-xl'
						src={listingPhoto[0].photoUrl}
						alt=''
					/>
				)}
				<div className='text-xs text-white top-3 left-3 py-1 px-3 rounded-full absolute bg-black backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-200 border-none'>
					city, country
				</div>
			</div>
			<div className='flex justify-between mb-1 items-center'>
				<div className='font-bold truncate text-base'>
					{listingName}
				</div>
				<div className='whitespace-nowrap'>
					<span className='text-lg text-orange-400'>&#9733;</span>{' '}
					{avgRating + 4.2} ({totalRatingCount + 10})
				</div>
			</div>
			<div className='mb-0.5 flex justify-between'>
				<div>{pricePerNight + 1420} night</div>
				<div>{pricePerNight + 1420 * 5} total</div>
			</div>
			<div className='flex justify-between'>
				<div>bedroom: {bedroomCount}</div>
				<div>bathroom: {bathroomCount}</div>
			</div>
		</Link>
	);
};

export default Card;
