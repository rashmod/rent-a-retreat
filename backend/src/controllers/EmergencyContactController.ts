import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateEmergencyContact from '../seedDB/emergencyContact';

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
