import { Router } from 'express';
import {
	deleteProfileImage,
	postProfileImage,
} from '../controllers/ProfileImageController';

const router = Router();

router.post('/:userId', postProfileImage);

router.delete('/:userId/:profileImageId', deleteProfileImage);

export default router;
