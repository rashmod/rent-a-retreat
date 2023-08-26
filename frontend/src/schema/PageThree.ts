import { z } from 'zod';

export const PageThreeSchema = z.object({
	unitNumber: z.string().min(1, 'Unit Number is required'),
	streetName: z.string().min(1, 'Street Name is required'),
	addressLine: z.string().min(1, 'Address Line is required'),
	city: z.string().min(1, 'City is required'),
	postalCode: z.string().min(1, 'Postal Code is required'),
	state: z.string().min(1, 'State is required'),
	country: z.string().min(1, 'Country is required'),
});

export type TPageThreeSchema = z.infer<typeof PageThreeSchema>;
