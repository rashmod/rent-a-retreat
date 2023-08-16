import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useFormState } from '../../../store/store';
import { TStepProps } from './PageOne';
import Navigation from '../Navigation';
import FormWrapper from '../FormWrapper';

const PageTwoSchema = z.object({
	lastname: z.string().min(1, 'Last Name is required'),
});
export type TPageTwoSchema = z.infer<typeof PageTwoSchema>;

function PageTwo({
	isFirstPage,
	isLastPage,
	goToNextPage,
	goToPreviousPage,
}: TStepProps) {
	const {
		formData: { lastname },
		setFormData,
	} = useFormState();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TPageTwoSchema>({
		defaultValues: { lastname },
		mode: 'all',
		resolver: zodResolver(PageTwoSchema),
	});

	const onSubmit = (data: TPageTwoSchema) => {
		setFormData((prev) => {
			return { ...prev, lastname: data.lastname };
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
					<label htmlFor='lastname'>Last Name</label>
					<input
						{...register('lastname', {
							required: 'Last Name is required',
							onChange(event) {
								onChangeHandler('lastname', event.target.value);
							},
						})}
						autoFocus
						type='text'
						id='lastname'
						className='px-4 py-2 border border-black'
					/>
					{errors && errors.lastname && (
						<p className='text-sm text-red-400'>
							{errors.lastname.message}
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

export default PageTwo;
