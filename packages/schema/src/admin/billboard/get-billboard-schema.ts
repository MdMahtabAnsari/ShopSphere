import {z} from 'zod';
import {id} from '../../common/index.js';

export const storeIdBillboardIdSchema = z.object({
    storeId: id,
    billboardId: id,
})

export type StoreIdBillboardIdSchema = z.infer<typeof storeIdBillboardIdSchema>;