import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateAmenity from '../seedDB/amenity';

export const getAllAmenities = async (req: Request, res: Response) => {
	try {
		const amenities = await prisma.amenity.findMany();

		res.status(200).json(amenities);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to get all amenities' });
	}
};

export const postAmenity = async (req: Request, res: Response) => {
	try {
		const { amenityTitle, amenityDescription } = generateAmenity();

		const amenity = await prisma.amenity.create({
			data: {
				amenityTitle,
				amenityDescription,
			},
		});

		res.status(200).json(amenity);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to post amenity' });
	}
};

export const deleteAmenity = async (req: Request, res: Response) => {
	try {
		const { amenityId } = req.params;

		const amenity = await prisma.$transaction([
			prisma.amenity.update({
				where: {
					amenityId,
				},
				data: {
					listing: {
						set: [],
					},
				},
			}),

			prisma.amenity.delete({
				where: {
					amenityId,
				},
			}),
		]);

		res.status(200).json(amenity);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete amenity' });
	}
};
