import axios from 'axios';
import { THouseRule } from '../components/form/Steps/PageFive';

export const getHouseRules = async () => {
	const res = await axios.get(
		`${import.meta.env.VITE_BASE_URL}/api/houseRules`
	);
	const data: THouseRule[] = await res.data;
	return data;
};
