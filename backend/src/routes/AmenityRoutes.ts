import { Router } from 'express';
import {
	deleteAmenity,
	getAllAmenities,
	postAmenity,
} from '../controllers/AmenityController';

const router = Router();

router.get('/', getAllAmenities);

router.post('/', postAmenity);

router.delete('/:amenityId', deleteAmenity);

export default router;
