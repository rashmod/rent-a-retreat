import axios from 'axios';
import { THouseRule } from '../components/form/Steps/PageFive';

export const getHouseRules = async () => {
	const res = await axios.get('http://localhost:5000/api/houseRules');
	const data: THouseRule[] = await res.data;
	return data;
};
