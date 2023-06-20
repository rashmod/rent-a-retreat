import { Link } from 'react-router-dom';

interface IListingDetail {
	user: { firstName: string; lastName: string };
	bedroomCount: number;
	bathroomCount: number;
	maxGuest: number;
	amenity: { amenityTitle: string }[];
	category: { categoryTitle: string }[];
	houseRule: { ruleTitle: string }[];
}

const ListingDetailsContainer = ({
	user,
	bedroomCount,
	bathroomCount,
	maxGuest,
	amenity,
	category,
	houseRule,
}: IListingDetail) => {
	return (
		<div className='col-span-3'>
			<div className='flex text-2xl'>
				Hosted by
				<Link to='/' className='ml-1'>
					{user.firstName} {user.lastName}
				</Link>
			</div>
			<div className='flex items-center gap-1.5'>
				<div>{bedroomCount} bedrooms</div>
				<span className='text-lg leading-none'>&bull;</span>
				<div>{bathroomCount} bathrooms</div>
				<span className='text-lg leading-none'>&bull;</span>
				<div>{maxGuest} guests</div>
			</div>
			<div className='grid grid-cols-3'>
				<div>
					amenity
					{amenity.map((item) => (
						<div>{item.amenityTitle}</div>
					))}
				</div>
				<div>
					category
					{category.map((item) => (
						<div>{item.categoryTitle}</div>
					))}
				</div>
				<div>
					houseRule
					{houseRule.map((item) => (
						<div>{item.ruleTitle}</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ListingDetailsContainer;
