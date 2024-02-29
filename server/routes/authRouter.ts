import { Router } from "express";
import { login } from "../controller/auth/login";
import { signup } from "../controller/auth/signup";


const router = Router();

router.post('/auth/login', login);
router.post('/auth/signup', signup);

export default router;