import { prisma } from '../db/prisma';
import { generateCompleteUser } from './generateCompleteUser';
import { randomNumInRange } from './utils';

const addUsersToDB = async (num = 1) => {
	for (let i = 0; i < num; i++) {
		const delay = randomNumInRange(1000, 500); // Random delay between 500ms and 1000ms
		await new Promise((resolve) => setTimeout(resolve, delay));

		const { creationObj, includeObj } = await generateCompleteUser();
		const user = await prisma.user.create({
			data: creationObj,
			include: includeObj,
		});

		console.log(
			`User ${i + 1} with name ${user.firstName} ${
				user.lastName
			} has been inserted into the database.`
		);
	}
};

export default addUsersToDB;
