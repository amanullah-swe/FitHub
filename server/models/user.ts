import mongoose from 'mongoose';


// nutrientsSchema store the value based on per 100 gm and then convert into the other size,
const nutrientsSchema = {
    protein: Number,
    calories: Number,
    carbohydrates: Number,
    fiber: Number,
    fat: Number,
    cholesterol: Number,
    sugar: Number
};

const servingSizesSchema = {
    servingType: {
        type: String,
        enum: ['grams', 'cups', "ounces", "teaspoons", "tablespoons"]
    },
    value: Number,
};

const mealItemSchema = {
    name: String,
    description: String,
    nutrients: nutrientsSchema,
    servingSizes: servingSizesSchema
};

const mealHistoryEntrySchema = {
    date: String,
    Breakfast: {
        type: [mealItemSchema],
        default: []
    },
    Lunch: {
        type: [mealItemSchema],
        default: []
    },
    Dinner: {
        type: [mealItemSchema],
        default: []
    },
    SnackAm: {
        type: [mealItemSchema],
        default: []
    },
    SnackPm: {
        type: [mealItemSchema],
        default: []
    },
    totalnutrients: {
        protein: Number,
        carbohydrates: Number,
        fat: Number,
        vitamin: [String],
        sugar: Number,
        calorie: Number
    }
};

const workoutHistoryEntrySchema = {
    date: String,
    workoutType: String,
    duration: Number,
    caloriesBurned: Number
};

const notificationPreferencesSchema = {
    email: Boolean,
    app: Boolean,
    sms: Boolean
};

const preferencesSchema = {
    preferredWorkouts: [String],
    dietaryPreferences: [String],
    notificationPreferences: notificationPreferencesSchema
};

const unitsSchema = {
    weight: String,
    height: String
};

const privacySchema = {
    profileVisibility: Boolean,
    dataSharing: Boolean
};

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    phone: String,
    age: Number,
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
    },
    height: {
        value: Number,
        unit: {
            type: String,
            enum: ['inches', 'centimeters', 'feet']
        }
    },
    weight: {
        value: Number,
        unit: {
            type: String,
            enum: ['pounds', 'kilograms']
        }
    },
    profession: String,
    fitnessGoals: [String],
    activityLevel: String,
    medicalConditions: [String],
    preferences: preferencesSchema,
    fitnessData: {
        currentFitnessLevel: String,
        workoutHistory: {
            type: [workoutHistoryEntrySchema],
            default: []
        },
        nutritionAnsMealHistory: {
            type: [mealHistoryEntrySchema],
            default: []
        }
    },
    settings: {
        units: unitsSchema,
        privacy: privacySchema
    },
    userFriends: {
        type: Map,
        of: String,
        default: []
    },
    FriendsCount: {
        type: Number,
        default: 0
    },
    blocked:{
        type:Map,
        to:String,
        default:[]
    }
});


export const User = mongoose.models.User || mongoose.model('User', userSchema);
