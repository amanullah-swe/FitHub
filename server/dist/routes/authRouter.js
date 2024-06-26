"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../controller/auth/login");
const register_1 = require("../controller/auth/register");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = (0, express_1.Router)();
router.post('/auth/login', login_1.login);
router.post('/auth/register', register_1.register);
router.get('/auth', authMiddleware_1.authMiddleware, login_1.authChecker);
exports.default = router;
