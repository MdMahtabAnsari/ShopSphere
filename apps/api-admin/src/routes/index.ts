import storeRouter from "./stote.route.js";
import billboardRouter from "./billboard.route.js";
import cloudinaryRouter from "./cloudinary.route.js";
import {Express} from "express";
import {errorHandler} from "@workspace/api-error/handler";

const routes = (app: Express) => {
    app.use("/api/admin/stores", storeRouter);
    app.use("/api/admin/stores/:storeId/billboards", billboardRouter);
    app.use("/api/admin/cloudinary", cloudinaryRouter);
    app.use(errorHandler);
}

export default routes;