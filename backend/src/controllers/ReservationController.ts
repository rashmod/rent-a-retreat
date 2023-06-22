import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateReservation from '../seedDB/generators/reservation';

// todo should a guest only able to place on reservation per listing?
// todo should i make a new controller for reservation of single listing

// @desc Get all reservation for guest
// @route GET /api/reservation/:guestId
// @access Guest
export const getAllReservations = async (req: Request, res: Response) => {
	try {
		const { guestId } = req.params;

		const reservations = await prisma.reservation.findMany({
			where: { guestId },
		});

		res.status(200).json(reservations);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to get all reservations' });
	}
};

// @desc Post reservation
// @route POST /api/reservation/:guestId/:listingId
// @access Guest
export const postReservation = async (req: Request, res: Response) => {
	try {
		const { guestId, listingId } = req.params;

		const {
			checkInDate,
			checkOutDate,
			tax,
			totalCost,
			numOfGuests,
			isCancelled,
		} = generateReservation();

		const reservation = await prisma.reservation.create({
			data: {
				checkInDate,
				checkOutDate,
				tax,
				totalCost,
				numOfGuests,
				isCancelled,
				listingId,
				guestId,
			},
		});

		res.status(200).json(reservation);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to post reservation' });
	}
};

// @desc Delete reservation
// @route DELETE /api/reservation/:guestId/:listingId/:reservationId
// @access Guest
export const deleteReservation = async (req: Request, res: Response) => {
	try {
		const { guestId, listingId, reservationId } = req.params;

		const reservation = await prisma.reservation.delete({
			where: { reservationId },
		});

		res.status(200).json(reservation);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete reservation' });
	}
};
