import {storeRepository} from "../repositories/store.repository.js";
import {CreateStoreSchema} from "@workspace/schema/admin/store";
import {AppError,InternalServerError,NotFoundError} from "@workspace/api-error/error";

class StoreService{
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
            const stores = await storeRepository.getUserStores(userId, page, limit);
            if(stores.length==0) {
                throw new NotFoundError("No stores found for this user");
            }
            return stores;
        } catch (error) {
            if (error instanceof AppError) {
                throw error;
            }
            throw new InternalServerError("Failed to fetch user stores");
        }
    }

    async getStoreById(userId: string, storeId: string) {
        try {
            const store= await storeRepository.getStoreById(userId, storeId);
            if(!store) {
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
}

export const storeService = new StoreService();