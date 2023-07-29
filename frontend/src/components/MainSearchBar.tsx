const MainSearchBar = () => {
	return (
		<div className='w-4/5 p-6 pt-3 mx-auto mb-12 rounded-3xl bg-my-primary-500'>
			<h2 className='mb-3 text-3xl font-medium text-center text-white'>
				Look for a place to stay
			</h2>
			<div className='flex gap-3'>
				<ul className='grid items-center grid-cols-3 overflow-hidden text-black bg-white divide-x-2 divide-black rounded-xl grow'>
					<li className='flex items-center justify-center h-full transition duration-200 cursor-pointer hover:bg-my-accent-100'>
						Where
					</li>
					<li className='flex items-center justify-center h-full transition duration-200 cursor-pointer hover:bg-my-accent-100'>
						When
					</li>
					<li className='flex items-center justify-center h-full transition duration-200 cursor-pointer hover:bg-my-accent-100'>
						Who
					</li>
				</ul>
				<div className='relative group isolate'>
					<div className='absolute -inset-0.5 group-hover:blur duration-200 transition -z-10 bg-my-accent-500 opacity-0 group-hover:opacity-50 rounded-xl'></div>
					<button className='text-lg relative font-semibold text-white bg-my-accent-500 rounded-xl py-2.5 px-8'>
						Search
					</button>
				</div>
			</div>
		</div>
	);
};

export default MainSearchBar;
