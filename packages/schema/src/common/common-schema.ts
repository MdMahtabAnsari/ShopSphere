import {z} from "zod";
export const id= z.string({message:"id must be string"}).uuid({message:"id must be valid uuid"});