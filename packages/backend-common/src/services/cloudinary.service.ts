import cloudinary from "../configs/cloudinary.config.js";
import {InternalServerError} from "@workspace/api-error/error";
import { safeDeleteFile } from "../utils/safeDeleteFile.js";

class CloudinaryService {
    async uploadToCloudinary(filePath: string, folder?: string) {
        try {
            const result = await cloudinary.uploader.upload(filePath, {
                folder,
                resource_type: "auto",
                unique_filename: true,
                use_filename: true,
                overwrite: true,
                transformation: [
                    {quality: "auto", fetch_format: "auto"},
                ],
            });
            return result;
        } catch (error) {
            console.error("Cloudinary upload error:", error);
            throw new InternalServerError("Failed to upload file to Cloudinary");
        }
        finally{
            await safeDeleteFile(filePath);
        }
    }
}

export const cloudinaryService = new CloudinaryService();