import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useFormState } from '../../../store/store';
import Navigation from '../Navigation';
import FormWrapper from '../FormWrapper';
import FloatingLabelInput from '../FloatingLabelInput';
import Toggle from '../Toggle';
import { TStepProps } from '../../../types/form/steps';
import { PageTwoSchema, TPageTwoSchema } from '../../../schema/PageTwoSchema';
import { DevTool } from '@hookform/devtools';

const PageTwo = ({
	isFirstPage,
	isLastPage,
	goToNextPage,
	goToPreviousPage,
}: TStepProps) => {
	// todo validation broke
	const { formData, setFormData } = useFormState();

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
		resetField,
	} = useForm<TPageTwoSchema>({
		defaultValues: formData,
		mode: 'all',
		resolver: zodResolver(PageTwoSchema),
	});

	const onSubmit = () => {
		if (!formData.isRefundable) {
			setFormData((prev) => {
				return {
					...prev,
					percentRefundable: undefined,
					daysBeforeCancellation: undefined,
				};
			});
		}
		goToNextPage();
	};

	return (
		<FormWrapper>
			<form
				className='flex flex-col justify-between h-full'
				onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-3 mb-4'>
					<Toggle
						register={register}
						label='Is Refundable?'
						name='isRefundable'
						connectedFields={[
							'percentRefundable',
							'daysBeforeCancellation',
						]}
						resetField={resetField}
					/>

					<FloatingLabelInput
						register={register}
						registerOptions={{ valueAsNumber: true }}
						errors={errors}
						label='Percent refundable'
						placeholder='70'
						name='percentRefundable'
						disabled={!formData.isRefundable}
					/>
					<FloatingLabelInput
						register={register}
						registerOptions={{ valueAsNumber: true }}
						errors={errors}
						label='Days before cancellation'
						placeholder='5'
						name='daysBeforeCancellation'
						disabled={!formData.isRefundable}
					/>
				</div>
				<Navigation
					goToPreviousPage={goToPreviousPage}
					isFirstPage={isFirstPage}
					isLastPage={isLastPage}
				/>
			</form>
			<DevTool control={control} />
		</FormWrapper>
	);
};

export default PageTwo;
