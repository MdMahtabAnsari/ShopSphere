import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/index.js";

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (err instanceof AppError) {
        res.status(err.statusCode).json({
            message: err.message,
            status: err.status,
            isOperational: err.isOperational,
            data: null,
        });
    } else {
        console.error("Unhandled Error:", err);
        res.status(500).json({
            message: "Internal Server Error",
            status: "error",
            isOperational: false,
            data: null,
        });
    }
};
