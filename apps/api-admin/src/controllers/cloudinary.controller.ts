import {cloudinaryService} from "../services/cloudinary.service.js";
import {Request, Response,NextFunction} from "express";
import {getAuth} from '@clerk/express';
import {UnauthorisedError} from "@workspace/api-error/error";
import {SignApiOptions} from 'cloudinary';

class CloudinaryController{
    async createSignature(req: Request, res: Response, next: NextFunction) {
        const {userId} = getAuth(req);
        if(!userId) {
            return next(new UnauthorisedError());
        }
        const {paramsToSign} = req.body as { paramsToSign: SignApiOptions };
        try {
            const signature = cloudinaryService.createSignature(paramsToSign);
            res.status(200).json(signature);
        } catch (error) {
            next(error);
        }
    }
}

export const cloudinaryController = new CloudinaryController();