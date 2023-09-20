import { Router } from 'express';
import {
	deleteListingImage,
	postListingImage,
} from '../controllers/ListingImageController';

const router = Router();

router.post('/:listingId', postListingImage);

router.delete('/:listingId/:listingImageId', deleteListingImage);

export default router;
