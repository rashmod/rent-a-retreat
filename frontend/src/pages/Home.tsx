import CardList from '../components/CardList';

const Home = () => {
	return (
		<>
			<div className='w-11/12 my-10'>
				<h1 className='text-7xl w-full font-bold'>
					Explore Your Place To Stay
				</h1>
			</div>
			<CardList />
		</>
	);
};

export default Home;
