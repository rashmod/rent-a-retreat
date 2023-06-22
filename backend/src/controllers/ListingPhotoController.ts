import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateListingPhoto from '../seedDB/generators/listingPhoto';

// @desc Post listing photos
// @route POST /api/listing/:listingId
// @access Host
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

// @desc Delete listing photos
// @route DELETE /api/listing/:listingId/:listingPhotoId
// @access Host
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
