import CardList from '../components/CardList';
import HeroHeading from '../components/HeroHeading';
import MainSearchBar from '../components/MainSearchBar';

const Home = () => {
	return (
		<>
			<HeroHeading />
			<MainSearchBar />
			<CardList />
		</>
	);
};

export default Home;
