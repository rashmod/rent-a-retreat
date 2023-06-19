import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';

function App() {
	return (
		<div className='min-h-screen bg-primary flex flex-col items-center'>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/listing/:listingId' element={<Home />} />
				<Route path='/landing' element={<About />} />
			</Routes>
		</div>
	);
}

export default App;
