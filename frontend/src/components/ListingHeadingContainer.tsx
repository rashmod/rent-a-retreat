import { Link } from 'react-router-dom';
import { TListingHeading } from '../types/type';
import { Edit, Trash2 } from 'lucide-react';

const ListingHeadingContainer = ({
	listingName,
	avgRating,
	totalRatingCount,
	address,
	listingId,
}: TListingHeading) => {
	return (
		<div className='mb-4'>
			<div className='flex items-center justify-between font-medium mb-0.5 relative'>
				{/* change width when not able to edit or delete */}
				<h1 className='w-11/12 text-5xl'>{listingName}</h1>
				<div className='absolute top-0 right-0 flex gap-4'>
					<button className='rounded-lg bg-my-primary-900 px-3 py-1.5 hover:bg-my-secondary-I-500 text-white transition'>
						<Link to={`/listing/${listingId}/edit`}>
							<Edit />
						</Link>
					</button>
					<button className='rounded-lg bg-my-primary-900 px-3 py-1.5 hover:bg-red-500 text-white transition duration-200'>
						<Trash2 />
					</button>
				</div>
			</div>
			<div className='flex items-end gap-8 mb-3 text-lg'>
				<div className=''>
					<span className='mr-1 text-xl leading-none text-orange-400'>
						&#9733;
					</span>
					{avgRating}
					<span className='mx-1.5 text-lg leading-none'>&bull;</span>
					{totalRatingCount} Reviews
				</div>
				<div className='flex gap-1 h-max'>
					<div>{address.city},</div>
					<div>{address.state},</div>
					<div>{address.country},</div>
				</div>
			</div>
		</div>
	);
};

export default ListingHeadingContainer;
