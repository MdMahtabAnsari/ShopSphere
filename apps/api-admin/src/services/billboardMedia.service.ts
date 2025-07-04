import { InternalServerError, AppError } from "@workspace/api-error/error";
import { billboardMediaRepository } from "../repositories/billboardMedia.repository.js";
import { cloudinaryService } from "@workspace/backend-common/service";
import { CreateBillboardMediaSchema } from "@workspace/schema/admin/billboardMedia";

class BillboardMediaService {
    async create(billboardId: string, path: string) {
        try {
            const uploadResult = await cloudinaryService.uploadToCloudinary(path, "billboards");
            const mediaData: CreateBillboardMediaSchema = {
                public_id: uploadResult.public_id,
                resource: uploadResult.resource_type,
                secure_url: uploadResult.secure_url,
                width: uploadResult.width,
                height: uploadResult.height,
                playback_url: uploadResult.playback_url || null,
                billboardId
            }

            return await billboardMediaRepository.create(mediaData);
        } catch (error) {
            console.error("Error creating billboard media:", error);
            if (error instanceof AppError) {
                throw error;
            }
            throw new InternalServerError("Failed to create billboard media");
        }
    }
}

export const billboardMediaService = new BillboardMediaService();