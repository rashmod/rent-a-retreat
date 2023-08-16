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
					className='px-8 py-2 text-sm border-2 border-black rounded-xl'
					type='button'
					onClick={goToPreviousPage}>
					Back
				</button>
			)}
			<button
				className='px-8 py-2 ml-auto text-sm text-white border-2 border-my-accent-500 bg-my-accent-500 rounded-xl'
				type='submit'>
				{isLastPage ? 'Submit' : 'Next'}
			</button>
		</div>
	);
}

export default Navigation;
