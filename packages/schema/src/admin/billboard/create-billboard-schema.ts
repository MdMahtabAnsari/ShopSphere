import {z} from 'zod';
import {id,imageUrl,description,label} from '../../common/index.js'

export const createBillboardSchema = z.object({
    storeId: id,
    imageUrl: imageUrl,
    label: label,
    description: description,
})

export type CreateBillboardSchema = z.infer<typeof createBillboardSchema>;
