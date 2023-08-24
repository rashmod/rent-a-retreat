const EditButton = ({ gotoIndex }: { gotoIndex: () => void }) => {
	return (
		<button
			className='px-4 py-1 text-xs font-medium transition duration-200 border-2 rounded-md border-my-primary-700 text-my-primary-700 hover:bg-my-primary-700 hover:text-white'
			type='button'
			onClick={gotoIndex}>
			Edit
		</button>
	);
};

export default EditButton;
