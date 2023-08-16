import { useFormState } from '../../../store/store';
import { useForm } from 'react-hook-form';
import Navigation, { TNavigationProps } from '../Navigation';
import FormWrapper from '../FormWrapper';

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
				<div className='flex flex-col'>
					<div>
						<h3 className='flex justify-between'>
							<span className='text-2xl'>Page One</span>
							<button
								type='button'
								className='px-3 text-white bg-blue-500 rounded'
								onClick={() => gotoIndex(0)}>
								Edit
							</button>
						</h3>
						<div>First Name</div>
						<div>{formData.firstname}</div>
						<div>User Name</div>
						<div>{formData.username}</div>
					</div>
					<div>
						<h3 className='flex justify-between'>
							<span className='text-2xl'>Page Two</span>
							<button
								type='button'
								className='px-3 text-white bg-blue-500 rounded'
								onClick={() => gotoIndex(1)}>
								Edit
							</button>
						</h3>
						<div>Last Name</div>
						<div>{formData.lastname}</div>
					</div>
					<div>
						<h3 className='flex justify-between'>
							<span className='text-2xl'>Page Three</span>
							<button
								type='button'
								className='px-3 text-white bg-blue-500 rounded'
								onClick={() => gotoIndex(2)}>
								Edit
							</button>
						</h3>
						<div>Email</div>
						<div>{formData.email}</div>
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
}

export default ConfirmPage;
