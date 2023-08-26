import { z } from 'zod';

export const PageOneSchema = z.object({
	listingName: z.string().min(1, 'First Name is required'),
	bedroom: z.union([
		z.literal('', {
			errorMap: () => ({ message: 'Bedroom must be a number' }),
		}),
		z.number().min(1, 'Must have at least 1 bedroom'),
	]),
	bathroom: z.union([
		z.literal('', {
			errorMap: () => ({ message: 'Bathroom must be a number' }),
		}),
		z.number().min(1, 'Must have at least 1 bathroom'),
	]),
	pricePerNight: z.union([
		z.literal('', {
			errorMap: () => ({ message: 'Price must be a number' }),
		}),
		z.number().min(1, 'Price must be greater than zero'),
	]),
	cleaningFee: z.union([
		z.literal('', {
			errorMap: () => ({ message: 'Cleaning Fee must be a number' }),
		}),
		z.number().min(0, 'Cleaning Fee cannot be negative'),
	]),
	maxGuest: z.union([
		z.literal('', {
			errorMap: () => ({ message: 'Max Guest must be a number' }),
		}),
		z.number().min(1, 'Must accommodate at least 1 guest'),
	]),
});

export type TPageOneSchema = z.infer<typeof PageOneSchema>;
