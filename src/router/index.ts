import { Router } from "express";
import userController from "../controllers/user_controller";

const router = Router();

router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/", userController.create);
router.delete("/:id", userController.remove);
router.put("/", userController.update);

export default router;
