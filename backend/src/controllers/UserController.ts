import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateUser, { generateGuest, generateHost } from '../seedDB/user';

// todo get all hosts
// todo get all guests
// todo error checking

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany();
		const serializedUsers = users.map((user) => ({
			...user,
			phoneNumber: user.phoneNumber.toString(),
		}));

		res.status(200).json(serializedUsers);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to get all users' });
	}
};

export const getUser = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;
		const user = await prisma.user.findFirst({
			where: {
				userId,
			},
		});

		if (!user) return res.status(404).json({ error: 'Failed to get user' });

		const serializedUser = {
			...user,
			phoneNumber: user.phoneNumber.toString(),
		};

		res.status(200).json(serializedUser);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to get user' });
	}
};

export const postUser = async (req: Request, res: Response) => {
	try {
		const { firstName, lastName, gender, email, phoneNumber, dateOfBirth } =
			generateUser();

		const user = await prisma.user.create({
			data: {
				firstName,
				lastName,
				gender,
				email,
				phoneNumber,
				dateOfBirth,
			},
		});

		const serializedUser = {
			...user,
			phoneNumber: user.phoneNumber.toString(),
		};
		res.status(200).json(serializedUser);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to create host' });
	}
};

export const postHost = async (req: Request, res: Response) => {
	try {
		const { userId } = req.body;
		const { avgRating, totalRatingCount } = generateHost();

		const host = await prisma.host.create({
			data: {
				avgRating,
				totalRatingCount,
				user: {
					connect: {
						userId: userId,
					},
				},
			},
			include: {
				user: true,
			},
		});

		const serializedHost = {
			...host,
			user: {
				...host.user,
				phoneNumber: host.user.phoneNumber.toString(),
			},
		};

		res.status(200).json(serializedHost);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to create host' });
	}
};

export const postGuest = async (req: Request, res: Response) => {
	try {
		const { userId } = req.body;
		const { avgRating, totalRatingCount } = generateGuest();

		const guest = await prisma.guest.create({
			data: {
				avgRating,
				totalRatingCount,
				user: {
					connect: {
						userId: userId,
					},
				},
			},
			include: {
				user: true,
			},
		});

		const serializedGuest = {
			...guest,
			user: {
				...guest.user,
				phoneNumber: guest.user.phoneNumber.toString(),
			},
		};

		res.status(200).json(serializedGuest);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to create guest' });
	}
};

export const deleteUser = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;

		const user = await prisma.$transaction([
			prisma.host.deleteMany({
				where: {
					userId,
				},
			}),
			prisma.guest.deleteMany({
				where: {
					userId,
				},
			}),
			prisma.user.delete({
				where: {
					userId,
				},
			}),
		]);

		console.log(user);
		res.status(200).json({ success: true });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete user' });
	}
};

export const deleteHost = async (req: Request, res: Response) => {
	try {
		const { hostId } = req.params;

		const host = await prisma.$transaction([
			prisma.host.delete({
				where: {
					hostId,
				},
			}),
		]);

		res.status(200).json({ success: true });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete user' });
	}
};

export const deleteGuest = async (req: Request, res: Response) => {
	try {
		const { guestId } = req.params;

		const guest = await prisma.$transaction([
			prisma.guest.delete({
				where: {
					guestId,
				},
			}),
		]);

		res.status(200).json({ success: true });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete user' });
	}
};
