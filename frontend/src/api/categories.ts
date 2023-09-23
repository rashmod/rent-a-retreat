import axios from 'axios';
import { TCategory } from '../components/form/Steps/PageFive';

export const getCategories = async () => {
	const res = await axios.get(
		`${import.meta.env.VITE_BACKEND_BASE_URL}/api/categories`
	);
	const data: TCategory[] = await res.data;
	return data;
};
