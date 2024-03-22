import mongoose, { Document, Schema } from 'mongoose';

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
    image: String,
    description: String,
    nutrients: NutrientsSchema
};

// Define main schema
const DailyFitnessAndDietSchema = new Schema({
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

// Define document interface
interface IDailyFitnessAndDiet extends Document {
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
            image: string;
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
            image: string;
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
            image: string;
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
            image: string;
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
            image: string;
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

// Define and export model
const DailyFitnessAndDietModel = mongoose.model<IDailyFitnessAndDiet>('DailyFitnessAndDiet', DailyFitnessAndDietSchema);
export default DailyFitnessAndDietModel;