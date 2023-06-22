import { prisma } from '../db/prisma';

const deleteAllUsers = async () => {
	await prisma.$transaction([
		prisma.address.deleteMany(),
		prisma.emergencyContact.deleteMany(),

		prisma.address.deleteMany(),
		prisma.listingPhoto.deleteMany(),
		prisma.reservation.deleteMany(),
		prisma.listing.deleteMany(),

		prisma.host.deleteMany(),

		prisma.reservation.deleteMany(),
		prisma.guest.deleteMany(),

		prisma.profilePhoto.deleteMany(),

		prisma.user.deleteMany(),
	]);
};

export default deleteAllUsers;
