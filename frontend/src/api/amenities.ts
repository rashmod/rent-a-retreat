import axios from 'axios';
import { TAmenity } from '../components/form/Steps/PageFive';

export const getAmenities = async () => {
	const res = await axios.get(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/amenities`
	);
	const data: TAmenity[] = await res.data;
	return data;
};
