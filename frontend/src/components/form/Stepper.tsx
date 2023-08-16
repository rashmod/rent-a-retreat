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
		<div className='flex flex-col justify-center gap-8'>
			{stepNumbers.map((stepNumber, index) => (
				<div
					key={stepNumber}
					className='relative flex flex-col items-center justify-start w-min isolate'>
					<div
						className={`rounded-full h-5 w-5 transition-all duration-300 text-xs ${
							index <= currentStepIndex
								? 'bg-my-accent-500 text-white'
								: 'bg-white text-black' // Lighter green for completed steps
						} flex items-center justify-center`}>
						{stepNumber}
					</div>
					{stepNumber !== formLength && (
						<div
							className={`absolute top-full scale-y-105 -z-10 left-1/2 -translate-x-1/2 h-8 w-1 transition-all duration-200 ${
								index < currentStepIndex
									? 'bg-my-accent-500' // Green line for completed steps
									: 'bg-white' // Gray line for pending steps
							}`}
						/>
					)}
					<div
						className={`absolute text-xs text-center text-white left-full whitespace-nowrap ml-1.5 ${
							index === currentStepIndex &&
							' underline underline-offset-2'
						} ${
							index <= currentStepIndex && 'text-my-accent-500'
						}`}>
						{steps[stepNumber - 1]}
					</div>
				</div>
			))}
		</div>
	);
}

export default Stepper;
