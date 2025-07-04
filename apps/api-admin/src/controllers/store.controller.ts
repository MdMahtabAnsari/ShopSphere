import {Request,Response,NextFunction} from "express";
import {CreateStoreSchema,GetStoreByIdSchema,UpdateStoreSchema} from "@workspace/schema/admin/store";
import {storeService} from "../services/store.service.js";
import {getAuth} from '@clerk/express'
import {UnauthorisedError} from "@workspace/api-error/error";
import {PageLimitSchema} from "@workspace/schema/common/page";

class StoreController{
    async createStore(req: Request, res: Response, next: NextFunction) {
        const { userId } = getAuth(req)
        if(!userId) {
            return next(new UnauthorisedError());
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
            return next(new UnauthorisedError());
        }
        const { page, limit } = req.query as PageLimitSchema;

        try {
            const stores = await storeService.getUserStores(userId, page?parseInt(page):1, limit?parseInt(limit):10);
            res.status(200).json({
                message: "User stores fetched successfully",
                status: "success",
                isOperational: true,
                data: stores,
            });
        } catch (error) {
           return next(error); // Pass the error to the error handler
        }
    }
    async getStoreById(req: Request, res: Response, next: NextFunction) {
        const { userId } = getAuth(req)
        if(!userId) {
            return next(new UnauthorisedError());
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
           return next(error); // Pass the error to the error handler
        }
    }
    async isUserHaveStore(req: Request, res: Response, next: NextFunction) {
        const { userId } = getAuth(req)
        if(!userId) {
            return next(new UnauthorisedError());
        }

        try {
            const isHave = await storeService.isUserHaveStore(userId);
            res.status(200).json({
                message: "User store availability checked successfully",
                status: "success",
                isOperational: true,
                data: isHave,
            });
        } catch (error) {
          return next(error);
        }
    }
    async getUserAllStores(req: Request, res: Response, next: NextFunction) {
        const { userId } = getAuth(req)
        if(!userId) {
            return next(new UnauthorisedError());
        }

        try {
            const stores = await storeService.getUserAllStores(userId);
            res.status(200).json({
                message: "User all stores fetched successfully",
                status: "success",
                isOperational: true,
                data: stores,
            });
        } catch (error) {
           return next(error); // Pass the error to the error handler
        }
    }

    async updateStore(req: Request, res: Response, next: NextFunction) {
        const { userId } = getAuth(req)
        if(!userId) {
            return next(new UnauthorisedError());
        }
        const data: UpdateStoreSchema = req.body;

        try {
            const updatedStore = await storeService.updateStore(userId,data);
            res.status(200).json({
                message: "Store updated successfully",
                status: "success",
                isOperational: true,
                data: updatedStore,
            });
        } catch (error) {
           return next(error); // Pass the error to the error handler
        }
    }

    async deleteStore(req: Request, res: Response, next: NextFunction) {
        const { userId } = getAuth(req)
        if(!userId) {
            return next(new UnauthorisedError());
        }
        const {id} = req.params as GetStoreByIdSchema;

        try {
            const deletedStore = await storeService.deleteStore(userId, id);
            res.status(200).json({
                message: "Store deleted successfully",
                status: "success",
                isOperational: true,
                data: deletedStore,
            });
        } catch (error) {
          return next(error); // Pass the error to the error handler
        }
    }
}

export const storeController = new StoreController();