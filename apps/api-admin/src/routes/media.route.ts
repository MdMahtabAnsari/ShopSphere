import {Router,Request,Response} from "express"
import {upload} from "@workspace/backend-common/middleware";
import {cloudinaryService} from "@workspace/backend-common/service";
import {safeDeleteFile} from "@workspace/backend-common/util";
import {fileSizeValidator} from "@workspace/backend-common/validator";

const mediaRouter:Router = Router();

mediaRouter.post("/upload", upload.single("file"),fileSizeValidator,async (req:Request, res:Response) => {
    if(!req.file) {
        res.status(400).send("No file uploaded");
        return;
    }
    try {
        const result = await cloudinaryService.uploadToCloudinary(req.file?.path);
        res.send(result);
    } catch (error) {
        console.error("Error uploading file:", error);
        res.status(500).send("Error uploading file");
    } finally {
        await safeDeleteFile(req.file?.path);
    }
});

export default mediaRouter;
