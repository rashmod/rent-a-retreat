import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateProfileImage from '../seedDB/generators/profileImage';

// @desc Post user profile image
// @route POST /api/user/:userId
// @access User
export const postProfileImage = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const { profileImageName } = generateProfileImage();

		const profileImage = await prisma.profileImage.create({
			data: {
				profileImageName,
				user: {
					connect: {
						userId,
					},
				},
			},
		});

		res.status(200).json(profileImage);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to post profileImage' });
	}
};

// @desc Delete profile image
// @route DELETE /api/user/:userId/:profileImageId
// @access User
export const deleteProfileImage = async (req: Request, res: Response) => {
	try {
		const { userId, profileImageId } = req.params;

		const profileImage = await prisma.profileImage.delete({
			where: {
				profileImageId,
			},
		});

		res.status(200).json(profileImage);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete profileImage' });
	}
};
