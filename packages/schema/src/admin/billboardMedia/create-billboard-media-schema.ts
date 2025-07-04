import {z} from "zod"
import {id} from "../../common/index.js";

export const createBillboardMediaSchema = z.object({
    public_id: z.string({message:"Public ID should be string"}),
    resource: z.enum(["image", "video","raw","auto"], {message:"Resource should be either image or video"}),
    secure_url: z.string({message:"Secure URL should be string"}).url({message:"Secure URL should be a valid URL"}),
    width: z.number({message:"Width should be a number"}).int({message:"Width should be an integer"}).positive({message:"Width should be a positive number"}),
    height: z.number({message:"Height should be a number"}).int({message:"Height should be an integer"}).positive({message:"Height should be a positive number"}),
    playback_url: z.string({message:"Playback URL should be string"}).url({message:"Playback URL should be a valid URL"}).nullable(),
    billboardId: id,

});

export type CreateBillboardMediaSchema = z.infer<typeof createBillboardMediaSchema>;