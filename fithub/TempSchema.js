const workoutEntrySchema = new mongoose.Schema({
    date: String,
    workoutType: String,
    duration: Number, // in minutes
    caloriesBurned: Number
});

const nutritionEntrySchema = new mongoose.Schema({
    date: String,
    mealType: String, // Breakfast, Lunch, Dinner, Snack
    caloriesConsumed: Number,
    macronutrients: {
        protein: Number,
        carbohydrates: Number,
        fat: Number
    }
});

const notificationPreferencesSchema = new mongoose.Schema({
    email: Boolean,
    app: Boolean,
    sms: Boolean
});

const unitsSchema = new mongoose.Schema({
    weight: String, // pounds, kilograms
    height: String // inches, centimeters
});

const privacySchema = new mongoose.Schema({
    profileVisibility: String, // Public, Private
    dataSharing: Boolean
});

const settingsSchema = new mongoose.Schema({
    units: unitsSchema,
    theme: String, // Light, Dark, Custom
    privacy: privacySchema
});

const fitnessDataSchema = new mongoose.Schema({
    currentFitnessLevel: String, // Beginner, Intermediate, Advanced
    workoutHistory: [workoutEntrySchema],
    nutritionHistory: [nutritionEntrySchema]
});

const preferencesSchema = new mongoose.Schema({
    preferredWorkouts: [String], // e.g., cardio, strength training, yoga
    dietaryPreferences: [String], // e.g., vegetarian, vegan, omnivore
    notificationPreferences: notificationPreferencesSchema
});

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    phone: String,
    age: Number,
    gender: String, // Male, Female, Other
    height: {
        value: Number,
        unit: String // inches, centimeters, etc.
    },
    weight: {
        value: Number,
        unit: String // pounds, kilograms, etc.
    },
    profession: String,
    fitnessGoals: [String], // e.g., weight loss, muscle gain, general fitness
    activityLevel: String, // sedentary, light, moderate, active, very active
    medicalConditions: [String], // List of medical conditions or None
    preferences: preferencesSchema,
    fitnessData: fitnessDataSchema,
    settings: settingsSchema
});


const foodItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        max: 350,
        required: true
    },
    nutrients: {
        protein: String,
        calories: String,
        carbohydrates: String,
        fiber: String,
        fat: String
    },
    serving_sizes: {
        grams: Number,
        cups: Number,
        ounces: Number,
        teaspoons: Number,
        tablespoons: Number
    },
    benefits: {
        type: [String],
        default: []
    },
    avoid: {
        type: [String],
        default: []
    },
    warnings: {
        type: [String],
        default: []
    },
    storage: String,
    images: {
        type: [String],
        default: [],
    },
    origin: String,
    availability: {
        type: [String],
        default: []
    },
    alternative_names: {
        type: [String],
        default: []
    }
});

const userData = {
    id: "string",
    name: "string",
    email: "string",
    phone: "string",
    age: "integer",
    gender: "string", // Male, Female, Other
    height: {
        value: "float",
        unit: "string" // inches, centimeters, etc.
    },
    weight: {
        value: "float",
        unit: "string" // pounds, kilograms, etc.
    },
    profession: "string",
    fitnessGoals: [
        "string",
        "string"
    ], // e.g., weight loss, muscle gain, general fitness
    activityLevel: "string", // sedentary, light, moderate, active, very active
    medicalConditions: [
        "string",
        "string"
    ], // List of medical conditions or None
    preferences: {
        preferredWorkouts: [
            "string",
            "string"
        ], // e.g., cardio, strength training, yoga
        dietaryPreferences: [
            "string",
            "string"
        ], // e.g., vegetarian, vegan, omnivore
        notificationPreferences: {
            email: true,
            app: true,
            sms: false
        }
    },
    fitnessData: {
        currentFitnessLevel: "string", // Beginner, Intermediate, Advanced
        workoutHistory: [
            {
                date: "string",
                workoutType: "string",
                duration: "integer", // in minutes
                caloriesBurned: "float"
            },
            // Additional workout entries
        ],
        nutritionAnsMealHistory: [
            {
                date: "string",
                Breakfast: ["meal"],
                Lunch: ["meal"],
                Dinner: ["meal"],
                SnackAm: ["meal"],
                SnackPm: ["meal"],
                caloriesConsumed: "float",
                macronutrients: {
                    protein: "float",
                    carbohydrates: "float",
                    fat: "float",
                    vitamin: ["string"],
                    sugar: "3gm"
                }
            },
            // Additional nutrition entries
        ]
    },
    settings: {
        units: {
            weight: "string", // pounds, kilograms
            height: "string" // inches, centimeters
        },
        privacy: {
            profileVisibility: "string", // Public, Private
            dataSharing: true
        }
    },
    userFriends: [],
    FriendsCount: "number",

};
const meal = {
    "name": "sandwich",
    "description": "Quinoa is a nutrient-rich grain that has been cultivated for thousands of years.",
    "nutrients": {
        "protein": "4.1g",
        "calories": "120",
        "carbohydrates": "21g",
        "fiber": "2.8g",
        "fat": "1.9g",
        "cholesterol": '0mg',
    },
    "serving_sizes": {
        "grams": 100,
        "cups": 0.92,
        "ounces": 3.5,
        "teaspoons": 19.2,
        "tablespoons": 6.4
    },
    "benefits": ["Heart Health", "Digestive Health"],
    "category": ["vegitable"],  // like vegitable or fruit
    "avoid": ["Gluten Sensitivity"],
    "warnings": ["May contain saponins, rinse before cooking."],
    "storage": "Store in a cool, dry place.",
    "images": ["url1", "url2"],
    "origin": "South America",
    "availability": ["North America", "Europe"],
    "alternative_names": ["Quinua", "कीनोआ"]
}

