import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateUser, { generateGuest, generateHost } from '../seedDB/user';

// todo get all hosts
// todo get all guests
// todo error checking
// todo add profile photo when posting user
// todo delete all related listing to user

// @desc Get all users
// @route GET /api/users
// @access Admin
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

// @desc Get user details
// @route GET /api/users/:userId
// @access User
export const getUserDetails = async (req: Request, res: Response) => {
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

// @desc Post user
// @route POST /api/users
// @access Public
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

// @desc Post host
// @route POST /api/users/host
// @access User
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
						userId,
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

// @desc Post guest
// @route POST /api/users/guest
// @access User
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

// @desc Delete user
// @route DELETE /api/users/:userId
// @access User
export const deleteUser = async (req: Request, res: Response) => {
	try {
		const { userId } = req.params;

		const user = await prisma.$transaction([
			prisma.address.deleteMany({ where: { host: { userId } } }),
			prisma.emergencyContact.deleteMany({ where: { host: { userId } } }),

			prisma.address.deleteMany({
				where: { listing: { host: { userId } } },
			}),
			prisma.listingPhoto.deleteMany({
				where: { listing: { host: { userId } } },
			}),
			prisma.reservation.deleteMany({
				where: { listing: { host: { userId } } },
			}),
			prisma.listing.deleteMany({ where: { host: { userId } } }),

			prisma.host.deleteMany({ where: { userId } }),

			prisma.reservation.deleteMany({ where: { guest: { userId } } }),
			prisma.guest.deleteMany({ where: { userId } }),

			prisma.profilePhoto.deleteMany({ where: { userId } }),

			prisma.user.delete({ where: { userId } }),
		]);

		res.status(200).json({ success: true });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete user' });
	}
};

// @desc Delete host
// @route DELETE /api/users/host/:hostId
// @access Host
export const deleteHost = async (req: Request, res: Response) => {
	try {
		const { hostId } = req.params;

		const host = await prisma.$transaction([
			prisma.address.deleteMany({ where: { hostId } }),
			prisma.emergencyContact.deleteMany({ where: { hostId } }),

			prisma.address.deleteMany({ where: { listing: { hostId } } }),
			prisma.listingPhoto.deleteMany({ where: { listing: { hostId } } }),
			prisma.reservation.deleteMany({ where: { listing: { hostId } } }),

			prisma.listing.deleteMany({ where: { hostId } }),

			prisma.host.delete({ where: { hostId } }),
		]);

		res.status(200).json({ success: true });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete user' });
	}
};

// @desc Delete guest
// @route DELETE /api/users/guest/:guestId
// @access Guest
export const deleteGuest = async (req: Request, res: Response) => {
	try {
		const { guestId } = req.params;

		const guest = await prisma.$transaction([
			prisma.reservation.deleteMany({ where: { guestId } }),
			prisma.guest.delete({ where: { guestId } }),
		]);

		res.status(200).json({ success: true });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete user' });
	}
};
