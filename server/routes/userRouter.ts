import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { getUserById } from "../controller/userController";
const router = Router();
router.get('/user/id', authMiddleware, getUserById);


export default router;