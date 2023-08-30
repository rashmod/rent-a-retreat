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

type TConfirmPageProps = TNavigationProps & {
	gotoIndex: (index: number) => void;
};

const ConfirmPage = ({
	isFirstPage,
	isLastPage,
	goToPreviousPage,
	gotoIndex,
}: TConfirmPageProps) => {
	const { formData } = useFormState();
	const { handleSubmit } = useForm();

	function onSubmit() {
		alert(JSON.stringify(formData, null, 2));
		console.log(formData);
		// eslint-disable-next-line
		// @ts-ignore
		console.log(formData.images);
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
