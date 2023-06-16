import { Router } from 'express';
import { prisma } from '../db/prisma';
import {
	deleteListing,
	getAllListings,
	getListingDetails,
	postListing,
} from '../controllers/ListingController';

const router = Router();

router.get('/', getAllListings);

router.post('/', postListing);

router.get('/:listingId', getListingDetails);

router.delete('/:listingId', deleteListing);

export default router;
