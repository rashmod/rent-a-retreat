import { Router } from 'express';
import { prisma } from '../db/prisma';
import {
	deleteListing,
	getAllListings,
	getListingDetails,
	postListing,
	updateListing,
} from '../controllers/ListingController';

const router = Router();

router.get('/', getAllListings);

router.post('/', postListing);

router.get('/:listingId', getListingDetails);

router.delete('/:listingId', deleteListing);

router.put('/:listingId', updateListing);

export default router;
