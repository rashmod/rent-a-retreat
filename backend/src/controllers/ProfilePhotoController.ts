import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateProfilePhoto from '../seedDB/profilePhoto';

export const postProfilePhoto = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const { imgUrl } = generateProfilePhoto();

		const profilePhoto = await prisma.profilePhoto.create({
			data: {
				imgUrl,
				user: {
					connect: {
						userId,
					},
				},
			},
		});

		res.status(200).json(profilePhoto);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to post profilePhoto' });
	}
};

export const deleteProfilePhoto = async (req: Request, res: Response) => {
	try {
		const { profilePhotoId } = req.params;

		const profilePhoto = await prisma.profilePhoto.delete({
			where: {
				profilePhotoId,
			},
		});

		res.status(200).json(profilePhoto);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete profilePhoto' });
	}
};
