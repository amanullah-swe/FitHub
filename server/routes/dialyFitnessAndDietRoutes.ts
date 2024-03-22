import { Router } from "express";
import { AddMealAndFitnessDataOfUser, getDailyMealAndFitnessByUserId, removeMealFromDailyMealAndFitness } from "../controller/dailyFitnessAndDietSchemaController";

const router = Router();

router.post('/addMeals', AddMealAndFitnessDataOfUser);

router.post('/daily-meals-and-fitness-data', getDailyMealAndFitnessByUserId);

router.post('/remove-meals', removeMealFromDailyMealAndFitness);

export default router;