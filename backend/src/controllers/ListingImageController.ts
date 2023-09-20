import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateListingImage from '../seedDB/generators/listingImage';

// @desc Post listing images
// @route POST /api/listing/:listingId
// @access Host
export const postListingImage = async (req: Request, res: Response) => {
	try {
		const { listingId } = req.params;
		const { listingImageName, position } = generateListingImage();

		const listingImage = await prisma.listingImage.create({
			data: {
				listingImageName,
				position,
				listing: {
					connect: {
						listingId,
					},
				},
			},
		});

		res.status(200).json(listingImage);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to post listingImage' });
	}
};

// @desc Delete listing images
// @route DELETE /api/listing/:listingId/:listingImageId
// @access Host
export const deleteListingImage = async (req: Request, res: Response) => {
	try {
		const { listingImageId } = req.params;

		const listingImage = await prisma.listingImage.delete({
			where: {
				listingImageId,
			},
		});

		res.status(200).json(listingImage);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete listingImage' });
	}
};
