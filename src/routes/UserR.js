import { Router } from "express";
import { Router } from "express";
import UserController from "../controllers/userC";

const router = new Router();

router.post("/", UserController.create);
router.get("/", UserController.readAll);
router.get("/:id", UserController.read);
router.put("/:id", UserController.update);
router.delete("/:id", UserController.delete);

export default router;
