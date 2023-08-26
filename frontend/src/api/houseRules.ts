import axios from 'axios';
import { THouseRule } from '../components/form/Steps/PageFive';

export const getHouseRules = async () => {
	const res = await axios.get('http://localhost:5000/api/houseRules');
	const data = await res.data;
	return data;
};

export const getHouseRuleIds = async () => {
	const res = await axios.get('http://localhost:5000/api/houseRules');
	const data: THouseRule[] = await res.data;
	const ids = data.map((item) => item.houseRuleId);
	return ids;
};
