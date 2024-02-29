import { Router } from "express";
import { creatMeal, findMealById, findMealByName } from "../controller/mealController";

const router = Router();
router.post('/meal', creatMeal);
router.get('/meal/id/:id', findMealById);
router.get('/meal/:name', findMealByName)


export default router;