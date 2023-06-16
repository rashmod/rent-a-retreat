import { Router } from 'express';
import { prisma } from '../db/prisma';
import {
	deleteListing,
	getAllListings,
	getListing,
	postListing,
} from '../controllers/ListingController';

const router = Router();

router.get('/', getAllListings);

router.post('/', postListing);

router.get('/:listingId', getListing);

router.delete('/:listingId', deleteListing);

export default router;
