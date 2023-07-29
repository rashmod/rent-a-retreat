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
import Footer from './components/Footer';
import ImageModal from './pages/ImageModal';

function App() {
	return (
		<div className='flex flex-col items-center min-h-screen bg-my-primary-100'>
			<Navbar />
			<div className='w-10/12'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/listing/:listingId' element={<Details />} />
					<Route
						path='/listing/:listingId/:photoId'
						element={<ImageModal />}
					/>
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
			<Footer />
		</div>
	);
}

export default App;
