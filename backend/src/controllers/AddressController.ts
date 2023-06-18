import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateAddress from '../seedDB/address';
import { Prisma } from '@prisma/client';

interface IAddressData {
	unitNumber: string;
	streetName: string;
	addressLine: string;
	city: string;
	postalCode: string;
	state: string;
	country: string;
	listing?: { connect: { listingId: string } };
	listingId?: string;
	host?: { connect: { hostId: string } };
	hostId?: string;
}

// @desc Post address
// @route POST /api/address/:ownerId
// @access Host
export const postAddress = async (req: Request, res: Response) => {
	try {
		const { ownerId } = req.params;
		const {
			unitNumber,
			streetName,
			addressLine,
			city,
			postalCode,
			state,
			country,
		} = generateAddress();

		const isListing = await prisma.listing.findUnique({
			where: { listingId: ownerId },
			select: { listingId: true },
		});

		const isHost = await prisma.host.findUnique({
			where: { hostId: ownerId },
			select: { hostId: true },
		});

		const addressData: IAddressData = {
			unitNumber,
			streetName,
			addressLine,
			city,
			postalCode,
			state,
			country,
		};

		if (isListing) {
			addressData.listing = { connect: { listingId: ownerId } };
		} else if (isHost) {
			addressData.host = { connect: { hostId: ownerId } };
		}

		const address = await prisma.address.create({
			data: addressData as Prisma.AddressCreateInput,
		});

		res.status(200).json(address);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to post address' });
	}
};

// @desc Delete address
// @route DELETE /api/address/:ownerId/:addressId
// @access Host
export const deleteAddress = async (req: Request, res: Response) => {
	try {
		const { ownerId, addressId } = req.params;

		const address = await prisma.address.delete({ where: { addressId } });

		res.status(200).json(address);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete address' });
	}
};
