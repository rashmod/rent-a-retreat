import { Request, Response } from 'express';
import { prisma } from '../db/prisma';
import generateCategory from '../seedDB/category';

export const getAllCategories = async (req: Request, res: Response) => {
	try {
		const categories = await prisma.category.findMany();

		res.status(200).json(categories);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to get all categories' });
	}
};

export const postCategory = async (req: Request, res: Response) => {
	try {
		const { categoryTitle, categoryDescription } = generateCategory();

		const category = await prisma.category.create({
			data: {
				categoryTitle,
				categoryDescription,
			},
		});

		res.status(200).json(category);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to post category' });
	}
};

export const deleteCategory = async (req: Request, res: Response) => {
	try {
		const { categoryId } = req.params;

		const category = await prisma.category.delete({
			where: {
				categoryId,
			},
		});

		res.status(200).json(category);
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to delete category' });
	}
};
