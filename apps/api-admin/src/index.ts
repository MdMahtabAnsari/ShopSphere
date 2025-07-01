import express from 'express';
import 'dotenv/config';
import httpLogger from '@workspace/logger/http';
import routes from "./routes/index.js";
import {clerkMiddleware} from "@clerk/express";
import cors from "cors";
import corsConfig from "./configs/cors.config.js";
import serverConfig from "./configs/server.config.js";

const app = express();
app.use(cors(corsConfig));
app.use(clerkMiddleware())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(httpLogger);
routes(app);

app.listen(serverConfig.PORT, () => {
    console.log(`API Admin server is running on http://localhost:${serverConfig.PORT}`);
});