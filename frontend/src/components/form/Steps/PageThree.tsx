import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useFormState } from '../../../store/store';
import Navigation from '../Navigation';
import FormWrapper from '../FormWrapper';
import FloatingLabelInput from '../FloatingLabelInput';
import { TStepProps } from '../../../types/form/steps';
import {
	PageThreeSchema,
	TPageThreeSchema,
} from '../../../types/form/PageThree';

const PageThree = ({
	isFirstPage,
	isLastPage,
	goToNextPage,
	goToPreviousPage,
}: TStepProps) => {
	const { formData } = useFormState();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TPageThreeSchema>({
		defaultValues: formData,
		mode: 'all',
		resolver: zodResolver(PageThreeSchema),
	});

	const onSubmit = () => goToNextPage();

	return (
		<FormWrapper>
			<form
				className='flex flex-col justify-between h-full'
				onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-3 mb-4'>
					<div className='flex gap-3'>
						<FloatingLabelInput
							register={register}
							errors={errors}
							label='Unit Number'
							placeholder='Room 401'
							name='unitNumber'
							autofocus
						/>
						<FloatingLabelInput
							register={register}
							errors={errors}
							label='Street Name'
							placeholder='5th Avenue'
							name='streetName'
						/>
					</div>
					<FloatingLabelInput
						register={register}
						errors={errors}
						label='Address Line'
						placeholder='322 Deckow Corners'
						name='addressLine'
					/>
					<div className='flex gap-3'>
						<FloatingLabelInput
							register={register}
							errors={errors}
							label='City'
							placeholder='Carissaton'
							name='city'
						/>
						<FloatingLabelInput
							register={register}
							errors={errors}
							label='Postal Code'
							placeholder='695284'
							name='postalCode'
						/>
					</div>
					<div className='flex gap-3'>
						<FloatingLabelInput
							register={register}
							errors={errors}
							label='State'
							placeholder='North Carolina'
							name='state'
						/>
						<FloatingLabelInput
							register={register}
							errors={errors}
							label='Country'
							placeholder='Belize'
							name='country'
						/>
					</div>
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

export default PageThree;
