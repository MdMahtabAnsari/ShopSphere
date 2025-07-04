import multer,{Multer} from "multer";
import { Request} from "express";
import { BadRequestError } from "@workspace/api-error/error";
import fs from "fs";
import path from "path";
import serverConfig from "../configs/server.config.js";

const imageSize = serverConfig.IMAGE_SIZE;
const videoSize = serverConfig.VIDEO_SIZE;

const storage = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
        const uploadPath = path.join(process.cwd(), "uploads");
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }
        cb(null, uploadPath);
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`);
    },
    });

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    const allowedMimeType = serverConfig.MIME_TYPES;
    if (!allowedMimeType.includes(file.mimetype)) {
        return cb(new BadRequestError(`only ${allowedMimeType.join(", ")} are allowed`));
    }
    cb(null, true);
};

export const upload: Multer = multer({
    storage,
    fileFilter,
    limits:{
        fileSize : Math.max(imageSize, videoSize) // Use the larger of the two sizes
    }

});
