import { Request, Response } from 'express';

import { prisma } from '../db/prisma';
import generateListing from '../seedDB/generators/listing';
import uploadImageToS3 from '../utils/uploadImageToS3';
import generateAddress from '../seedDB/generators/address';
import createValidArray from '../utils/createValidArray';

// @desc Get all listings
// @route GET /api/listings
// @access Public
export const getAllListings = async (req: Request, res: Response) => {
	try {
		const listings = await prisma.listing.findMany({
			include: { listingImage: { where: { position: 1 } } },
			take: 10,
			orderBy: { createdAt: 'desc' },
		});

		res.status(200).json(listings);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to get all listings' });
	}
};

// @desc Get listing details
// @route GET /api/listings/:listingId
// @access Public
export const getListingDetails = async (req: Request, res: Response) => {
	try {
		const { listingId } = req.params;

		const listing = await prisma.listing.findFirst({
			where: {
				listingId,
			},
			include: {
				address: true,
				amenity: true,
				category: true,
				host: {
					select: {
						user: {
							select: {
								firstName: true,
								lastName: true,
							},
						},
					},
				},
				houseRule: true,
				listingImage: true,
				reservation: true,
			},
		});
		// todo sort listing image array by position before returning

		res.status(200).json(listing);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to get listing' });
	}
};

// @desc Post listing
// @route POST /api/listings
// @access Host
export const postListing = async (req: Request, res: Response) => {
	try {
		const {
			hostId,
			categoryIds,
			amenityIds,
			houseRuleIds,
		}: {
			hostId: string;
			categoryIds: string | string[];
			amenityIds: string | string[];
			houseRuleIds: string | string[];
		} = req.body;
		const images = req.files as Express.Multer.File[] | undefined;

		const s3ImageArray = await uploadImageToS3(images);

		const categoryArray = createValidArray(categoryIds);
		const amenityArray = createValidArray(amenityIds);
		const houseRuleArray = createValidArray(houseRuleIds);

		const {
			listingName,
			bedroomCount,
			bathroomCount,
			pricePerNight,
			cleaningFee,
			maxGuest,
			avgRating,
			totalRatingCount,
			latitude,
			longitude,
			isRefundable,
		} = generateListing();
		const address = generateAddress();

		const listing = await prisma.listing.create({
			data: {
				listingName,
				bedroomCount,
				bathroomCount,
				pricePerNight,
				cleaningFee,
				maxGuest,
				avgRating,
				totalRatingCount,
				latitude,
				longitude,
				isRefundable,
				host: {
					connect: {
						hostId,
					},
				},
				category: {
					connect: categoryArray.map((categoryId) => ({
						categoryId,
					})),
				},
				amenity: {
					connect: amenityArray.map((amenityId) => ({ amenityId })),
				},
				houseRule: {
					connect: houseRuleArray.map((houseRuleId) => ({
						houseRuleId,
					})),
				},
				listingImage: {
					create: s3ImageArray.map((item) => ({
						listingImageName: item.listingImageName,
						position: item.position,
					})),
				},
				address: {
					create: address,
				},
			},
			include: {
				category: true,
				amenity: true,
				houseRule: true,
				listingImage: true,
				address: true,
			},
		});

		res.status(200).json(listing);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to post listing' });
	}
};

// @desc Update listing
// @route PUT /api/listings/:listingId
// @access Host
export const updateListing = async (req: Request, res: Response) => {
	try {
		const {
			hostId,
			categoryIds,
			amenityIds,
			houseRuleIds,
			listingImage,
		}: {
			hostId: string;
			categoryIds: string[];
			amenityIds: string[];
			houseRuleIds: string[];
			listingImage: { photoUrl: string; position: number }[];
		} = req.body;

		const { listingId } = req.params;

		const {
			listingName,
			bedroomCount,
			bathroomCount,
			pricePerNight,
			cleaningFee,
			maxGuest,
			avgRating,
			totalRatingCount,
			latitude,
			longitude,
			isRefundable,
		} = generateListing();
		const body = req.body;

		// todo handle images update from s3

		const address = await prisma.address.findUnique({
			where: { listingId },
		});
		const listingImages = await prisma.listingImage.findMany({
			where: { listingId },
		});
		const reservations = await prisma.reservation.findMany({
			where: { listingId },
		});

		const listing = await prisma.listing.update({
			where: { listingId },
			data: {
				listingName,
				// ...(address
				// 	? {
				// 			address: {
				// 				update: address,
				// 			},
				// 	  }
				// 	: {}),
			},
			include: {
				category: true,
				amenity: true,
				houseRule: true,
				listingImage: true,
				address: true,
			},
		});

		res.status(200).json(listing);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to update listing' });
	}
};

// @desc Delete listing
// @route DELETE /api/listings/:listingId
// @access Host
export const deleteListing = async (req: Request, res: Response) => {
	try {
		const { listingId } = req.params;

		// todo delete images from s3

		const listing = await prisma.$transaction([
			prisma.address.deleteMany({ where: { listingId } }),
			prisma.listingImage.deleteMany({ where: { listingId } }),
			prisma.reservation.deleteMany({ where: { listingId } }),

			prisma.listing.delete({ where: { listingId } }),
		]);

		res.status(200).json(listing);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete listing' });
	}
};
