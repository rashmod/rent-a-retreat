import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Details from './pages/Details';
import MyListing from './pages/MyListing';
import EditListing from './pages/EditListing';
import AddListing from './pages/AddListing';
import Login from './pages/Login';
import User from './pages/User';

function App() {
	return (
		<div className='min-h-screen bg-my-primary-600 flex flex-col items-center'>
			<Navbar />
			<div className='w-11/12 my-10'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/listing/:listingId' element={<Details />} />
					<Route path='/landing' element={<About />} />
					<Route path='/myListings' element={<MyListing />} />
					<Route path='/addListing' element={<AddListing />} />
					<Route
						path='/listing/:listingId/edit'
						element={<EditListing />}
					/>
					<Route path='/login' element={<Login />} />
					<Route path='/me' element={<User />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
