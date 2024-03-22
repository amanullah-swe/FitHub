import mongoose from 'mongoose';
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

const mealSchema = new mongoose.Schema({
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

const Meal = mongoose.models.Meal || mongoose.model('Meal', mealSchema);

export default Meal;
