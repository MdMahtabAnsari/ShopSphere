import { Request, Response, NextFunction } from 'express';
import { BadRequestError } from '@workspace/api-error/error';
import serverConfig from './../configs/server.config.js';
import { safeDeleteFile } from '../utils/index.js';

export const fileSizeValidator = async (req: Request, res: Response, next: NextFunction) => {
    const file = req.file;
    if (!file) {
        return next(new BadRequestError('No file uploaded'));
    }
    const isImage = file.mimetype.startsWith("image/");
    const isVideo = file.mimetype.startsWith("video/");
    if (!isImage && !isVideo) {
        await safeDeleteFile(file.path);
        return next(new BadRequestError('File must be an image or video'));
    }
    if (isImage && file.size > serverConfig.IMAGE_SIZE) {
        await safeDeleteFile(file.path);
        return next(new BadRequestError(`Image size exceeds the limit of ${serverConfig.IMAGE_SIZE / (1024 * 1024)} MB`));
    }
    if (isVideo && file.size > serverConfig.VIDEO_SIZE) {
        await safeDeleteFile(file.path);
        return next(new BadRequestError(`Video size exceeds the limit of ${serverConfig.VIDEO_SIZE / (1024 * 1024)} MB`));
    }
    next();
};