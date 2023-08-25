import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MapRef } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { PageFourSchema } from '../../../types/form/PageFour';
import { TStepProps } from '../../../types/form/steps';
import FormWrapper from '../FormWrapper';
import Navigation from '../Navigation';
import { useRef } from 'react';
import AutoComplete from '../AutoComplete';
import DisplayMap from '../DisplayMap';

const PageFour = ({
	isFirstPage,
	isLastPage,
	goToNextPage,
	goToPreviousPage,
}: TStepProps) => {
	const mapRef = useRef<MapRef>(null);

	const { handleSubmit } = useForm({
		mode: 'all',
		resolver: zodResolver(PageFourSchema),
	});

	const onSubmit = () => goToNextPage();

	return (
		<FormWrapper>
			<form
				className='flex flex-col justify-between h-full'
				onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-3 mb-4'>
					<AutoComplete
						placeholder='Look for your place'
						mapRef={mapRef}
					/>
					<DisplayMap mapRef={mapRef} />
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

export default PageFour;
