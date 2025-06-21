import {Router} from "express";
import {storeController} from "../controllers/store.controller.js";
import {bodyValidator,queryValidator,paramsValidator} from "@workspace/backend-common/validator";
import {createStoreSchema,getStoreSchema} from "@workspace/schema/admin/store";

const storeRouter:Router = Router();

storeRouter.post("/",bodyValidator(createStoreSchema),storeController.createStore);
storeRouter.get("/",queryValidator(getStoreSchema),storeController.getUserStores);
storeRouter.get(/:id/,paramsValidator(getStoreSchema),storeController.getStoreById);

export default storeRouter;