import {prisma, Prisma} from "@workspace/db/prisma";
import {ConflictError, InternalServerError,NotFoundError} from "@workspace/api-error/error";
import {CreateBillboardSchema} from "@workspace/schema/admin/billboard";

class BillboardRepository {
    async createBillboard(data: Omit<CreateBillboardSchema, 'media'>) {
        try {
            return await prisma.billboard.create({
                data
            })
        } catch (error) {
            console.error("Error creating billboard:", error);
            if(error instanceof Prisma.PrismaClientKnownRequestError){
                if(error.code === 'P2002') {
                    throw new ConflictError("Billboard with this label already exists");
                }
                else if(error.code === 'P2003') {
                    throw new NotFoundError("Store not found");
                }
            }
            throw new InternalServerError("Failed to create billboard");

        }
    }
    async getBillboardsByStoreId(storeId: string,page: number, limit: number) {
        try {
            return await prisma.billboard.findMany({
                where: {
                    storeId
                },
                skip: (page - 1) * limit,
                take: limit,
                orderBy: {
                    createdAt: "desc"
                },
                include:{
                    media: true
                }
            });
        } catch (error) {
            console.error("Error fetching store billboards:", error);
            throw new InternalServerError("Failed to fetch store billboards");
        }
    }
    async getBillboardsCountByStoreId(storeId: string) {
        try {
            return await prisma.billboard.count({
                where: {
                    storeId
                }
            });
        } catch (error) {
            console.error("Error counting billboards:", error);
            throw new InternalServerError("Failed to count billboards");
        }
    }

    async getAllBillboardsByStoreId(storeId: string) {
        try {
            return await prisma.billboard.findMany({
                where: {
                    storeId
                },
                orderBy: {
                    createdAt: "desc"
                },
                include:{
                    media:true
                }
            });
        } catch (error) {
            console.error("Error fetching all billboards for store:", error);
            throw new InternalServerError("Failed to fetch all billboards for store");
        }

    }
    async getBillboardById(id: string) {
        try {
            return await prisma.billboard.findUnique({
                where: {
                    id
                },
                include:{
                    media: true
                }
            });
        } catch (error) {
            console.error("Error fetching billboard by ID:", error);
            throw new InternalServerError("Failed to fetch billboard by ID");
        }
    }

    async isStoreHaveBillboard(storeId: string) {
        try {
            const billboard = await prisma.billboard.findFirst({
                where: {
                    storeId
                }
            })
            return !!billboard; // Returns true if a billboard exists, false otherwise
        } catch (error) {
            console.error("Error checking if store has billboards:", error);
            throw new InternalServerError("Failed to check if store has billboards");
        }
    }
}

export const billboardRepository = new BillboardRepository();