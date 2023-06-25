import { Link } from 'react-router-dom';
import { ICardProps } from '../types/type';
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
}: ICardProps) => {
	const [imageIsLoaded, setImageIsLoaded] = useState(false);

	return (
		<Link
			to={`/listing/${listingId}`}
			className='bg-white p-4 rounded-3xl text-sm font-medium block'>
			<div className='relative'>
				{listingPhoto && listingPhoto.length === 0 && (
					<div className='mb-4 aspect-square rounded-xl bg-black text-my-primary flex justify-center items-center'>
						No Image
					</div>
				)}
				{listingPhoto && listingPhoto.length > 0 && (
					<img
						onLoad={() => setImageIsLoaded(true)}
						className={`${
							imageIsLoaded && 'mb-4'
						} aspect-square object-cover rounded-xl`}
						src={listingPhoto[0].photoUrl}
						alt=''
					/>
				)}
				{listingPhoto && listingPhoto.length > 0 && !imageIsLoaded && (
					<div className='mb-4 aspect-square rounded-xl bg-black text-my-primary flex justify-center items-center'>
						Loading...
					</div>
				)}
				<div className='text-xs text-white top-3 left-3 py-1 px-3 rounded-full absolute bg-black backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-200 border-none'>
					city, country
				</div>
			</div>
			<div className='flex justify-between mb-1 items-center'>
				<div className='font-bold truncate text-base'>
					{listingName}
				</div>
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
		</Link>
	);
};

export default Card;
