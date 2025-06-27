import { z } from "zod";
import { paginationSchema } from "@workspace/schema/common/page";
import { id } from "@workspace/schema/common";
import { createdAt, updatedAt } from "../../common/index.js";
import { apiResponseSchema } from "../../index.js";

export const storeSchema = z.object({
    id,
    name: z.string(),
    createdAt,
    updatedAt,
});

export const storesSchema = z.object({
    stores:z.array(storeSchema),
    pagination:paginationSchema
});

export const getUserStoresResponseSchema= apiResponseSchema.extend({
    data: storesSchema,
});

export const getUserStoreResponseSchema = apiResponseSchema.extend({
    data: storeSchema,
});

export const getUserAllStoresResponseSchema = apiResponseSchema.extend({
    data: z.array(storeSchema),
});

export type GetUserStoresResponseSchema = z.infer<typeof getUserStoresResponseSchema>;
export type GetUserStoreResponseSchema = z.infer<typeof getUserStoreResponseSchema>;
export type GetUserAllStoresResponseSchema = z.infer<typeof getUserAllStoresResponseSchema>;
export type StoreSchema = z.infer<typeof storeSchema>;
export type StoresSchema = z.infer<typeof storesSchema>;