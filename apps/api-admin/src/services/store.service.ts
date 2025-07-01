import { storeRepository } from "../repositories/store.repository.js";
import { CreateStoreSchema,UpdateStoreSchema } from "@workspace/schema/admin/store";
import { AppError, InternalServerError, NotFoundError } from "@workspace/api-error/error";
import { PaginationSchema } from "@workspace/schema/common/page"

class StoreService {
    async createStore(userId: string, data: CreateStoreSchema) {
        try {
            return await storeRepository.create(userId, data);
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            throw new InternalServerError("Failed to create store");
        }
    }
    async getUserStores(userId: string, page: number, limit: number) {
        try {
            const totalStores = await storeRepository.getUserStoresCount(userId);
            if (totalStores === 0) {
                throw new NotFoundError("No stores found for this user");
            }
            const stores = await storeRepository.getUserStores(userId, page, limit);
            const totalPages = Math.ceil(totalStores / limit);
            const pagination: PaginationSchema = {
                currentPage: page,
                limit: limit,
                totalPages: totalPages
            };
            return { stores, pagination };
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            throw new InternalServerError("Failed to fetch user stores");
        }
    }

    async getStoreById(userId: string, storeId: string) {
        try {
            const store = await storeRepository.getStoreById(userId, storeId);
            if (!store) {
                throw new NotFoundError("Store not found");
            }
            return store;
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            throw new InternalServerError("Failed to fetch store by ID");
        }
    }
    async isUserHaveStore(userId: string) {
        try {
            const isAvail = await storeRepository.isUserHaveStore(userId);
            if (!isAvail) {
                throw new NotFoundError("User does not have a store");
            }
            return isAvail;
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            throw new InternalServerError("Failed to check if user has a store");
        }
    }

    async getUserAllStores(userId:string){
        try {
            const stores = await storeRepository.getUserAllStores(userId);
            if(stores.length === 0) {
                throw new NotFoundError("No stores found for this user");
            }
            return stores;
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            throw new InternalServerError("Failed to fetch all user stores");
        }
    }

    async updateStore(userId:string,data:UpdateStoreSchema){
        try {
            return await storeRepository.updateStore(userId, data);
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            throw new InternalServerError("Failed to update store");
        }
    }

    async deleteStore(userId:string,id:string){
        try {
            return await storeRepository.deleteStore(userId, id);
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            throw new InternalServerError("Failed to delete store");
        }
    }
}

export const storeService = new StoreService();