import { Router } from 'express';
import { prisma } from '../db/prisma';
import {
	deleteUser,
	getAllUsers,
	getUser,
	postUser,
} from '../controllers/UserController';

const router = Router();

router.get('/', getAllUsers);

router.post('/', postUser);

router.get('/:userId', getUser);

router.delete('/:userId', deleteUser);

export default router;
