import { Router } from "express";
import { authChecker, login } from "../controller/auth/login";
import { register } from "../controller/auth/register";
import { authMiddleware } from "../middleware/authMiddleware";



const router = Router();

router.post('/auth/login', login);
router.post('/auth/register', register);
router.get('/auth', authMiddleware, authChecker);

export default router;