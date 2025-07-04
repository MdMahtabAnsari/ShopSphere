import {Request,Response,NextFunction} from "express";
import {CreateBillboardSchema,StoreIdBillboardIdSchema} from "@workspace/schema/admin/billboard";
import {billboardService} from "../services/billboard.service.js";
import {getAuth} from '@clerk/express'
import {UnauthorisedError,BadRequestError} from "@workspace/api-error/error";
import {GetStoreByStoreIdSchema} from "@workspace/schema/admin/store";
import {PageLimitSchema} from "@workspace/schema/common/page";

class BillboardController {
    async createBillboard(req: Request, res: Response, next: NextFunction) {
        const {userId} = getAuth(req);
        if(!userId) {
            return next(new UnauthorisedError());
        }
        const data: CreateBillboardSchema = req.body;
        const path = req.file?.path;
        if(!path) {
            return next(new BadRequestError("Image/video file is required"));
        }
        try {
            const billboard = await billboardService.createBillboard(userId,path,data);
            res.status(201).json(
            {
                message: "Billboard created successfully",
                status: "success",
                isOperational: true,
                data: billboard,
            }
            );
        } catch (error) {
            return next(error);
        }
    }
    async getBillboards(req: Request, res: Response, next: NextFunction) {
        const {userId} = getAuth(req);
        if(!userId) {
            return next(new UnauthorisedError());
        }
        const {storeId} = req.params as GetStoreByStoreIdSchema;
        const {page, limit} = req.query as PageLimitSchema;
        try {
            const billboards = await billboardService.getBillboardsByStoreId(userId, storeId, page?parseInt(page):1, limit?parseInt(limit):10);
            res.status(200).json(
            {
                message: "Billboards fetched successfully",
                status: "success",
                isOperational: true,
                data: billboards,
            }
            );
        } catch (error) {
            return next(error);
        }

    }

    async getAllBillboards(req: Request, res: Response, next: NextFunction) {
        const {userId} = getAuth(req);
        if(!userId) {
            return next(new UnauthorisedError());
        }
        const {storeId} = req.params as GetStoreByStoreIdSchema;
        try {
            const billboards = await billboardService.getAllBillboardsByStoreId(userId, storeId);
            res.status(200).json(
            {
                message: "All billboards fetched successfully",
                status: "success",
                isOperational: true,
                data: billboards,
            }
            );
        } catch (error) {
            return next(error);
        }
    }
    async getBillboardById(req: Request, res: Response, next: NextFunction) {
        const {userId} = getAuth(req);
        if(!userId) {
            return next(new UnauthorisedError());
        }
        const {storeId, billboardId} = req.params as StoreIdBillboardIdSchema;
        try {
            const billboard = await billboardService.getBillboardById(userId, storeId, billboardId);
            res.status(200).json(
            {
                message: "Billboard fetched successfully",
                status: "success",
                isOperational: true,
                data: billboard,
            }
            );
        } catch (error) {
            return next(error);
        }
    }

    async isStoreHaveBillboard(req: Request, res: Response, next: NextFunction) {
        const {userId} = getAuth(req);
        if(!userId) {
            return next(new UnauthorisedError());
        }
        const {storeId} = req.params as GetStoreByStoreIdSchema;
        try {
            const isHaveBillboard = await billboardService.isStoreHaveBillboard(userId, storeId);
            res.status(200).json(
            {
                message: "Billboard availability checked successfully",
                status: "success",
                isOperational: true,
                data: isHaveBillboard,
            }
            );
        } catch (error) {
            return next(error);
        }
    }
}

export const billboardController = new BillboardController();