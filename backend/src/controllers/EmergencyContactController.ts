import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateEmergencyContact from '../seedDB/generators/emergencyContact';

// @desc Get all emergency contacts of host
// @route GET /api/host/:hostId
// @access Host
export const getAllEmergencyContact = async (req: Request, res: Response) => {
	try {
		const { hostId } = req.params;

		const emergencyContacts = await prisma.emergencyContact.findMany({
			where: {
				hostId,
			},
		});

		const serializedEmergencyContacts = emergencyContacts.map(
			(contact) => ({
				...contact,
				phoneNumber: contact.phoneNumber.toString(),
			})
		);

		res.status(200).json(serializedEmergencyContacts);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to get all emergencyContacts' });
	}
};

// @desc Post emergency contact of host
// @route POST /api/host/:hostId
// @access Host
export const postEmergencyContact = async (req: Request, res: Response) => {
	try {
		const { hostId } = req.params;
		const { firstName, lastName, email, phoneNumber, relationship } =
			generateEmergencyContact();

		const emergencyContact = await prisma.emergencyContact.create({
			data: {
				firstName,
				lastName,
				email,
				phoneNumber,
				relationship,
				host: {
					connect: {
						hostId,
					},
				},
			},
		});

		const serializedEmergencyContact = {
			...emergencyContact,
			phoneNumber: emergencyContact.phoneNumber.toString(),
		};

		res.status(200).json(serializedEmergencyContact);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to post emergencyContact' });
	}
};

// @desc Delete emergency contact of host
// @route DELETE /api/host/:hostId/:emergencyContactId
// @access Host
export const deleteEmergencyContact = async (req: Request, res: Response) => {
	try {
		const { hostId, emergencyContactId } = req.params;

		const emergencyContact = await prisma.emergencyContact.delete({
			where: {
				emergencyContactId,
			},
		});

		res.status(200).json({ success: true });
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete emergencyContact' });
	}
};
