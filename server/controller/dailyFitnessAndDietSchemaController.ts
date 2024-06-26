import mongoose from 'mongoose';
import DailyFitnessAndDietModel from '../models/dailyFitnessAndDietSchema'; // Adjust the import path accordingly
import { Request, Response } from 'express';
import { getPreviousDate } from '../helpers/getPrevioudDate'
import { findMealById } from './mealController';
import { User } from '../models/user';

type SampleData = {
    userId: String,
    date: string;
    currentFitnessLevel: string;
    totalCaloriesBurned: number;
    caloriesGoal: number,
    proteinGoal: number,
    weight: number,
    totalNutrients: {
        protein: number;
        calories: number;
        carbohydrates: number;
        fiber: number;
        fat: number;
        cholesterol: number;
        sugar: number;
    };
    workouts: Array<{
        name: string;
        intensity: string;
        metValue: number;
        duration: number;
        caloriesBurned: number;
    }>;
    meals: {
        breakfast: Array<{
            _id: string;
            name: string;
            images: string;
            description: string;
            nutrients: {
                protein: number;
                calories: number;
                carbohydrates: number;
                fiber: number;
                fat: number;
                cholesterol: number;
                sugar: number;
            };
        }>;
        lunch: Array<{
            _id: string;
            name: string;
            images: string;
            description: string;
            nutrients: {
                protein: number;
                calories: number;
                carbohydrates: number;
                fiber: number;
                fat: number;
                cholesterol: number;
                sugar: number;
            };
        }>;
        dinner: Array<{
            _id: string;
            name: string;
            images: string;
            description: string;
            nutrients: {
                protein: number;
                calories: number;
                carbohydrates: number;
                fiber: number;
                fat: number;
                cholesterol: number;
                sugar: number;
            };
        }>;
        snackAm: Array<{
            _id: string;
            name: string;
            images: string;
            description: string;
            nutrients: {
                protein: number;
                calories: number;
                carbohydrates: number;
                fiber: number;
                fat: number;
                cholesterol: number;
                sugar: number;
            };
        }>;
        snackPm: Array<{
            _id: string;
            name: string;
            images: string;
            description: string;
            nutrients: {
                protein: number;
                calories: number;
                carbohydrates: number;
                fiber: number;
                fat: number;
                cholesterol: number;
                sugar: number;
            };
        }>;
    };
}

type Meal = {
    _id: string;
    name: string;
    images: string;
    description: string;
    unique: string;
    nutrients: {
        protein: number;
        calories: number;
        carbohydrates: number;
        fiber: number;
        fat: number;
        cholesterol: number;
        sugar: number;
    }
}
type MealType = 'breakfast' | 'lunch' | 'dinner' | 'snackAm' | "snackPm";


// Create a new document
export async function AddMealAndFitnessDataOfUser(req: Request, res: Response) {
    try {
        // Sample data
        const sampleData: SampleData = {
            userId: '',
            date: '',
            caloriesGoal: 0,
            proteinGoal: 0,
            weight: 0,
            currentFitnessLevel: 'Intermediate',
            totalCaloriesBurned: 0,
            totalNutrients: {
                protein: 0,
                calories: 0,
                carbohydrates: 0,
                fiber: 0,
                fat: 0,
                cholesterol: 0,
                sugar: 0
            },
            workouts: [

            ],
            meals: {
                breakfast: [],
                lunch: [],
                dinner: [],
                snackAm: [],
                snackPm: []
            }
        };
        const { date, meal, userId, mealType }: { mealType: MealType, userId: string, meal: Meal, date: string } = req.body;
        console.log({ date, userId });
        if (!date || !meal || !userId || !mealType) return res.status(504).json({ message: 'send the data proparly ' });
        const isMealExist = await DailyFitnessAndDietModel.findOne({ date, userId });
        if (!isMealExist && date == getPreviousDate()) {
            const user = await User.findById(userId);
            sampleData.date = date;
            sampleData.userId = userId;
            sampleData.proteinGoal = user.proteinGoal;
            sampleData.caloriesGoal = user.caloriesGoal;
            sampleData.weight = user.weight.value;
            sampleData.totalNutrients = meal.nutrients;
            sampleData.meals[mealType].push(meal);
            const createdDocument = await DailyFitnessAndDietModel.create(sampleData);
            await createdDocument.save();
            return res.status(201).json(createdDocument);
        }
        else if (isMealExist && date == getPreviousDate()) {
            // adding the uqine code in meal for make the remove function easy 
            const timestamp = Date.now().toString(36);
            meal.unique = timestamp;
            const pushQuery = `meals.${mealType}`;

            const newEntry = await DailyFitnessAndDietModel.findOneAndUpdate(
                { date, userId },
                {
                    $push: { [pushQuery]: meal },
                    $inc: {
                        'totalNutrients.protein': meal.nutrients.protein,
                        'totalNutrients.calories': meal.nutrients.calories,
                        'totalNutrients.carbohydrates': meal.nutrients.carbohydrates,
                        'totalNutrients.fiber': meal.nutrients.fiber,
                        'totalNutrients.fat': meal.nutrients.fat,
                        'totalNutrients.cholesterol': meal.nutrients.cholesterol,
                        'totalNutrients.sugar': meal.nutrients.sugar
                    }
                },
                { new: true }
            );
            if (!newEntry) return res.status(201).json({ message: 'not found ' });
            else {
                await newEntry.save();
                return res.status(201).json(newEntry);
            }
        }
        return res.status(500).json({ date, serverDate: getPreviousDate() },);
        // Create document

    } catch (error) {
        console.log(error)
        res.status(504).json({ message: 'Error creating document:', error });
    }
};

