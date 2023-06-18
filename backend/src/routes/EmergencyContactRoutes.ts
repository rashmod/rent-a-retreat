import { Router } from 'express';
import {
	deleteEmergencyContact,
	getAllEmergencyContact,
	postEmergencyContact,
} from '../controllers/EmergencyContactController';

const router = Router();

router.get('/:hostId', getAllEmergencyContact);

router.post('/:hostId', postEmergencyContact);

router.delete('/:hostId/:emergencyContactId', deleteEmergencyContact);

export default router;
