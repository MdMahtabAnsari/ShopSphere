import {z} from "zod";
import {page, limit} from "../../common/page/index.js";
import {id} from "../../common/index.js"

export const getStoreSchema = z.object({
    page: page,
    limit: limit,
});

export const getStoreByIdSchema = z.object({
    id: id,
});

export type GetStoreSchema = z.infer<typeof getStoreSchema>;
export type GetStoreByIdSchema = z.infer<typeof getStoreByIdSchema>;