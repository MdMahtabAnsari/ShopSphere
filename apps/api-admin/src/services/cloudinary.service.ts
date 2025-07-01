import cloudinary from '../configs/cloudinary.config.js'
import {SignApiOptions} from 'cloudinary'
import {InternalServerError} from "@workspace/api-error/error";
import serverConfig from "../configs/server.config.js";

class CloudinaryService {

    createSignature(options: SignApiOptions) {
        try {
            const timestamp = Math.floor(Date.now() / 1000)
            const signature = cloudinary.utils.api_sign_request({
                ...options,
                timestamp
            }, serverConfig.CLOUDINARY_API_SECRET);
            return {
                signature,
                timestamp
            };

        } catch (error) {
            console.error("Error creating Cloudinary signature:", error);
            throw new InternalServerError("Failed to create Cloudinary signature");
        }

    }
}

export const cloudinaryService = new CloudinaryService();