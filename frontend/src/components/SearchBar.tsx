const SearchBar = () => {
	return (
		<form className='flex gap-2 grow' onSubmit={(e) => e.preventDefault()}>
			<input
				type='text'
				className='bg-transparent w-full py-1.5 px-3 rounded-lg border-2 border-my-secondary-400 focus:border-my-secondary-700 focus:outline-none transition'
			/>
			<button className='bg-my-secondary-700 text-my-primary-500 py-1.5 px-3 rounded-lg hover:bg-my-secondary-200 hover:text-my-secondary-700 hover:font-medium transition'>
				Search
			</button>
		</form>
	);
};

export default SearchBar;
