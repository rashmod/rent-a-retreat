const Footer = () => {
	return (
		<div className='sticky bottom-0 z-40 w-full mt-12 bg-my-secondary-II-900'>
			<div className='flex items-center justify-end py-1.5 w-10/12 mx-auto text-white text-base'>
				<ul className='grid grid-flow-col-dense divide-x divide-white'>
					<li className='pr-3'>Terms</li>
					<li className='px-3'>Privacy</li>
					<li className='pl-3'>&copy; 2023 RAR Inc.</li>
				</ul>
			</div>
		</div>
	);
};

export default Footer;
