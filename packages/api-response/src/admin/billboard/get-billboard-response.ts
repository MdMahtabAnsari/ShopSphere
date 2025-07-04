import {z} from "zod";
import {id, url,label,description} from "@workspace/schema/common";
import {createdAt, updatedAt} from "../../common/index.js";
import { paginationSchema } from "@workspace/schema/common/page";
import { apiResponseSchema } from "../../index.js";

export const billboardSchema = z.object({
    id,
    imageUrl:url,
    label,
    description,
    storeId: id,
    createdAt: createdAt,
    updatedAt: updatedAt,
});

export const billboardsSchema = z.object({
    billboards: z.array(billboardSchema),
    pagination: paginationSchema
});

export const getBillboardsResponseSchema = apiResponseSchema.extend({
    data: billboardsSchema
});

export const getBillboardResponseSchema = apiResponseSchema.extend({
    data: billboardSchema
})

export const getAllBillboardsResponseSchema = apiResponseSchema.extend({
    data: z.array(billboardSchema)
})

export type GetBillboardsResponse = z.infer<typeof getBillboardsResponseSchema>;
export type GetBillboardResponse = z.infer<typeof getBillboardResponseSchema>;
export type GetAllBillboardsResponse = z.infer<typeof getAllBillboardsResponseSchema>;
export type BillboardSchema = z.infer<typeof billboardSchema>;
export type BillboardsSchema = z.infer<typeof billboardsSchema>;




