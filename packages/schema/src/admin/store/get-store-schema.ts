import {z} from "zod";

export const page = z.string({message:"page must be string"}).refine((value) => !isNaN(parseInt(value)) && parseInt(value)>0,{message:"page must be number and greater than 0"});
export const limit = z.string({message:"limit must be string"}).refine((value) => !isNaN(parseInt(value)) && parseInt(value)>0,{message:"limit must be number and greater than 0"});
export const id= z.string({message:"id must be string"}).uuid({message:"id must be valid uuid"});
export const getStoreSchema = z.object({
    page: page,
    limit: limit,
});

export const getStoreByIdSchema = z.object({
    id: id,
});

export type GetStoreSchema = z.infer<typeof getStoreSchema>;
export type GetStoreByIdSchema = z.infer<typeof getStoreByIdSchema>;