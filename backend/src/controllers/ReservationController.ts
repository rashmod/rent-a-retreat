import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateReservation from '../seedDB/reservation';

// todo should a guest only able to place on reservation per listing?

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
