import { Link } from 'react-router-dom';
import { TCardProps } from '../types/type';
import { useState } from 'react';

const Card = ({
	listingId,
	listingName,
	bedroomCount,
	bathroomCount,
	pricePerNight,
	avgRating,
	totalRatingCount,
	listingPhoto,
}: TCardProps) => {
	const [imageIsLoaded, setImageIsLoaded] = useState(false);

	return (
		<Link
			to={`/listing/${listingId}`}
			className='p-3 text-sm font-medium text-black transition duration-300 bg-white rounded-xl hover:-translate-y-0.5 hover:drop-shadow-xl'>
			<div className='relative'>
				{listingPhoto && listingPhoto.length === 0 && (
					<div className='flex items-center justify-center mb-4 bg-black rounded-md aspect-square text-my-primary-500'>
						No Image
					</div>
				)}
				{listingPhoto && listingPhoto.length > 0 && (
					<img
						onLoad={() => setImageIsLoaded(true)}
						className={`${
							imageIsLoaded && 'mb-3'
						} aspect-square object-cover rounded-md`}
						src={listingPhoto[0].photoUrl}
						alt=''
					/>
				)}
				{listingPhoto && listingPhoto.length > 0 && !imageIsLoaded && (
					<div className='flex items-center justify-center mb-4 bg-black aspect-square rounded-xl text-my-primary-500'>
						Loading...
					</div>
				)}
				<div className='absolute px-2 py-1 text-xs text-white bg-black bg-opacity-50 border border-gray-200 border-none rounded-full top-3 left-3 backdrop-filter backdrop-blur-lg'>
					city, country
				</div>
			</div>
			<div className='flex items-center justify-between mb-1'>
				<div className='text-lg truncate'>{listingName}</div>
				<div className='whitespace-nowrap'>
					<span className='text-lg text-orange-400'>&#9733;</span>{' '}
					{avgRating.toFixed(2)} ({totalRatingCount})
				</div>
			</div>
			<div className='mb-0.5 flex justify-between'>
				<div>{pricePerNight} night</div>
				<div>{pricePerNight} total</div>
			</div>
			<div className='flex justify-between'>
				<div>bedroom: {bedroomCount}</div>
				<div>bathroom: {bathroomCount}</div>
			</div>
			<div className='flex justify-between mt-4'>
				{/* todo colors to be decided */}
				<button className='rounded-lg border-2 border-my-secondary-I-500 px-3 py-1.5 transition hover:bg-my-secondary-I-500 hover:text-white'>
					Update
				</button>
				<button className='rounded-lg border-2 border-red-500 px-3 py-1.5 hover:bg-red-500 hover:text-white transition'>
					Delete
				</button>
			</div>
		</Link>
	);
};

export default Card;
