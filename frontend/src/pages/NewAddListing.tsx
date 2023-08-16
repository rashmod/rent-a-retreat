import React, { FormEvent } from 'react';
import useMultiStepForm from '../hooks/useMultiStepForm';
import { useFormState } from '../store/store';

const stepTitles = ['First Name', 'Last Name', 'Email', 'Confirm'];

const NewAddListing = () => {
	const {
		currentStepIndex,
		isFirstPage,
		isLastPage,
		goToNextPage,
		goToPreviousPage,
		gotoIndex,
		formLength,
	} = useMultiStepForm(4);

	const steps = [
		<PageOne />,
		<PageTwo />,
		<PageThree />,
		<ConfirmPage gotoIndex={gotoIndex} />,
	];

	const { formData } = useFormState();

	function onSubmit(e: FormEvent) {
		e.preventDefault();
		if (!isLastPage) return goToNextPage();
		alert(JSON.stringify(formData, null, 2));
	}
	return (
		<div className='h-screen'>
			<h1 className='font-bold text-9xl'>NewAddListing</h1>
			<div className='relative px-8 py-4 m-1 mx-auto bg-white border-black rounded-lg w-96'>
				<form onSubmit={onSubmit}>
					{/* <div className='absolute top-2 right-2'>
						{currentStepIndex + 1}/{formLength}
					</div> */}
					<Stepper
						currentStepIndex={currentStepIndex}
						formLength={formLength}
						steps={stepTitles}
					/>
					{steps[currentStepIndex]}
					<div className='flex justify-end gap-2 mt-4'>
						{!isFirstPage && (
							<button type='button' onClick={goToPreviousPage}>
								Back
							</button>
						)}
						<button type='submit'>
							{isLastPage ? 'Submit' : 'Next'}
						</button>
					</div>
				</form>
				{/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
			</div>
		</div>
	);
};

// =======================================
// =======================================
type TStepperProps = {
	currentStepIndex: number;
	formLength: number;
	steps: string[];
};
function Stepper({ currentStepIndex, formLength, steps }: TStepperProps) {
	const stepNumbers = Array.from(
		{ length: formLength },
		(_, index) => index + 1
	);

	return (
		<div className='flex justify-center gap-10 pb-10 mt-2'>
			{stepNumbers.map((stepNumber, index) => (
				<div
					key={stepNumber}
					className='relative flex flex-col items-center justify-start isolate'>
					<div
						className={`rounded-full h-8 w-8 border-2 transition-all duration-300 ${
							index === currentStepIndex
								? 'bg-green-700 text-white border-green-700' // Darker green for current step
								: index < currentStepIndex
								? 'bg-green-500 text-white border-green-500'
								: 'bg-white text-black border-gray-300' // Lighter green for completed steps
						} flex items-center justify-center`}>
						{stepNumber}
					</div>
					{stepNumber !== formLength && (
						<div
							className={`absolute left-full scale-x-105 -z-10 top-1/2 -translate-y-1/2 w-10 transition-all duration-200 ${
								index < currentStepIndex
									? 'bg-green-500' // Green line for completed steps
									: 'bg-gray-300' // Gray line for pending steps
							} h-1`}
						/>
					)}
					<div className='absolute mt-1 text-xs text-center text-black top-full'>
						{steps[stepNumber - 1]}
					</div>
				</div>
			))}
		</div>
	);
}

// =======================================
// =======================================
function PageOne() {
	const {
		formData: { firstname },
		setFormData,
	} = useFormState();

	return (
		<FormWrapper>
			<label htmlFor='firstname'>First Name</label>
			<input
				autoFocus
				type='text'
				id='firstname'
				className='border border-black'
				required
				value={firstname}
				onChange={(e) =>
					setFormData((prev) => {
						return { ...prev, firstname: e.target.value };
					})
				}
			/>
		</FormWrapper>
	);
}

// =======================================
// =======================================
function PageTwo() {
	const {
		formData: { lastname },
		setFormData,
	} = useFormState();
	return (
		<FormWrapper>
			<label htmlFor='lastname'>Last Name</label>
			<input
				autoFocus
				type='text'
				id='lastname'
				className='border border-black'
				required
				value={lastname}
				onChange={(e) =>
					setFormData((prev) => {
						return { ...prev, lastname: e.target.value };
					})
				}
			/>
		</FormWrapper>
	);
}

// =======================================
// =======================================
function PageThree() {
	const {
		formData: { email },
		setFormData,
	} = useFormState();
	return (
		<FormWrapper>
			<label htmlFor='email'>Email</label>
			<input
				autoFocus
				type='email'
				id='email'
				className='border border-black'
				required
				value={email}
				onChange={(e) =>
					setFormData((prev) => {
						return { ...prev, email: e.target.value };
					})
				}
			/>
		</FormWrapper>
	);
}

// =======================================
// =======================================
function ConfirmPage({ gotoIndex }: { gotoIndex: (index: number) => void }) {
	const { formData } = useFormState();
	return (
		<FormWrapper>
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
		</FormWrapper>
	);
}

// =======================================
// =======================================
type TFormWrapper = {
	children: React.ReactNode;
};
const FormWrapper = ({ children }: TFormWrapper) => {
	return (
		<>
			<div className='flex flex-col'>{children}</div>
		</>
	);
};

export default NewAddListing;
