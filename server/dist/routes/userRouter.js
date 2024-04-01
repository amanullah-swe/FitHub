"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = require("../middleware/authMiddleware");
const userController_1 = require("../controller/userController");
const router = (0, express_1.Router)();
router.get('/user/id', authMiddleware_1.authMiddleware, userController_1.getUserById);
exports.default = router;
