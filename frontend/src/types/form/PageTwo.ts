import { z } from 'zod';

export const PageTwoSchema = z.object({
	isRefundable: z.boolean(),
	percentRefundable: z
		.union([
			z.literal('', {
				errorMap: () => ({
					message: 'Percent Refundable must be a number',
				}),
			}),
			z.number().min(5, 'Must refund at least 5%'),
		])
		.optional(),
	daysBeforeCancellation: z
		.union([
			z.literal('', {
				errorMap: () => ({
					message: 'Days before cancellation must be a number',
				}),
			}),
			z.number().min(0, 'Must be greater than or equal to zero'),
		])
		.optional(),
});

export type TPageTwoSchema = z.infer<typeof PageTwoSchema>;
