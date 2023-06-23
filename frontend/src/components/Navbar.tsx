import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='mb-5 w-full sticky top-0 z-50 bg-my-primary border-b border-secondary shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-50'>
			<div className='py-3 w-11/12 m-auto flex justify-between items-center font-semibold'>
				<NavLink to='/' className='font-bold text-2xl'>
					RAR
				</NavLink>
				<ul className='flex justify-between w-1/3'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/landing'>About Us</NavLink>
					</li>
					<li>
						<NavLink
							to='/'
							className='px-3 py-2 rounded-full bg-my-secondary text-my-primary font-normal'>
							Sign In
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
