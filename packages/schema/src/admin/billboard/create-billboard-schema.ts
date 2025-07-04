import {z} from 'zod';
import {id,description,label,media} from '../../common/index.js'

export const createBillboardSchema = z.object({
    storeId: id,
    media: media,
    label: label,
    description: description,
})

export type CreateBillboardSchema = z.infer<typeof createBillboardSchema>;
