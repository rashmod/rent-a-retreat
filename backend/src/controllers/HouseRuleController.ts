import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateHouseRule from '../seedDB/houseRule';

export const getAllHouseRule = async (req: Request, res: Response) => {
	try {
		const houseRules = await prisma.houseRule.findMany();

		res.status(200).json(houseRules);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to get all houseRules' });
	}
};

export const postHouseRule = async (req: Request, res: Response) => {
	try {
		const { ruleTitle, ruleDescription } = generateHouseRule();

		const houseRule = await prisma.houseRule.create({
			data: {
				ruleTitle,
				ruleDescription,
			},
		});

		res.status(200).json(houseRule);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to post houseRule' });
	}
};

export const deleteHouseRule = async (req: Request, res: Response) => {
	try {
		const { houseRuleId } = req.params;

		const houseRule = await prisma.houseRule.delete({
			where: {
				houseRuleId,
			},
		});

		res.status(200).json(houseRule);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete houseRule' });
	}
};
