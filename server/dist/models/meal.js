"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
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
    grams: Number,
    cups: Number,
    ounces: Number,
    teaspoons: Number,
    tablespoons: Number,
};
const mealSchema = new mongoose_1.default.Schema({
    name: String,
    description: String,
    images: String,
    nutrients: nutrientsSchema,
    serving_sizes: servingSizesSchema,
    otherData: {
        type: [{
                name: String,
                value: [String]
            }],
        default: [
            { name: "Benefits", value: [] },
            { name: "category", value: [] },
            { name: "avoid", value: [] },
            { name: "warnings", value: [] },
            { name: "storage", value: [] },
            { name: "origin", value: [] },
            { name: "availability", value: [] },
            { name: "alternative_names", value: [] }
        ]
    }
});
const Meal = mongoose_1.default.models.Meal || mongoose_1.default.model('Meal', mealSchema);
exports.default = Meal;
