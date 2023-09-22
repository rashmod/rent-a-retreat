import { Router } from 'express';
import {
	deleteListing,
	getAllListings,
	getListingDetails,
	postListing,
	updateListing,
} from '../controllers/ListingController';
import upload from '../config/multerConfig';

const router = Router();

router.get('/', getAllListings);

router.post('/', upload.array('images', 10), postListing);

router.get('/:listingId', getListingDetails);

router.delete('/:listingId', deleteListing);

router.put('/:listingId', updateListing);

export default router;
