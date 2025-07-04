import storeRouter from "./store.route.js";
import billboardRouter from "./billboard.route.js";
import {Express} from "express";
import {errorHandler} from "@workspace/api-error/handler";
import mediaRouter from "./media.route.js"

const routes = (app: Express) => {
    app.use("/api/admin/stores", storeRouter);
    app.use("/api/admin/media", mediaRouter);
    app.use("/api/admin/stores/:storeId/billboards", billboardRouter);
    app.use(errorHandler);
}

export default routes;