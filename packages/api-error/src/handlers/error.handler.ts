import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/index.js";
import { MulterError } from 'multer'

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
    }
    else if (err instanceof MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
            res.status(400).json({
                message: "File size exceeds the allowed limit",
                status: "error",
                isOperational: true,
                data: null,
            });
        }
        else {
            console.error("Unhandled Error Multer Error:", err);
            res.status(500).json({
                message: "Internal Server Error",
                status: "error",
                isOperational: false,
                data: null,
            });
        }
    }
    else {
        console.error("Unhandled Error:", err);
        res.status(500).json({
            message: "Internal Server Error",
            status: "error",
            isOperational: false,
            data: null,
        });
    }
};
