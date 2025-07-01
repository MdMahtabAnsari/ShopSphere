import {z} from "zod";
export const id= z.string({message:"id must be string"}).uuid({message:"id must be valid uuid"});
export const imageUrl = z.string({message:"imageUrl must be string"}).url({message:"imageUrl must be valid url"});
export const label = z.string({message:"label must be string"}).min(3, {message:"label must be at least 3 characters long"}).max(100, {message:"label must be at most 100 characters long"});
export const description = z.string({message:"description must be string"}).min(10, {message:"description must be at least 10 characters long"}).max(500, {message:"description must be at most 500 characters long"});