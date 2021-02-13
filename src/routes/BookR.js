import { Router } from "express";
import bookController from "../controllers/bookC";

const router = new Router();

router.post("/create", bookController.create);
router.get("/", bookController.readAll);
router.get("/:id", bookController.read);
router.put("/:id", bookController.update);
router.delete("/:id", bookController.delete);

export default router;
