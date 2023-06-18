import { Router } from 'express';
import {
	deleteReservation,
	getAllReservations,
	postReservation,
} from '../controllers/ReservationController';

const router = Router();

router.get('/:guestId', getAllReservations);

router.post('/:guestId/:listingId', postReservation);

router.delete('/:guestId/:listingId/:reservationId', deleteReservation);

export default router;
