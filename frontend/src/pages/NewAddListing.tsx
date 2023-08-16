import useMultiStepForm from '../hooks/useMultiStepForm';
// import { useFormState } from '../store/store';
import PageOne from '../components/form/Steps/PageOne';
import PageTwo from '../components/form/Steps/PageTwo';
import PageThree from '../components/form/Steps/PageThree';
import ConfirmPage from '../components/form/Steps/ConfirmPage';
import Stepper from '../components/form/Stepper';

const stepTitles = ['First Name', 'Last Name', 'Email', 'Confirm'];
// const stepTitles = [
// 	'Basic Details',
// 	'Refundable',
// 	'Address',
// 	'Map',
// 	'Misc.',
// 	'Images',
// 	'Confirm',
// ];

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
		<PageOne
			isFirstPage={isFirstPage}
			isLastPage={isLastPage}
			goToNextPage={goToNextPage}
			goToPreviousPage={goToPreviousPage}
		/>,
		<PageTwo
			isFirstPage={isFirstPage}
			isLastPage={isLastPage}
			goToNextPage={goToNextPage}
			goToPreviousPage={goToPreviousPage}
		/>,
		<PageThree
			isFirstPage={isFirstPage}
			isLastPage={isLastPage}
			goToNextPage={goToNextPage}
			goToPreviousPage={goToPreviousPage}
		/>,
		<ConfirmPage
			gotoIndex={gotoIndex}
			isFirstPage={isFirstPage}
			isLastPage={isLastPage}
			goToPreviousPage={goToPreviousPage}
		/>,
	];

	// const { formData } = useFormState();

	return (
		<div className='h-screen'>
			<h1 className='font-bold text-9xl'>NewAddListing</h1>
			<div className='grid w-1/2 grid-cols-4 m-1 mx-auto overflow-hidden border-black bg-my-primary-200 rounded-3xl'>
				<div className='col-span-1 pt-10 pb-12 pl-5 bg-my-primary-700'>
					<Stepper
						currentStepIndex={currentStepIndex}
						formLength={formLength}
						steps={stepTitles}
					/>
				</div>
				{steps[currentStepIndex]}
				{/* <pre>{JSON.stringify(formData, null, 2)}</pre> */}
			</div>
		</div>
	);
};

export default NewAddListing;
