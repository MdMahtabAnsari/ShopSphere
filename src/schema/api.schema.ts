import {z} from 'zod';

const status= z.enum(['success', 'error','fail']);

export const responseSchema = z.object({
    status:status,
    message:z.string(),
    data:z.any()
});

export type ResponseSchemaType = z.infer<typeof responseSchema>;