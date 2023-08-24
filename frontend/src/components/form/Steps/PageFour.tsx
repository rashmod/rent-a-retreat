import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { PageFourSchema } from '../../../types/form/PageFour';
import { TStepProps } from '../../../types/form/steps';
import FormWrapper from '../FormWrapper';
import Navigation from '../Navigation';
import { AutoComplete } from './ComboboxPopover';

export type TLatLng = { lat: '' | number; lng: '' | number };

const PageFour = ({
	isFirstPage,
	isLastPage,
	goToNextPage,
	goToPreviousPage,
}: TStepProps) => {
	// const { formData, setFormData } = useFormState();

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
					<AutoComplete placeholder='Look for your place' />
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
