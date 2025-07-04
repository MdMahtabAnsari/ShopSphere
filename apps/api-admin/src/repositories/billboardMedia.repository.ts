import { CreateBillboardMediaSchema } from "@workspace/schema/admin/billboardMedia";
import { prisma, Prisma} from "@workspace/db/prisma";
import { ConflictError, InternalServerError, NotFoundError } from "@workspace/api-error/error";

class BillboardMediaRepository {
    async create(data: CreateBillboardMediaSchema) {
        try {
            return await prisma.billboardMedia.create({
                data
            });
        } catch (error) {
            console.error("Error creating billboard media:", error);
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    throw new ConflictError("Billboard media already exists");
                }
                else if (error.code === 'P2025') {
                    throw new NotFoundError("Billboard media not found");
                }
            }
            throw new InternalServerError("Failed to create billboard media");
        }
    }

    async update(id: string, data: CreateBillboardMediaSchema) {
        try {
            return await prisma.billboardMedia.update({
                where: { id },
                data
            });
        } catch (error) {
            console.error("Error updating billboard media:", error);
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
                if (error.code === 'P2025') {
                    throw new NotFoundError("Billboard media not found");
                }
                else if (error.code === 'P2002') {
                    throw new ConflictError("Billboard media already exists");
                }
            }
            throw new InternalServerError("Failed to update billboard media");
        }
    }
}

export const billboardMediaRepository = new BillboardMediaRepository();