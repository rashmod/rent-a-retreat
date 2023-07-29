import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='sticky top-0 z-40 w-full bg-opacity-100 bg-my-secondary-II-900 backdrop-filter backdrop-blur-lg'>
			<div className='flex items-center justify-between w-10/12 py-3 m-auto text-white'>
				<NavLink to='/' className='text-2xl font-semibold'>
					RAR
				</NavLink>
				<ul className='flex justify-between gap-5 text-lg'>
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
						<NavLink to='/myReservations'>My Reservations</NavLink>
					</li>
					<li>
						<NavLink to='/me'>Profile</NavLink>
					</li>
					<li>
						<NavLink
							to='/login'
							// className='px-3 py-2 text-white rounded-full bg-my-accent-500'
						>
							Sign In
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
