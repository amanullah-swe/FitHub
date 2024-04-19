import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware";
import { getUserById, updateHealthInfo, updatePersonalInfo } from "../controller/userController";
const router = Router();
router.get('/user/id', authMiddleware, getUserById);
router.put('/user/personal-info', authMiddleware, updatePersonalInfo);
router.put('/user/health-info', authMiddleware, updateHealthInfo);
export default router;