import { Router } from 'express';
import {
	deleteProfilePhoto,
	postProfilePhoto,
} from '../controllers/ProfilePhotoController';

const router = Router();

router.post('/:userId', postProfilePhoto);

router.delete('/:userId/:profilePhotoId', deleteProfilePhoto);

export default router;
