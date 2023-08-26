import axios from 'axios';
import { TCategory } from '../components/form/Steps/PageFive';

export const getCategories = async () => {
	const res = await axios.get('http://localhost:5000/api/categories');
	const data = await res.data;
	return data;
};

export const getCategoryIds = async () => {
	const res = await axios.get('http://localhost:5000/api/categories');
	const data: TCategory[] = await res.data;
	const ids = data.map((item) => item.categoryId);
	return ids;
};
