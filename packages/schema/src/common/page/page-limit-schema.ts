import { z } from "zod";

export const page = z.string({message:"page must be string"}).refine((value) => !isNaN(parseInt(value)) && parseInt(value)>0,{message:"page must be number and greater than 0"});
export const limit = z.string({message:"limit must be string"}).refine((value) => !isNaN(parseInt(value)) && parseInt(value)>0,{message:"limit must be number and greater than 0"});

const pageInt = z.number({message:"page must be number"}).int().positive({message:"page must be greater than 0"});
const limitInt = z.number({message:"limit must be number"}).int().positive({message:"limit must be greater than 0"});


export const paginationSchema = z.object({
    currentPage:pageInt,
    limit: limitInt,
    totalPages: pageInt
});

export const pageLimitSchema = z.object({
    page: page,
    limit: limit
});

export type PaginationSchema = z.infer<typeof paginationSchema>;
export type PageLimitSchema = z.infer<typeof pageLimitSchema>;