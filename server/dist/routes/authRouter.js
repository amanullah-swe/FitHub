"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const login_1 = require("../controller/auth/login");
const register_1 = require("../controller/auth/register");
const router = (0, express_1.Router)();
router.post('/auth/login', login_1.login);
router.post('/auth/register', register_1.register);
exports.default = router;