// FETCH THE MAELS BY USER ID AND DATE
export async function getDailyMealAndFitnessByUserId(req: Request, res: Response) {
    const { date, userId }: { date: string, userId: string } = req.body;
    if (!date || !userId) return res.status(404).json({ message: "invalid Inputs pleas provide all the parameters" });
    const document = await DailyFitnessAndDietModel.findOne({ date, userId });
    if (!document) return res.status(404).json({ messsage: "document not found" });
    return res.status(200).json(document);
}

//REMOVE MEALS
export async function removeMealFromDailyMealAndFitness(req: Request, res: Response) {
    const { name, docId, index, mealType, meal }: { name: string, docId: string, index: number, mealType: string, meal: Meal } = req.body;
    if (!name || !docId || typeof (index) != 'number' || !mealType || !meal) {
        return res.status(404).json({ message: "Invalid inputs, please provide all the parameters" });
    }
    const pushQuery = `meals.${mealType}`;
    const document = await DailyFitnessAndDietModel.findOneAndUpdate(
        { _id: docId },
        {
            $pull: { [pushQuery]: meal },
            $inc: {
                'totalNutrients.protein': -meal.nutrients.protein,
                'totalNutrients.calories': -meal.nutrients.calories,
                'totalNutrients.carbohydrates': -meal.nutrients.carbohydrates,
                'totalNutrients.fiber': -meal.nutrients.fiber,
                'totalNutrients.fat': -meal.nutrients.fat,
                'totalNutrients.cholesterol': -meal.nutrients.cholesterol,
                'totalNutrients.sugar': -meal.nutrients.sugar
            }
        },
        { new: true }
    );

    if (!document) {
        return res.status(405).json({ message: "Document not found" });
    }
    return res.status(200).json(document);
}

