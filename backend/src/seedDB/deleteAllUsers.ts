import { prisma } from '../db/prisma';

const deleteAllUsers = async () => {
	await prisma.$transaction([
		prisma.address.deleteMany(),
		prisma.emergencyContact.deleteMany(),

		prisma.address.deleteMany(),
		prisma.listingImage.deleteMany(),
		prisma.reservation.deleteMany(),
		prisma.listing.deleteMany(),

		prisma.host.deleteMany(),

		prisma.reservation.deleteMany(),
		prisma.guest.deleteMany(),

		prisma.profileImage.deleteMany(),

		prisma.user.deleteMany(),
	]);
};

export default deleteAllUsers;
