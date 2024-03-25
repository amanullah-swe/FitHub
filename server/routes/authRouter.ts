import { Router } from "express";
import { login } from "../controller/auth/login";
import { register } from "../controller/auth/register";



const router = Router();

router.post('/auth/login', login);
router.post('/auth/register', register);

export default router;