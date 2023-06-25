import axios from 'axios';

export const getListings = async () => {
	const res = await axios.get('http://localhost:5000/api/listings');
	const data = await res.data;
	return data;
};

export const getListingDetails = async (listingId: string) => {
	const res = await axios.get(
		`http://localhost:5000/api/listings/${listingId}`
	);
	const data = await res.data;
	return data;
};
