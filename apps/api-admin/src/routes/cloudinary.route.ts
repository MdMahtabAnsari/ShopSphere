import {cloudinaryController} from "../controllers/cloudinary.controller.js";
import {Router} from "express";

const cloudinaryRouter:Router = Router();

cloudinaryRouter.post('/signature', cloudinaryController.createSignature);

export default cloudinaryRouter;