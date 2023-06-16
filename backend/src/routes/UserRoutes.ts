import { Router } from 'express';
import { prisma } from '../db/prisma';
import {
	deleteGuest,
	deleteHost,
	deleteUser,
	getAllUsers,
	getUser,
	postGuest,
	postHost,
	postUser,
} from '../controllers/UserController';

const router = Router();

router.get('/', getAllUsers);
router.get('/:userId', getUser);

router.post('/', postUser);
router.post('/host', postHost);
router.post('/guest', postGuest);

router.delete('/:userId', deleteUser);
router.delete('/host/:hostId', deleteHost);
router.delete('/guest/:guestId', deleteGuest);

export default router;
