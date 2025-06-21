import {z} from "zod";

export const createStoreSchema = z.object({
    name: z.string({message:"name must be in string"}).min(1, { message: 'Name is required' }).max(50, { message: 'Name must be less than 50 characters' }),
});

export type CreateStoreSchema = z.infer<typeof createStoreSchema>;