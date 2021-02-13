import { Router } from "express";
import authController from "../controllers/authC";

const router = new Router();

router.post("/", authController.login);

export default router;
