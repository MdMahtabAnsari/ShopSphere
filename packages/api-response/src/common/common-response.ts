import {z} from "zod";

export const createdAt = z.string({message: "createdAt must be a string"}).datetime({message: "createdAt must be a valid date string"});
export const updatedAt = z.string({message: "updatedAt must be a string"}).datetime({message: "updatedAt must be a valid date string"});