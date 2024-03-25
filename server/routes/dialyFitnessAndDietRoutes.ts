import { Router } from "express";
import { AddMealAndFitnessDataOfUser, getDailyMealAndFitnessByUserId, removeMealFromDailyMealAndFitness } from "../controller/dailyFitnessAndDietSchemaController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post('/addMeals', authMiddleware, AddMealAndFitnessDataOfUser);

router.post('/daily-meals-and-fitness-data', authMiddleware, getDailyMealAndFitnessByUserId);

router.post('/remove-meals', authMiddleware, removeMealFromDailyMealAndFitness);

export default router;