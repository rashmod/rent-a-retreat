import connectDB, { prisma } from '../db/prisma';
import generateUser, { generateGuest, generateHost } from './generators/user';
import generateAddress from './generators/address';
import generateProfilePhoto from './generators/profilePhoto';
import { TUser } from './types';
import {
	flipThreeSidedCoin,
	generateArray,
	randomNumInRange,
	seedListing,
} from './utils';
import generateEmergencyContact from './generators/emergencyContact';
import { getAmenities, getCategories, getHouseRules } from './getCAH';

export const generateCompleteUser = async () => {
	const coinFlip = flipThreeSidedCoin();

	const user = generateUser();
	const profilePhoto = generateProfilePhoto();

	const guest = generateGuest();

	const host = generateHost();
	const hostAddress = generateAddress();
	const emergencyContactArray = generateArray(
		generateEmergencyContact,
		randomNumInRange(5, 1)
	);

	const categories = await getCategories();
	const amenities = await getAmenities();
	const houseRules = await getHouseRules();

	const creationObj: TUser = user;
	const includeObj = {
		profilePhoto: true,
		guest: true,
		host: {
			include: {
				emergencyContact: true,
				address: true,
				listing: {
					include: {
						address: true,
						listingPhoto: true,
						category: true,
						amenity: true,
						houseRule: true,
					},
				},
			},
		},
	};

	const listing = seedListing(categories, amenities, houseRules);

	creationObj.profilePhoto = { create: profilePhoto };

	if (coinFlip === 1) {
		creationObj.guest = { create: guest };
	} else if (coinFlip === 2) {
		creationObj.host = {
			create: {
				...host,
				address: { create: hostAddress },
				emergencyContact: {
					create: emergencyContactArray.map((item) => ({ ...item })),
				},
				listing: {
					create: listing.map((item) => ({ ...item })),
				},
			},
		};
	} else {
		creationObj.guest = { create: guest };
		creationObj.host = {
			create: {
				...host,
				address: { create: hostAddress },
				emergencyContact: {
					create: emergencyContactArray.map((item) => ({ ...item })),
				},
				listing: {
					create: listing.map((item) => ({ ...item })),
				},
			},
		};
	}

	return { creationObj, includeObj };

	await prisma.user.create({
		data: creationObj,
	});
};
