import {Router} from "express";
import {storeController} from "../controllers/store.controller.js";
import {bodyValidator,queryValidator,paramsValidator} from "@workspace/backend-common/validator";
import {createStoreSchema,getStoreSchema,getStoreByIdSchema} from "@workspace/schema/admin/store";

const storeRouter:Router = Router();

storeRouter.post("/",bodyValidator(createStoreSchema),storeController.createStore);
storeRouter.get("/",queryValidator(getStoreSchema),storeController.getUserStores);
storeRouter.get("/all",storeController.getUserAllStores);
storeRouter.get("/is-user-have-store",storeController.isUserHaveStore);
storeRouter.get("/:id",paramsValidator(getStoreByIdSchema),storeController.getStoreById);

export default storeRouter;