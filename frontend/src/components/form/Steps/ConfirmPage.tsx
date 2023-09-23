import { useForm } from 'react-hook-form';
import { Map, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { TFormData, useFormState } from '../../../store/store';
import Navigation, { TNavigationProps } from '../Navigation';
import FormWrapper from '../FormWrapper';
import { ConfirmPageList } from '../../../data/data';
import EditButton from '../EditButton';
import ConfirmField from '../ConfirmField';
import ConfirmSectionHeader from '../ConfirmSectionHeader';
import ConfirmSectionWrapper from '../ConfirmSectionWrapper';
import ConfirmTags from '../ConfirmTags';
import { TAmenity, TCategory, THouseRule } from './PageFive';
import createValidFormData from './utils/createValidFormData';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addListing } from '../../../api/listings';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

type TConfirmPageProps = TNavigationProps & {
	gotoIndex: (index: number) => void;
};

const ConfirmPage = ({
	isFirstPage,
	isLastPage,
	goToPreviousPage,
	gotoIndex,
}: TConfirmPageProps) => {
	const { handleSubmit } = useForm();
	const queryClient = useQueryClient();
	// todo show loading and errors
	const { mutate, data, isLoading, isSuccess, isError } = useMutation({
		mutationFn: addListing,
		onSuccess: () => queryClient.invalidateQueries(['listings']),
	});
	const navigate = useNavigate();

	const { formData } = useFormState();

	useEffect(() => {
		if (isSuccess && data) {
			navigate(`/listing/${data.listingId}`);
		}
	}, [isSuccess, data, navigate]);

	function onSubmit() {
		const validFormData = createValidFormData(formData);
		// todo dynamically add hostId
		validFormData.append('hostId', '006a6e2c-159e-434e-97e2-d7a31c6ece23');
		mutate(validFormData);
	}

	return (
		<FormWrapper>
			<form
				className='flex flex-col justify-between h-full'
				onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col mb-4 divide-y-2'>
					{ConfirmPageList.map((item, index) => {
						if (item && index < 3)
							return (
								<ConfirmSectionWrapper key={index}>
									<ConfirmSectionHeader title={item.title}>
										<EditButton
											gotoIndex={() => gotoIndex(index)}
										/>
									</ConfirmSectionHeader>
									{item.children.map(
										(childItem, childIndex) => (
											<ConfirmField
												key={childIndex}
												label={childItem.label}
												value={
													formData[
														childItem.name as keyof TFormData
													] as
														| string
														| number
														| boolean
												}
											/>
										)
									)}
								</ConfirmSectionWrapper>
							);
					})}
					{/* ========================================== */}
					<ConfirmSectionWrapper>
						<ConfirmSectionHeader title='Map'>
							<EditButton gotoIndex={() => gotoIndex(3)} />
						</ConfirmSectionHeader>
						<Map
							mapboxAccessToken={
								import.meta.env.VITE_MAPBOX_TOKEN
							}
							initialViewState={{
								longitude: formData.longitude as number,
								latitude: formData.latitude as number,
								zoom: 14,
							}}
							style={{
								width: '80%',
								height: 200,
								borderRadius: 12,
							}}
							attributionControl={false}
							mapStyle='mapbox://styles/mapbox/dark-v10'>
							<Marker
								longitude={formData.longitude as number}
								latitude={formData.latitude as number}
								anchor='bottom'
								pitchAlignment='map'
								color='#e966a0'
							/>
						</Map>
					</ConfirmSectionWrapper>
					{/* ========================================== */}
					<ConfirmSectionWrapper>
						<ConfirmSectionHeader title='Miscellaneous'>
							<EditButton gotoIndex={() => gotoIndex(4)} />
						</ConfirmSectionHeader>
						<ConfirmTags<TCategory>
							content={formData.categories}
							title={{ single: 'Category', many: 'Categories' }}
							getId={(item) => item.categoryId}
							getTitle={(item) => item.categoryTitle}
							getDesc={(item) => item.categoryDescription}
						/>
						<ConfirmTags<TAmenity>
							content={formData.amenities}
							title={{ single: 'Amenity', many: 'Amenities' }}
							getId={(item) => item.amenityId}
							getTitle={(item) => item.amenityTitle}
							getDesc={(item) => item.amenityDescription}
						/>
						<ConfirmTags<THouseRule>
							content={formData.houseRules}
							title={{
								single: 'House Rule',
								many: 'House Rules',
							}}
							getId={(item) => item.houseRuleId}
							getTitle={(item) => item.ruleTitle}
							getDesc={(item) => item.ruleDescription}
						/>
					</ConfirmSectionWrapper>
					{/* ========================================== */}
					<ConfirmSectionWrapper>
						<ConfirmSectionHeader title='Images'>
							<EditButton gotoIndex={() => gotoIndex(5)} />
						</ConfirmSectionHeader>
						<div className='p-3 rounded-xl bg-my-primary-100 min-h-32'>
							{formData.images.length === 0 ? (
								<div className='flex flex-col items-center justify-center h-32 p-3 text-center'>
									<p>No images added</p>
								</div>
							) : (
								<div className='grid w-full grid-cols-3 gap-3 mx-auto'>
									{formData.images.map((image) => (
										<img
											key={image.localURL}
											src={image.localURL}
											className='object-cover w-full rounded-md aspect-square min-w-32'
											loading='lazy'
										/>
									))}
								</div>
							)}
						</div>
					</ConfirmSectionWrapper>
				</div>

				<Navigation
					goToPreviousPage={goToPreviousPage}
					isFirstPage={isFirstPage}
					isLastPage={isLastPage}
				/>
			</form>
		</FormWrapper>
	);
};

export default ConfirmPage;
