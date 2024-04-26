import { Router } from "express";
import { AddMealAndFitnessDataOfUser, AddWorkout, getDailyMealAndFitnessByUserId, removeMealFromDailyMealAndFitness, removeWorkout } from "../controller/dailyFitnessAndDietSchemaController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.post('/addMeals', authMiddleware, AddMealAndFitnessDataOfUser);

router.post('/daily-meals-and-fitness-data', authMiddleware, getDailyMealAndFitnessByUserId);

router.delete('/remove-meals', authMiddleware, removeMealFromDailyMealAndFitness);
router.post('/add-workout', authMiddleware, AddWorkout);
router.delete('/remove-workout', authMiddleware, removeWorkout);

export default router;