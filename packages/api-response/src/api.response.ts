import {z} from 'zod';

export const status = z.enum(['success', 'fail', 'error']);

export const apiResponseSchema = z.object({
    message: z.string(),
    status: status,
    isOperational: z.boolean(),
    data: z.any().nullable(),
});

export type ApiResponseSchema = z.infer<typeof apiResponseSchema>;