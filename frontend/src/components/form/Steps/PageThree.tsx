import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useFormState } from '../../../store/store';
import { TStepProps } from './PageOne';
import Navigation from '../Navigation';
import FormWrapper from '../FormWrapper';
import FloatingLabelInput from '../FloatingLabelInput';

const PageThreeSchema = z.object({
	email: z.string().min(1, 'Email is required').email('Invalid Email'),
});
export type TPageThreeSchema = z.infer<typeof PageThreeSchema>;

function PageThree({
	isFirstPage,
	isLastPage,
	goToNextPage,
	goToPreviousPage,
}: TStepProps) {
	const {
		formData: { email },
		setFormData,
	} = useFormState();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TPageThreeSchema>({
		defaultValues: { email },
		mode: 'all',
		resolver: zodResolver(PageThreeSchema),
	});

	const onSubmit = (data: TPageThreeSchema) => {
		setFormData((prev) => {
			return { ...prev, email: data.email };
		});
		goToNextPage();
	};

	const onChangeHandler = (name: string, value: string) => {
		setFormData((prev) => {
			return {
				...prev,
				[name]: value,
			};
		});
	};
	return (
		<FormWrapper>
			<form
				className='flex flex-col justify-between h-full'
				onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col'>
					<FloatingLabelInput
						register={register}
						onChangeHandler={onChangeHandler}
						label='Email'
						placeholder='abc@xyz.com'
						errors={errors}
						name='email'
						autofocus
					/>
				</div>
				<Navigation
					goToPreviousPage={goToPreviousPage}
					isFirstPage={isFirstPage}
					isLastPage={isLastPage}
				/>
			</form>
		</FormWrapper>
	);
}

export default PageThree;
