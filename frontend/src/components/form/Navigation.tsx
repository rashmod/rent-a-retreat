export type TNavigationProps = {
	isFirstPage: boolean;
	isLastPage: boolean;
	goToPreviousPage: () => void;
};

function Navigation({
	isFirstPage,
	isLastPage,
	goToPreviousPage,
}: TNavigationProps) {
	return (
		<div className='flex justify-between gap-2 mt-4'>
			{!isFirstPage && (
				<button
					className='px-8 py-2 text-sm font-medium transition duration-200 border-2 border-my-primary-700 text-my-primary-700 hover:bg-my-primary-700 hover:text-white rounded-xl'
					type='button'
					onClick={goToPreviousPage}>
					Back
				</button>
			)}
			<button
				className='px-8 py-2 ml-auto text-sm text-white transition duration-200 border-2 border-my-accent-500 bg-my-accent-500 hover:bg-my-accent-600 hover:border-my-accent-600 rounded-xl'
				type='submit'>
				{isLastPage ? 'Submit' : 'Next'}
			</button>
		</div>
	);
}

export default Navigation;
