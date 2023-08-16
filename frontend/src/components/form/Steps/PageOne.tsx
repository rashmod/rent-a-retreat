import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useFormState } from '../../../store/store';
import Navigation, { TNavigationProps } from '../Navigation';
import FormWrapper from '../FormWrapper';
import FloatingLabelInput from '../FloatingLabelInput';

export type TStepProps = TNavigationProps & {
	goToNextPage: () => void;
};

const PageOneSchema = z.object({
	firstname: z.string().min(1, 'First Name is required'),
	username: z.string().min(1, 'User Name is required'),
});
export type TPageOneSchema = z.infer<typeof PageOneSchema>;

function PageOne({
	isFirstPage,
	isLastPage,
	goToNextPage,
	goToPreviousPage,
}: TStepProps) {
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

	const onChangeHandler = (name: keyof TPageOneSchema, value: string) => {
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
						label='First Name'
						placeholder='John'
						errors={errors}
						name='firstname'
						autofocus
					/>
					<FloatingLabelInput
						register={register}
						onChangeHandler={onChangeHandler}
						label='User Name'
						placeholder='spittingbrit456'
						errors={errors}
						name='username'
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

export default PageOne;
