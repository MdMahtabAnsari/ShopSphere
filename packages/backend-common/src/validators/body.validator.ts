import {AnyZodObject} from "zod";
import {NextFunction, Request, Response} from "express";
import {BadRequestError} from "@workspace/api-error/error";
import {fromError} from "zod-validation-error";

export const bodyValidator = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.body);
        next();
    } catch (error) {
        next(new BadRequestError(fromError(error).message));
    }
}

