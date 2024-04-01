"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mealController_1 = require("../controller/mealController");
const router = (0, express_1.Router)();
router.post('/meal', mealController_1.creatMeal);
router.get('/meal/id/:id', mealController_1.findMealById);
router.get('/meal/:name', mealController_1.findMealByName);
exports.default = router;
