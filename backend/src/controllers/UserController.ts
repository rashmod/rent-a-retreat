import { Request, Response } from 'express';

export const getAllUsers = (req: Request, res: Response) => {
	res.send('get all users controller');
};

export const getUser = (req: Request, res: Response) => {
	const { userId } = req.params;
	res.send(`getting user: ${userId}`);
};

export const postUser = (req: Request, res: Response) => {
	const { name } = req.body;
	res.send(`posting user with name: ${name}`);
};

export const deleteUser = (req: Request, res: Response) => {
	const { userId } = req.params;
	res.send(`deleting user: ${userId}`);
};
