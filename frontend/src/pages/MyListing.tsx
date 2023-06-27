import { Link } from 'react-router-dom';
import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';

const MyListing = () => {
	return (
		<>
			<h1 className='text-9xl font-bold mb-7'>My listings</h1>
			<div className='flex gap-4 w-full mb-5'>
				<SearchBar />
				<button className='bg-my-secondary-700 text-my-primary-500 py-1.5 px-3 rounded-lg hover:bg-my-secondary-200 hover:text-my-secondary-700 hover:font-medium'>
					<Link to='/addListing'>Add new listing</Link>
				</button>
			</div>
			<CardList />
		</>
	);
};

export default MyListing;
