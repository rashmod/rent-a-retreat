import { Link } from 'react-router-dom';
import {
	TAmenity,
	TCategory,
	THouseRule,
	TListingDetail,
	TModalValues,
	TModalTitle,
} from '../types/type';
import { ChevronsDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import ModalContainer from './ModalContainer';
import KnowMoreModal from './KnowMoreModal';

type TModalType = TAmenity | TCategory | THouseRule;

type TOutputItem = {
	id: string;
	title: string;
	description: string;
};

const changeToValid = (arr: TModalType[]): TOutputItem[] => {
	const changedArr: TOutputItem[] = arr.map((item) => {
		let id, title, description;

		if ('amenityId' in item) {
			id = item.amenityId;
			title = item.amenityTitle;
			description = item.amenityDescription;
		} else if ('categoryId' in item) {
			id = item.categoryId;
			title = item.categoryTitle;
			description = item.categoryDescription;
		} else if ('houseRuleId' in item) {
			id = item.houseRuleId;
			title = item.ruleTitle;
			description = item.ruleDescription;
		} else {
			id = '';
			title = '';
			description = '';
		}

		return { id, title, description };
	});

	return changedArr;
};

const ListingDetailsContainer = ({
	user,
	bedroomCount,
	bathroomCount,
	maxGuest,
	amenity,
	category,
	houseRule,
}: TListingDetail) => {
	const [showModal, setShowModal] = useState(false);
	const [modalContent, setModalContent] = useState<TModalValues>({
		title: '',
		content: [],
	});

	useEffect(() => {
		if (showModal) document.body.style.overflow = 'hidden';
		if (!showModal) document.body.style.overflow = 'unset';
	}, [showModal]);

	const closeModal = () => setShowModal(false);
	const openModal = () => setShowModal(true);

	const modalHandler = (title: TModalTitle, variant: TModalType[]) => {
		const content = changeToValid(variant);
		openModal();
		setModalContent({ title: title, content });
	};

	return (
		<>
			{showModal && (
				<ModalContainer closeModal={closeModal}>
					<KnowMoreModal
						closeModal={closeModal}
						content={modalContent}
					/>
				</ModalContainer>
			)}
			<div className='col-span-12 text-sm'>
				<div className='flex text-3xl font-medium'>
					<span className='opacity-70'>Hosted by</span>
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
				<div>
					<span className='text-lg font-medium'>Amenities</span>
					<ul className='grid grid-cols-4 gap-x-5'>
						{amenity.slice(0, 8).map((item) => (
							<li key={item.amenityId} className='truncate'>
								{item.amenityTitle}
							</li>
						))}
					</ul>
					<div
						onClick={() => modalHandler('Amenities', amenity)}
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
						onClick={() => modalHandler('Categories', category)}
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
						onClick={() => modalHandler('House Rules', houseRule)}
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
