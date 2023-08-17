import { TFormData, useFormState } from '../../../store/store';
import { useForm } from 'react-hook-form';
import Navigation, { TNavigationProps } from '../Navigation';
import FormWrapper from '../FormWrapper';
import { ConfirmPageList } from '../../../data/data';
import EditButton from '../EditButton';
import ConfirmField from '../ConfirmField';
import ConfirmSectionHeader from '../ConfirmSectionHeader';
import ConfirmSectionWrapper from '../ConfirmSectionWrapper';

type TConfirmPageProps = TNavigationProps & {
	gotoIndex: (index: number) => void;
};

function ConfirmPage({
	isFirstPage,
	isLastPage,
	goToPreviousPage,
	gotoIndex,
}: TConfirmPageProps) {
	const { formData } = useFormState();
	const { handleSubmit } = useForm();

	function onSubmit() {
		alert(JSON.stringify(formData, null, 2));
	}
	return (
		<FormWrapper>
			<form
				className='flex flex-col justify-between h-full'
				onSubmit={handleSubmit(onSubmit)}>
				<div className='flex flex-col mb-4 divide-y'>
					{ConfirmPageList.map((item, index) => {
						if (item)
							return (
								<ConfirmSectionWrapper key={index}>
									<ConfirmSectionHeader title={item.title}>
										<EditButton
											gotoIndex={() => gotoIndex(index)}
										/>
									</ConfirmSectionHeader>
									{item.children.map(
										(childItem, childIndex) => (
											<ConfirmField
												key={childIndex}
												label={childItem.label}
												value={
													formData[
														childItem.name as keyof TFormData
													]
												}
											/>
										)
									)}
								</ConfirmSectionWrapper>
							);
					})}
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

export default ConfirmPage;
