import { Router } from 'express';
import {
	deleteListingPhoto,
	postListingPhoto,
} from '../controllers/ListingPhotoController';

const router = Router();

router.post('/:listingId', postListingPhoto);

router.delete('/:listingId/:listingPhotoId', deleteListingPhoto);

export default router;