//ADD WORKOUT 
export async function AddWorkout(req: Request, res: Response) {
    const sampleData: SampleData = {
        userId: '',
        date: '',
        proteinGoal: 0,
        caloriesGoal: 0,
        weight: 0,
        currentFitnessLevel: 'Intermediate',
        totalCaloriesBurned: 0,
        totalNutrients: {
            protein: 0,
            calories: 0,
            carbohydrates: 0,
            fiber: 0,
            fat: 0,
            cholesterol: 0,
            sugar: 0
        },
        workouts: [

        ],
        meals: {
            breakfast: [],
            lunch: [],
            dinner: [],
            snackAm: [],
            snackPm: []
        }
    };
    try {
        // Define combined type for request body
        type WorkoutLogEntry = {
            userId: string;
            date: string;
            name: string;
            intensity: string;
            duration: number;
            caloriesBurned: number;
            metValue: number;
        };

        // Destructure request body using the defined types
        const { date, userId, name, intensity, duration, caloriesBurned, metValue }: WorkoutLogEntry = req.body;
        if (date != getPreviousDate()) {
            return res.status(402).json({ error: "can not add to previouse date" })
        }
        if (!date || !userId || !name || !intensity || !duration || !caloriesBurned || !metValue) return res.status(404).json({ message: 'send the data proparly ' });
        const isMealExist = await DailyFitnessAndDietModel.findOne({ date, userId });
        if (!isMealExist && date == getPreviousDate()) {
            const user = await User.findById(userId);
            sampleData.proteinGoal = user.proteinGoal;
            sampleData.caloriesGoal = user.caloriesGoal;
            sampleData.weight = user.weight.value;
            sampleData.date = date;
            sampleData.userId = userId;
            sampleData.totalCaloriesBurned = caloriesBurned;
            sampleData.totalNutrients.calories = -caloriesBurned;
            sampleData.workouts.push({ name, intensity, duration, caloriesBurned, metValue, });
            const createdDocument = await DailyFitnessAndDietModel.create(sampleData);
            await createdDocument.save();
            return res.status(201).json(createdDocument);
        }
        else if (isMealExist && date == getPreviousDate()) {
            const newEntry = await DailyFitnessAndDietModel.findOneAndUpdate(
                { date, userId },
                {
                    $push: { workouts: { name, intensity, caloriesBurned, metValue, duration } },
                    $inc: {
                        'totalCaloriesBurned': caloriesBurned,
                        'totalNutrients.calories': -caloriesBurned,
                    }
                },
                { new: true }
            );
            if (!newEntry) return res.status(404).json({ message: 'not found ' });
            else {
                await newEntry.save();
                return res.status(201).json(newEntry);
            }
        }
        return res.status(500).json({ date, serverDate: getPreviousDate() },);
        // Create document
    } catch (error) {
        console.log(error)
        res.status(504).json({ message: 'Error creating document:', error });
    }
};

// REMOVE WORKOUT
export async function removeWorkout(req: Request, res: Response) {
    // Define combined type for request body
    type WorkoutLogEntry = {
        _id: string,
        docId: string;
        date: string;
        caloriesBurned: number;
    };
    // Destructure request body using the defined types
    const { date, docId, _id, caloriesBurned }: WorkoutLogEntry = req.body;
    if (date != getPreviousDate()) {
        return res.status(402).json({ error: "can not add to previouse date" })
    }
    if (!date || !docId || !_id || !caloriesBurned) return res.status(402).json({ message: 'send the data proparly ' });

    const document = await DailyFitnessAndDietModel.findOneAndUpdate(
        { _id: docId },
        {
            $pull: { workouts: { _id } },
            $inc: {
                'totalCaloriesBurned': -caloriesBurned,
                'totalNutrients.calories': caloriesBurned,
            }
        },
        { new: true }
    );

    if (!document) {
        return res.status(405).json({ message: "Document not found" });
    }
    return res.status(200).json(document);
}


export async function getDashboardData(req: Request, res: Response) {
    const { userId }: { userId: string } = req.body;

    if (!userId) {
        return res.status(404).json({ message: "Invalid Inputs. Please provide all parameters." });
    }

    const data: Array<any> = [];
    for (let i = 7; i > 0; i--) {
        const sampleMeal = {
            _id: "placeHolder", // Use a more generic placeholder for _id
            userId,
            date: getPreviousDate(i), // Consider adding error handling for getPreviousDate return value
            currentFitnessLevel: "unknown", // More informative placeholder
            totalCaloriesBurned: 0,
            totalNutrients: {
                protein: 0,
                calories: 0,
                carbohydrates: 0,
                fiber: 0,
                fat: 0,
                cholesterol: 0,
                sugar: 0,
            },
            workouts: [],
            meals: {
                breakfast: [],
                lunch: [],
                dinner: [],
                snackAm: [],
                snackPm: [],
            },
            __v: 0,
        };

        try {
            const document = await DailyFitnessAndDietModel.findOne({ date: sampleMeal.date, userId });
            if (!document) {
                data.push(sampleMeal);
            } else {
                data.push(document);
            }
        } catch (error) {
            console.error("Error fetching document:", error);
            // Handle database errors appropriately (e.g., return a generic error response)
        }
    }

    return res.status(200).json(data);
}
