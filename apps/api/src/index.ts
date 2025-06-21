import express,{Request,Response} from "express";
import 'dotenv/config';
import httpLogger from "@workspace/logger/http";

const app = express();
app.use(httpLogger);
app.get("/", (req:Request, res:Response) => {
    res.send("Hello from the API!");
});

app.listen(3002, () => {
    console.log("API server is running on http://localhost:3002");
});