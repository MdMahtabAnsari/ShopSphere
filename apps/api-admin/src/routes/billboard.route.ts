import {billboardController} from "../controllers/billboard.controller.js";
import {createBillboardSchema,storeIdBillboardIdSchema} from "@workspace/schema/admin/billboard";
import {bodyValidator,paramsValidator,queryValidator} from "@workspace/backend-common/validator";
import {getStoreByStoreIdSchema} from "@workspace/schema/admin/store";
import {pageLimitSchema} from "@workspace/schema/common/page";
import {Router} from "express";

const billboardRouter: Router = Router({mergeParams: true});

billboardRouter.post("/",paramsValidator(getStoreByStoreIdSchema) ,bodyValidator(createBillboardSchema), billboardController.createBillboard);
billboardRouter.get("/",paramsValidator(getStoreByStoreIdSchema), queryValidator(pageLimitSchema), billboardController.getBillboards);
billboardRouter.get("/all",paramsValidator(getStoreByStoreIdSchema), billboardController.getAllBillboards);
billboardRouter.get("/is-store-have-billboard",paramsValidator(getStoreByStoreIdSchema), billboardController.isStoreHaveBillboard);
billboardRouter.get("/:billboardId",paramsValidator(storeIdBillboardIdSchema), billboardController.getBillboardById);


export default billboardRouter;