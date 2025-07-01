import {z} from "zod";
import {id} from "../../common/index.js"

export const getStoreByIdSchema = z.object({
    id: id,
});

export const getStoreByStoreIdSchema = z.object({
    storeId: id,
})

export type GetStoreByStoreIdSchema = z.infer<typeof getStoreByStoreIdSchema>;
export type GetStoreByIdSchema = z.infer<typeof getStoreByIdSchema>;