import {Router} from "express";
import {storeController} from "../controllers/store.controller.js";
import {bodyValidator,queryValidator,paramsValidator} from "@workspace/backend-common/validator";
import {createStoreSchema,getStoreByIdSchema,updateStoreSchema} from "@workspace/schema/admin/store";
import {pageLimitSchema} from "@workspace/schema/common/page";

const storeRouter:Router = Router();

storeRouter.post("/",bodyValidator(createStoreSchema),storeController.createStore);
storeRouter.get("/",queryValidator(pageLimitSchema),storeController.getUserStores);
storeRouter.put('/',bodyValidator(updateStoreSchema),storeController.updateStore);
storeRouter.get("/all",storeController.getUserAllStores);
storeRouter.get("/is-user-have-store",storeController.isUserHaveStore);
storeRouter.delete("/:id",paramsValidator(getStoreByIdSchema),storeController.deleteStore);
storeRouter.get("/:id",paramsValidator(getStoreByIdSchema),storeController.getStoreById);

export default storeRouter;