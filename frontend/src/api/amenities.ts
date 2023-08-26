import axios from 'axios';
import { TAmenity } from '../components/form/Steps/PageFive';

export const getAmenities = async () => {
	const res = await axios.get('http://localhost:5000/api/amenities');
	const data = await res.data;
	return data;
};

export const getAmenityIds = async () => {
	const res = await axios.get('http://localhost:5000/api/amenities');
	const data: TAmenity[] = await res.data;
	const ids = data.map((item) => item.amenityId);
	return ids;
};
