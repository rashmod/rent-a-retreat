import { z } from 'zod';

export const PageFourSchema = z.object({
	longitude: z.union([
		z.literal('', {
			errorMap: () => ({ message: 'Longitude must be a number' }),
		}),
		z.number().min(-180).max(180),
	]),
	latitude: z.union([
		z.literal('', {
			errorMap: () => ({ message: 'Latitude must be a number' }),
		}),
		z.number().min(-90).max(90),
	]),
});

export type TPageFourSchema = z.infer<typeof PageFourSchema>;
