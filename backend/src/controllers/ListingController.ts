import { Request, Response } from 'express';

export const getAllListings = (req: Request, res: Response) => {
	res.send('get all listings controller');
};

export const getListing = (req: Request, res: Response) => {
	const { listingId } = req.params;
	res.send(`getting listing: ${listingId}`);
};

export const postListing = (req: Request, res: Response) => {
	const { name } = req.body;
	res.send(`posting listing with name: ${name}`);
};

export const deleteListing = (req: Request, res: Response) => {
	const { listingId } = req.params;
	res.send(`deleting listing: ${listingId}`);
};
