import mongoose from 'mongoose';
import DailyFitnessAndDietModel from '../models/dailyFitnessAndDietSchema'; // Adjust the import path accordingly
import { Request, Response } from 'express';
import { getPreviousDate } from '../helpers/getPrevioudDate'

type SampleData = {
    userId: String,
    date: string;
    currentFitnessLevel: string;
    totalCaloriesBurned: number;
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
        workoutType: string;
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
            sampleData.date = date;
            sampleData.userId = userId;
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

export async function getDailyMealAndFitnessByUserId(req: Request, res: Response) {
    const { date, userId }: { date: string, userId: string } = req.body;
    if (!date || !userId) return res.status(404).json({ message: "invalid Inputs pleas provide all the parameters" });
    const document = await DailyFitnessAndDietModel.findOne({ date, userId });
    if (!document) return res.status(404).json({ messsage: "document not found" });
    return res.status(200).json(document);
}

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
// Call the function to create the document

