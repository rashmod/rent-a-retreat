import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useFormState } from '../../../store/store';
import Navigation, { TNavigationProps } from '../Navigation';
import FormWrapper from '../FormWrapper';

export type TStepProps = TNavigationProps & {
	goToNextPage: () => void;
};

const PageOneSchema = z.object({
	firstname: z.string().min(1, 'First Name is required'),
});
export type TPageOneSchema = z.infer<typeof PageOneSchema>;

function PageOne({
	isFirstPage,
	isLastPage,
	goToNextPage,
	goToPreviousPage,
}: TStepProps) {
	const {
		formData: { firstname },
		setFormData,
	} = useFormState();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TPageOneSchema>({
		mode: 'all',
		defaultValues: { firstname },
		resolver: zodResolver(PageOneSchema),
	});

	const onSubmit = (data: TPageOneSchema) => {
		setFormData((prev) => {
			return { ...prev, firstname: data.firstname };
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
					<label htmlFor='firstname'>First Name</label>
					<input
						{...register('firstname', {
							required: 'First Name is required',
							onChange(event) {
								onChangeHandler(
									'firstname',
									event.target.value
								);
							},
						})}
						autoFocus
						type='text'
						id='firstname'
						className='px-4 py-2 border border-black'
					/>
					{errors && errors.firstname && (
						<p className='text-sm text-red-400'>
							{errors.firstname.message}
						</p>
					)}
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
