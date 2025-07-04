import { InternalServerError, NotFoundError, AppError, UnauthorisedError } from "@workspace/api-error/error";
import { CreateBillboardSchema } from "@workspace/schema/admin/billboard";
import { billboardRepository } from "../repositories/billboard.repository.js";
import { storeRepository } from "../repositories/store.repository.js";
import { PaginationSchema } from "@workspace/schema/common/page";
import {billboardMediaService} from './billboardMedia.service.js';

class BillboardService {
    async createBillboard(userId: string, path: string, data: Omit<CreateBillboardSchema, 'media'>) {
        try {
            const store = await storeRepository.getStoreById(userId, data.storeId);
            if (!store) {
                throw new NotFoundError("Store not found");
            }
            const billboard = await billboardRepository.createBillboard(data);
            await billboardMediaService.create(billboard.id, path);
            return await billboardRepository.getBillboardById(billboard.id);
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            console.error("Error creating billboard:", error);
            throw new InternalServerError("Failed to create billboard");
        }

    }
    async getBillboardsByStoreId(userId: string, storeId: string, page: number, limit: number) {
        try {
            const store = await storeRepository.getStoreById(userId, storeId);
            if (!store) {
                throw new NotFoundError("Store not found");
            }
            const totalCount = await billboardRepository.getBillboardsCountByStoreId(storeId);
            if (totalCount === 0) {
                throw new NotFoundError("No billboards found for this store");
            }
            const billboards = await billboardRepository.getBillboardsByStoreId(storeId, page, limit);
            const pagination: PaginationSchema = {
                currentPage: page,
                totalPages: Math.ceil(totalCount / limit),
                limit: limit,
            };
            return {
                billboards,
                pagination,
            };
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            console.error("Error fetching billboards:", error);
            throw new InternalServerError("Failed to fetch billboards");
        }
    }

    async getAllBillboardsByStoreId(userId: string, storeId: string) {
        try {
            const store = await storeRepository.getStoreById(userId, storeId);
            if (!store) {
                throw new NotFoundError("Store not found");
            }
            const billboards = await billboardRepository.getAllBillboardsByStoreId(storeId);
            if (billboards.length === 0) {
                throw new NotFoundError("No billboards found for this store");
            }
            return billboards;
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            console.error("Error fetching all billboards:", error);
            throw new InternalServerError("Failed to fetch all billboards");
        }
    }
    async getBillboardById(userId: string, storeId: string, id: string) {
        try {
            const store = await storeRepository.getStoreById(userId, storeId);
            if (!store) {
                throw new NotFoundError("Store not found");
            }
            const billboard = await billboardRepository.getBillboardById(id);
            if (!billboard) {
                throw new NotFoundError("Billboard not found");
            }
            if (billboard.storeId !== storeId) {
                throw new UnauthorisedError("You are not authorised to access this billboard");
            }
            return billboard;
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            console.error("Error fetching billboard:", error);
            throw new InternalServerError("Failed to fetch billboard");
        }
    }

    async isStoreHaveBillboard(userId: string, storeId: string) {
        try {
            const store = await storeRepository.getStoreById(userId, storeId);
            if (!store) {
                throw new NotFoundError("Store not found");
            }
            const isAvail = await billboardRepository.isStoreHaveBillboard(storeId)
            if (!isAvail) {
                throw new NotFoundError("No billboards found for this store");
            }
            return isAvail;
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            console.error("Error checking if store has billboards:", error);
            throw new InternalServerError("Failed to check if store has billboards");
        }
    }
}

export const billboardService = new BillboardService();