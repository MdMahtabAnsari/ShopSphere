import storeRouter from "./stote.route.js";
import {Express} from "express";
import {errorHandler} from "@workspace/api-error/handler";

const routes = (app: Express) => {
    app.use("/api/admin/store", storeRouter);
    app.use(errorHandler);
}

export default routes;