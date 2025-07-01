import {createStoreSchema} from "./index.js";
import {id} from "../../common/index.js"
import {z} from "zod";

export const updateStoreSchema = createStoreSchema.extend({
    id: id
});

export type UpdateStoreSchema = z.infer<typeof updateStoreSchema>;