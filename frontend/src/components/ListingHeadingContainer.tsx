import { Link } from 'react-router-dom';
import { IListingHeading } from '../types/type';

const ListingHeadingContainer = ({
	listingName,
	avgRating,
	totalRatingCount,
	address,
	listingId,
}: IListingHeading) => {
	return (
		<>
			<div className='flex items-center justify-between font-medium mt-5 mb-0.5'>
				<span className='text-4xl'>{listingName}</span>
				<div className='flex gap-4'>
					<button className='rounded-lg bg-my-secondary-200 px-3 py-1.5 hover:bg-my-secondary-700 hover:text-my-primary-500 transition'>
						<Link to={`/listing/${listingId}/edit`}>
							Edit Listing
						</Link>
					</button>
					<button className='rounded-lg bg-my-secondary-200 px-3 py-1.5 hover:bg-my-secondary-700 hover:text-my-primary-500 transition'>
						Delete Listing
					</button>
				</div>
			</div>
			<div className='flex items-end gap-5 text-sm mb-3'>
				<div className=''>
					<span className='text-lg mr-1 leading-none text-orange-400'>
						&#9733;
					</span>
					{avgRating}
					<span className='mx-1.5 text-lg leading-none'>&bull;</span>
					{totalRatingCount} Reviews
				</div>
				<div className='flex gap-1 h-max'>
					{/* <div>unitNumber {address.unitNumber}</div> */}
					{/* <div>streetName {address.streetName}</div> */}
					{/* <div>addressLine {address.addressLine}</div> */}
					<div>{address.city},</div>
					{/* <div>postalCode {address.postalCode}</div> */}
					<div>{address.state},</div>
					<div>{address.country},</div>
				</div>
			</div>
		</>
	);
};

export default ListingHeadingContainer;