const ingredients = {
    "name": "sandwich",
    "description": "Quinoa is a nutrient-rich grain that has been cultivated for thousands of years.",
    "nutrients": {
        "protein": "4.1g",
        "calories": "120",
        "carbohydrates": "21g",
        "fiber": "2.8g",
        "fat": "1.9g",
        "cholesterol": '0mg',
    },
    "serving_sizes": {
        "grams": 100,
        "cups": 0.92,
        "ounces": 3.5,
        "teaspoons": 19.2,
        "tablespoons": 6.4
    },
    "benefits": ["Heart Health", "Digestive Health"],
    "category": ["vegitable"],  // like vegitable or fruit
    "avoid": ["Gluten Sensitivity"],
    "warnings": ["May contain saponins, rinse before cooking."],
    "storage": "Store in a cool, dry place.",
    "images": ["url1", "url2"],
    "origin": "South America",
    "availability": ["North America", "Europe"],
    "alternative_names": ["Quinua", "कीनोआ"]
}


const MealList = {
    "foods": [
        {
            "name": "Quinoa",
            "description": "Quinoa is a nutrient-rich grain that has been cultivated for thousands of years.",
            "nutrients": {
                "protein": "4.1g",
                "calories": "120",
                "carbohydrates": "21g",
                "fiber": "2.8g",
                "fat": "1.9g"
            },
            "serving_sizes": {
                "grams": 100,
                "cups": 0.92,
                "ounces": 3.5,
                "teaspoons": 19.2,
                "tablespoons": 6.4
            },
            "benefits": ["Heart Health", "Digestive Health"],
            "avoid": ["Gluten Sensitivity"],
            "warnings": ["May contain saponins, rinse before cooking."],
            "storage": "Store in a cool, dry place.",
            "images": ["url1", "url2"],
            "origin": "South America",
            "availability": ["North America", "Europe"],
            "alternative_names": ["Quinua", "कीनोआ"]
        },
        {
            "name": "Salmon",
            "description": "Salmon is a fatty fish known for its rich omega-3 fatty acids and excellent protein content.",
            "nutrients": {
                "protein": "25g",
                "calories": "206",
                "carbohydrates": "0g",
                "fiber": "0g",
                "fat": "13g"
            },
            "serving_sizes": {
                "grams": 100,
                "cups": 0.45,
                "ounces": 3.5,
                "teaspoons": 18.9,
                "tablespoons": 2.8
            },
            "benefits": ["Brain Health", "Heart Health"],
            "avoid": ["Shellfish Allergy"],
            "warnings": ["Choose wild-caught salmon for optimal health benefits."],
            "storage": "Keep refrigerated.",
            "images": ["url3", "url4"],
            "origin": "Various Oceans",
            "availability": ["Worldwide"],
            "alternative_names": ["サケ", "Лосось", "سلمون"]
        },
        // ... (similar details for other foods)
    ]
}


// You can now use the 'userData' object as needed in your JavaScript code.
