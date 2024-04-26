"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeWorkout = exports.AddWorkout = exports.removeMealFromDailyMealAndFitness = exports.getDailyMealAndFitnessByUserId = exports.AddMealAndFitnessDataOfUser = void 0;
const dailyFitnessAndDietSchema_1 = __importDefault(require("../models/dailyFitnessAndDietSchema")); // Adjust the import path accordingly
const getPrevioudDate_1 = require("../helpers/getPrevioudDate");
const user_1 = require("../models/user");
// Create a new document
function AddMealAndFitnessDataOfUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Sample data
            const sampleData = {
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
                workouts: [],
                meals: {
                    breakfast: [],
                    lunch: [],
                    dinner: [],
                    snackAm: [],
                    snackPm: []
                }
            };
            const { date, meal, userId, mealType } = req.body;
            console.log({ date, userId });
            if (!date || !meal || !userId || !mealType)
                return res.status(504).json({ message: 'send the data proparly ' });
            const isMealExist = yield dailyFitnessAndDietSchema_1.default.findOne({ date, userId });
            if (!isMealExist && date == (0, getPrevioudDate_1.getPreviousDate)()) {
                const user = yield user_1.User.findById(userId);
                sampleData.date = date;
                sampleData.userId = userId;
                sampleData.proteinGoal = user.proteinGoal;
                sampleData.caloriesGoal = user.caloriesGoal;
                sampleData.weight = user.weight.value;
                sampleData.totalNutrients = meal.nutrients;
                sampleData.meals[mealType].push(meal);
                const createdDocument = yield dailyFitnessAndDietSchema_1.default.create(sampleData);
                yield createdDocument.save();
                return res.status(201).json(createdDocument);
            }
            else if (isMealExist && date == (0, getPrevioudDate_1.getPreviousDate)()) {
                // adding the uqine code in meal for make the remove function easy 
                const timestamp = Date.now().toString(36);
                meal.unique = timestamp;
                const pushQuery = `meals.${mealType}`;
                const newEntry = yield dailyFitnessAndDietSchema_1.default.findOneAndUpdate({ date, userId }, {
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
                }, { new: true });
                if (!newEntry)
                    return res.status(201).json({ message: 'not found ' });
                else {
                    yield newEntry.save();
                    return res.status(201).json(newEntry);
                }
            }
            return res.status(500).json({ date, serverDate: (0, getPrevioudDate_1.getPreviousDate)() });
            // Create document
        }
        catch (error) {
            console.log(error);
            res.status(504).json({ message: 'Error creating document:', error });
        }
    });
}
exports.AddMealAndFitnessDataOfUser = AddMealAndFitnessDataOfUser;
;
// FETCH THE MAELS BY USER ID AND DATE
function getDailyMealAndFitnessByUserId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { date, userId } = req.body;
        if (!date || !userId)
            return res.status(404).json({ message: "invalid Inputs pleas provide all the parameters" });
        const document = yield dailyFitnessAndDietSchema_1.default.findOne({ date, userId });
        if (!document)
            return res.status(404).json({ messsage: "document not found" });
        return res.status(200).json(document);
    });
}
exports.getDailyMealAndFitnessByUserId = getDailyMealAndFitnessByUserId;
//REMOVE MEALS
function removeMealFromDailyMealAndFitness(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name, docId, index, mealType, meal } = req.body;
        if (!name || !docId || typeof (index) != 'number' || !mealType || !meal) {
            return res.status(404).json({ message: "Invalid inputs, please provide all the parameters" });
        }
        const pushQuery = `meals.${mealType}`;
        const document = yield dailyFitnessAndDietSchema_1.default.findOneAndUpdate({ _id: docId }, {
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
        }, { new: true });
        if (!document) {
            return res.status(405).json({ message: "Document not found" });
        }
        return res.status(200).json(document);
    });
}
exports.removeMealFromDailyMealAndFitness = removeMealFromDailyMealAndFitness;
//ADD WORKOUT 
function AddWorkout(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const sampleData = {
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
            workouts: [],
            meals: {
                breakfast: [],
                lunch: [],
                dinner: [],
                snackAm: [],
                snackPm: []
            }
        };
        try {
            // Destructure request body using the defined types
            const { date, userId, name, intensity, duration, caloriesBurned, metValue } = req.body;
            if (date != (0, getPrevioudDate_1.getPreviousDate)()) {
                return res.status(402).json({ error: "can not add to previouse date" });
            }
            if (!date || !userId || !name || !intensity || !duration || !caloriesBurned || !metValue)
                return res.status(404).json({ message: 'send the data proparly ' });
            const isMealExist = yield dailyFitnessAndDietSchema_1.default.findOne({ date, userId });
            if (!isMealExist && date == (0, getPrevioudDate_1.getPreviousDate)()) {
                const user = yield user_1.User.findById(userId);
                sampleData.proteinGoal = user.proteinGoal;
                sampleData.caloriesGoal = user.caloriesGoal;
                sampleData.weight = user.weight.value;
                sampleData.date = date;
                sampleData.userId = userId;
                sampleData.totalCaloriesBurned = caloriesBurned;
                sampleData.totalNutrients.calories = -caloriesBurned;
                sampleData.workouts.push({ name, intensity, duration, caloriesBurned, metValue, });
                const createdDocument = yield dailyFitnessAndDietSchema_1.default.create(sampleData);
                yield createdDocument.save();
                return res.status(201).json(createdDocument);
            }
            else if (isMealExist && date == (0, getPrevioudDate_1.getPreviousDate)()) {
                const newEntry = yield dailyFitnessAndDietSchema_1.default.findOneAndUpdate({ date, userId }, {
                    $push: { workouts: { name, intensity, caloriesBurned, metValue, duration } },
                    $inc: {
                        'totalCaloriesBurned': caloriesBurned,
                        'totalNutrients.calories': -caloriesBurned,
                    }
                }, { new: true });
                if (!newEntry)
                    return res.status(404).json({ message: 'not found ' });
                else {
                    yield newEntry.save();
                    return res.status(201).json(newEntry);
                }
            }
            return res.status(500).json({ date, serverDate: (0, getPrevioudDate_1.getPreviousDate)() });
            // Create document
        }
        catch (error) {
            console.log(error);
            res.status(504).json({ message: 'Error creating document:', error });
        }
    });
}
exports.AddWorkout = AddWorkout;
;
// REMOVE WORKOUT
function removeWorkout(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // Destructure request body using the defined types
        const { date, docId, _id, caloriesBurned } = req.body;
        if (date != (0, getPrevioudDate_1.getPreviousDate)()) {
            return res.status(402).json({ error: "can not add to previouse date" });
        }
        if (!date || !docId || !_id || !caloriesBurned)
            return res.status(402).json({ message: 'send the data proparly ' });
        const document = yield dailyFitnessAndDietSchema_1.default.findOneAndUpdate({ _id: docId }, {
            $pull: { workouts: { _id } },
            $inc: {
                'totalCaloriesBurned': -caloriesBurned,
                'totalNutrients.calories': caloriesBurned,
            }
        }, { new: true });
        if (!document) {
            return res.status(405).json({ message: "Document not found" });
        }
        return res.status(200).json(document);
    });
}
exports.removeWorkout = removeWorkout;
