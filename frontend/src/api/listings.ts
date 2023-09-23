import axios from 'axios';

export const getListings = async () => {
	const res = await axios.get(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/listings`
	);
	const data = await res.data;
	return data;
};

export const getListingDetails = async (listingId: string) => {
	const res = await axios.get(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/listings/${listingId}`
	);
	const data = await res.data;
	return data;
};

export const addListing = async (listing: FormData) => {
	const res = await axios.post(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/listings`,
		listing,
		{ headers: { 'Content-Type': 'multipart/form-data' } }
	);
	const data = await res.data;
	return data;
};
