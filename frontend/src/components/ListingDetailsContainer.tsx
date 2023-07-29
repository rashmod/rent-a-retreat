import { Link } from 'react-router-dom';
import { IListingDetail } from '../types/type';
import { ChevronsDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import ModalContainer from './ModalContainer';
import KnowMoreModal from './KnowMoreModal';

const ListingDetailsContainer = ({
	user,
	bedroomCount,
	bathroomCount,
	maxGuest,
	amenity,
	category,
	houseRule,
}: IListingDetail) => {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		if (showModal) document.body.style.overflow = 'hidden';
		if (!showModal) document.body.style.overflow = 'unset';
	}, [showModal]);

	const displayDetails = () => setShowModal((prev) => !prev);

	return (
		<>
			{showModal && (
				<ModalContainer>
					<KnowMoreModal closeModal={displayDetails} />
				</ModalContainer>
			)}
			<div className='col-span-12 text-sm'>
				<div className='flex text-3xl font-medium'>
					Hosted by
					<Link to='/' className='ml-1'>
						{user.firstName} {user.lastName}
					</Link>
				</div>
				<div className='flex items-center gap-2.5'>
					<div>{bedroomCount} bedrooms</div>
					<span className='text-lg leading-none'>&bull;</span>
					<div>{bathroomCount} bathrooms</div>
					<span className='text-lg leading-none'>&bull;</span>
					<div>{maxGuest} guests</div>
				</div>
			</div>

			<div className='col-span-5 text-sm'>
				<div className='mt-5'>
					<span className='text-lg font-medium'>Amenities</span>
					<ul className='grid grid-cols-4 gap-x-5'>
						{amenity.slice(0, 8).map((item) => (
							<li key={item.amenityId} className='truncate'>
								{item.amenityTitle}
							</li>
						))}
					</ul>
					<div
						onClick={displayDetails}
						className='flex items-center justify-center mt-3 text-xs text-center transition cursor-pointer opacity-70 hover:opacity-100 hover:scale-110'>
						<ChevronsDown height={16} />
						<span>Know more</span>
					</div>
				</div>
				<div className='mt-5'>
					<span className='text-lg font-medium'>Categories</span>
					<ul className='grid grid-cols-4 gap-x-5'>
						{category.slice(0, 8).map((item) => (
							<li key={item.categoryId} className='truncate'>
								{item.categoryTitle}
							</li>
						))}
					</ul>
					<div
						onClick={displayDetails}
						className='flex items-center justify-center mt-3 text-xs text-center transition cursor-pointer opacity-70 hover:opacity-100 hover:scale-110'>
						<ChevronsDown height={16} />
						<span>Know more</span>
					</div>
				</div>
				<div className='mt-5'>
					<span className='text-lg font-medium'>House Rules</span>
					<ul className='grid grid-cols-4 gap-x-5'>
						{houseRule.slice(0, 8).map((item) => (
							<li key={item.houseRuleId} className='truncate'>
								{item.ruleTitle}
							</li>
						))}
					</ul>
					<div
						onClick={displayDetails}
						className='flex items-center justify-center mt-3 text-xs text-center transition cursor-pointer opacity-70 hover:opacity-100 hover:scale-110'>
						<ChevronsDown height={16} />
						<span>Know more</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default ListingDetailsContainer;
