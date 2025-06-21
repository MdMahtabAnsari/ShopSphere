import {Request,Response,NextFunction} from "express";
import {CreateStoreSchema,GetStoreByIdSchema} from "@workspace/schema/admin/store";
import {storeService} from "../services/store.service.js";
import { getAuth} from '@clerk/express'
import {UnauthorisedError} from "@workspace/api-error/error";

class StoreController{
    async createStore(req: Request, res: Response, next: NextFunction) {
        const { userId } = getAuth(req)
        if(!userId) {
            throw new UnauthorisedError();
        }
        const data: CreateStoreSchema = req.body;

        try {
            const store = await storeService.createStore(userId, data);
            res.status(201).json({
                message: "Store created successfully",
                status: "success",
                isOperational: true,
                data: store,
            });
        } catch (error) {
            next(error);
        }
    }

    async getUserStores(req: Request, res: Response, next: NextFunction) {
        const { userId } = getAuth(req)
        if(!userId) {
            throw new UnauthorisedError();
        }
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;

        try {
            const stores = await storeService.getUserStores(userId, page, limit);
            res.status(200).json({
                message: "User stores fetched successfully",
                status: "success",
                isOperational: true,
                data: stores,
            });
        } catch (error) {
            next(error); // Pass the error to the error handler
        }
    }
    async getStoreById(req: Request, res: Response, next: NextFunction) {
        const { userId } = getAuth(req)
        if(!userId) {
            throw new UnauthorisedError();
        }
        const {id} = req.params as GetStoreByIdSchema;

        try {
            const store = await storeService.getStoreById(userId, id);
            res.status(200).json({
                message: "Store fetched successfully",
                status: "success",
                isOperational: true,
                data: store,
            });
        } catch (error) {
            next(error); // Pass the error to the error handler
        }
    }
}

export const storeController = new StoreController();