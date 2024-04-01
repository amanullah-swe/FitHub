"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
// Define nutrients sub-schema
const NutrientsSchema = {
    protein: Number,
    calories: Number,
    carbohydrates: Number,
    fiber: Number,
    fat: Number,
    cholesterol: Number,
    sugar: Number
};
// Define workout sub-schema
const WorkoutSchema = {
    workoutType: String,
    duration: Number,
    caloriesBurned: Number
};
// Define meal sub-schema
const MealSchema = {
    _id: String,
    name: String,
    images: String,
    description: String,
    unique: {
        type: String,
        default: ''
    },
    nutrients: NutrientsSchema
};
// Define main schema
const DailyFitnessAndDietSchema = new mongoose_1.Schema({
    userId: { type: String, require: true },
    date: { type: String, required: true },
    currentFitnessLevel: { type: String, required: true },
    totalCaloriesBurned: { type: Number, required: true },
    totalNutrients: NutrientsSchema,
    workouts: [WorkoutSchema],
    meals: {
        breakfast: [MealSchema],
        lunch: [MealSchema],
        dinner: [MealSchema],
        snackAm: [MealSchema],
        snackPm: [MealSchema]
    }
});
// Define and export model
const DailyFitnessAndDietModel = mongoose_1.default.model('DailyFitnessAndDiet', DailyFitnessAndDietSchema);
exports.default = DailyFitnessAndDietModel;
