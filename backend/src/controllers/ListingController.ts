import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateListing from '../seedDB/listing';

// todo add category amenity photo house rules when posting

export const getAllListings = async (req: Request, res: Response) => {
	try {
		const listings = await prisma.listing.findMany();

		res.status(200).json(listings);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to get all listings' });
	}
};

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
				listingPhoto: true,
				reservation: true,
			},
		});

		res.status(200).json(listing);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to get listing' });
	}
};

export const postListing = async (req: Request, res: Response) => {
	try {
		const { hostId } = req.body;
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
			},
		});

		res.status(200).json(listing);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to post listing' });
	}
};

export const deleteListing = async (req: Request, res: Response) => {
	try {
		const { listingId } = req.params;

		const listing = await prisma.$transaction([
			prisma.listingPhoto.deleteMany({
				where: {
					listingId,
				},
			}),
			prisma.address.deleteMany({
				where: {
					ownerId: listingId,
				},
			}),
			prisma.listing.update({
				where: {
					listingId,
				},
				data: {
					amenity: {
						set: [],
					},
					category: {
						set: [],
					},
					houseRule: {
						set: [],
					},
				},
			}),
			prisma.listing.delete({
				where: {
					listingId,
				},
			}),
		]);

		res.status(200).json(listing);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete listing' });
	}
};
