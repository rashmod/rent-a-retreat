import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { useFormState } from '../../../store/store';
import { TStepProps } from './PageOne';
import Navigation from '../Navigation';
import FormWrapper from '../FormWrapper';
import FloatingLabelInput from '../FloatingLabelInput';
import { PageTwoInputList } from '../../../data/data';

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
	const { formData, setFormData } = useFormState();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<TPageTwoSchema>({
		defaultValues: formData,
		mode: 'all',
		resolver: zodResolver(PageTwoSchema),
	});

	const onSubmit = () => goToNextPage();

	const onChangeHandler = (name: keyof TPageTwoSchema, value: string) => {
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
					{PageTwoInputList.map((input, index) => (
						<FloatingLabelInput
							key={index}
							register={register}
							onChangeHandler={onChangeHandler}
							errors={errors}
							label={input.label}
							placeholder={input.placeholder}
							name={input.name as keyof TPageTwoSchema}
							autofocus={index === 0}
						/>
					))}
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
