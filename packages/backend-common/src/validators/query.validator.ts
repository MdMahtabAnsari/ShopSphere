import {AnyZodObject} from "zod";
import {NextFunction, Request, Response} from "express";
import {BadRequestError} from "@workspace/api-error/error";
import {fromError} from "zod-validation-error";

export const queryValidator = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {
    try {
        schema.parse(req.query);
        next();
    } catch (error) {
        next(new BadRequestError(fromError(error).message));
    }
}