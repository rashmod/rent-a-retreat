import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useFormState } from '../../../store/store';
import Navigation from '../Navigation';
import FormWrapper from '../FormWrapper';
import { PageFiveSchema, TPageFiveSchema } from '../../../types/form/PageFive';
import { TStepProps } from '../../../types/form/steps';
import MultiSelect from '../MultiSelect';
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../../api/categories';
import { getAmenities } from '../../../api/amenities';
import { getHouseRules } from '../../../api/houseRules';

export type TCategory = Record<
	'categoryId' | 'categoryTitle' | 'categoryDescription',
	string
>;
export type TAmenity = Record<
	'amenityId' | 'amenityTitle' | 'amenityDescription',
	string
>;
export type THouseRule = Record<
	'houseRuleId' | 'ruleTitle' | 'ruleDescription',
	string
>;

const PageFive = ({
	isFirstPage,
	isLastPage,
	goToNextPage,
	goToPreviousPage,
}: TStepProps) => {
	const { formData } = useFormState();

	const { handleSubmit, control } = useForm<TPageFiveSchema>({
		mode: 'all',
		defaultValues: formData,
		resolver: zodResolver(PageFiveSchema),
	});

	const {
		data: categoryData,
		isLoading: categoryIsLoading,
		isError: categoryIsError,
	} = useQuery<TCategory[]>({
		queryKey: ['categories'],
		queryFn: getCategories,
	});
	const {
		data: amenityData,
		isLoading: amenityIsLoading,
		isError: amenityIsError,
	} = useQuery<TAmenity[]>({
		queryKey: ['amenities'],
		queryFn: getAmenities,
	});
	const {
		data: houseRuleData,
		isLoading: houseRuleIsLoading,
		isError: houseRuleIsError,
	} = useQuery<THouseRule[]>({
		queryKey: ['houseRules'],
		queryFn: getHouseRules,
	});

	const onSubmit = () => goToNextPage();

	return (
		<FormWrapper>
			<form
				className='flex flex-col justify-between h-full'
				onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col gap-3 mb-4'>
					<MultiSelect<TCategory>
						name='categories'
						label='categories'
						control={control}
						data={categoryData ?? []}
						isLoading={categoryIsLoading}
						isError={categoryIsError}
						getId={(item) => item.categoryId}
						getTitle={(item) => item.categoryTitle}
					/>
					<MultiSelect
						name='amenities'
						label='amenities'
						control={control}
						data={amenityData ?? []}
						isLoading={amenityIsLoading}
						isError={amenityIsError}
						getId={(item) => item.amenityId}
						getTitle={(item) => item.amenityTitle}
					/>
					<MultiSelect
						name='houseRules'
						label='house rules'
						control={control}
						data={houseRuleData ?? []}
						isLoading={houseRuleIsLoading}
						isError={houseRuleIsError}
						getId={(item) => item.houseRuleId}
						getTitle={(item) => item.ruleTitle}
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
};

export default PageFive;
