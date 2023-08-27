import axios from 'axios';
import { TCategory } from '../components/form/Steps/PageFive';

export const getCategories = async () => {
	const res = await axios.get('http://localhost:5000/api/categories');
	const data: TCategory[] = await res.data;
	return data;
};
