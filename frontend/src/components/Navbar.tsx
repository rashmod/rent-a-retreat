import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='mb-5 w-full sticky top-0 z-50 bg-my-primary-500 border-b border-secondary shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-50'>
			<div className='py-3 w-11/12 m-auto flex justify-between items-center font-semibold'>
				<NavLink to='/' className='font-bold text-2xl'>
					RAR
				</NavLink>
				<ul className='flex justify-between gap-5'>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/landing'>About Us</NavLink>
					</li>
					<li>
						<NavLink to='/myListings'>My Listings</NavLink>
					</li>
					<li>
						<NavLink to='/me'>Profile</NavLink>
					</li>
					<li>
						<NavLink
							to='/login'
							className='px-3 py-2 rounded-full bg-my-secondary-500 text-my-primary-500 font-normal'>
							Sign In
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
