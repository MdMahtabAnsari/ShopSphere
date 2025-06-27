import {prisma, Prisma} from "@workspace/db/prisma";
import {ConflictError, InternalServerError} from "@workspace/api-error/error";
import {CreateStoreSchema} from "@workspace/schema/admin/store";

class StoreRepository {
    async create(userId: string, data: CreateStoreSchema) {
        try {
            return await prisma.store.create({
                data: {
                    ...data,
                    userId
                }
            });
        } catch (error) {
            console.error("Error creating store:", error);
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                throw new ConflictError("Store name");
            }
            throw new InternalServerError("Failed to create store");
        }
    }


    async getUserStores(userId: string, page: number, limit: number) {
        try {
            return await prisma.store.findMany({
                where: {
                    userId
                },
                skip: (page - 1) * limit,
                take: limit,
                orderBy: {
                    createdAt: "desc"
                }
            });
        } catch (error) {
            console.error("Error fetching user stores:", error);
            throw new InternalServerError("Failed to fetch user stores");
        }
    }

    async getUserStoresCount(userId:string){
        try{
            return await prisma.store.count({
                where: {
                    userId
                }
            });
        } catch (error) {
            console.error("Error fetching user stores count:", error);
            throw new InternalServerError("Failed to fetch user stores count");
        }
    }

    async getStoreById(userId: string, storeId: string) {
        try {
            return await prisma.store.findFirst({
                where: {
                    id: storeId,
                    userId
                }
            })
        } catch (error) {
            console.error("Error fetching store by ID:", error);
            throw new InternalServerError("Failed to fetch store by ID");
        }
    }

    async isUserHaveStore(userId: string) {
        try {
            const store = await prisma.store.findFirst({
                where: {
                    userId
                }
            });
            return !!store;
        } catch (error) {
            console.error("Error checking if user has store:", error);
            throw new InternalServerError("Failed to check if user has store");
        }
    }

    async getUserAllStores(userId: string) {
        try {
            return await prisma.store.findMany({
                where: {
                    userId
                },
                orderBy: {
                    createdAt: "desc"
                }
            });
        } catch (error) {
            console.error("Error fetching all user stores:", error);
            throw new InternalServerError("Failed to fetch all user stores");
        }
    }
}

export const storeRepository = new StoreRepository();