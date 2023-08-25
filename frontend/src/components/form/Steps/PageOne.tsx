import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useFormState } from '../../../store/store';
import Navigation from '../Navigation';
import FormWrapper from '../FormWrapper';
import FloatingLabelInput from '../FloatingLabelInput';
import createOnChangeHandler from './utils/onChangeHandler';
import { PageOneSchema, TPageOneSchema } from '../../../types/form/PageOne';
import { TStepProps } from '../../../types/form/steps';
// import { PageOneInputList } from '../../../data/data';

const PageOne = ({
	isFirstPage,
	isLastPage,
	goToNextPage,
	goToPreviousPage,
}: TStepProps) => {
	const { formData, setFormData } = useFormState();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TPageOneSchema>({
		mode: 'all',
		defaultValues: formData,
		resolver: zodResolver(PageOneSchema),
	});

	const onSubmit = () => goToNextPage();

	const onChangeHandler = createOnChangeHandler(setFormData);

	return (
		<FormWrapper>
			<form
				className='flex flex-col justify-between h-full'
				onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-3 mb-4'>
					<FloatingLabelInput
						register={register}
						onChangeHandler={onChangeHandler}
						errors={errors}
						label='Listing Name'
						placeholder='Farm stay in Toscana'
						name='listingName'
						autofocus
					/>
					<div className='flex gap-3'>
						<FloatingLabelInput
							register={register}
							registerOptions={{ valueAsNumber: true }}
							onChangeHandler={onChangeHandler}
							errors={errors}
							label='Bedroom'
							placeholder='4'
							name='bedroom'
						/>
						<FloatingLabelInput
							register={register}
							registerOptions={{ valueAsNumber: true }}
							onChangeHandler={onChangeHandler}
							errors={errors}
							label='Bathroom'
							placeholder='2'
							name='bathroom'
						/>
					</div>
					<div className='flex gap-3'>
						<FloatingLabelInput
							register={register}
							registerOptions={{ valueAsNumber: true }}
							onChangeHandler={onChangeHandler}
							errors={errors}
							label='Price per night'
							placeholder='250'
							name='pricePerNight'
						/>
						<FloatingLabelInput
							register={register}
							registerOptions={{ valueAsNumber: true }}
							onChangeHandler={onChangeHandler}
							errors={errors}
							label='Cleaning Fee'
							placeholder='130'
							name='cleaningFee'
						/>
						<FloatingLabelInput
							register={register}
							registerOptions={{ valueAsNumber: true }}
							onChangeHandler={onChangeHandler}
							errors={errors}
							label='Max Guests'
							placeholder='5'
							name='maxGuest'
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

export default PageOne;