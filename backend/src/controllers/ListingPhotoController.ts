import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateListingPhoto from '../seedDB/listingPhoto';

export const postListingPhoto = async (req: Request, res: Response) => {
	try {
		const { listingId } = req.params;
		const { photoUrl, position } = generateListingPhoto();

		const listingPhoto = await prisma.listingPhoto.create({
			data: {
				photoUrl,
				position,
				listing: {
					connect: {
						listingId,
					},
				},
			},
		});

		res.status(200).json(listingPhoto);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to post listingPhoto' });
	}
};

export const deleteListingPhoto = async (req: Request, res: Response) => {
	try {
		const { listingPhotoId } = req.params;

		const listingPhoto = await prisma.listingPhoto.delete({
			where: {
				listingPhotoId,
			},
		});

		res.status(200).json(listingPhoto);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete listingPhoto' });
	}
};
