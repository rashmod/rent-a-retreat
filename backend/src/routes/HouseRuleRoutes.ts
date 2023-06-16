import { Router } from 'express';
import {
	deleteHouseRule,
	getAllHouseRule,
	postHouseRule,
} from '../controllers/HouseRuleController';

const router = Router();

router.get('/', getAllHouseRule);

router.post('/', postHouseRule);

router.delete('/:houseRuleId', deleteHouseRule);

export default router;
