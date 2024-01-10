import mongoose from 'mongoose';

const nutrientsSchema = {
    protein: Number,
    calories: Number,
    carbohydrates: Number,
    fiber: Number,
    fat: Number,
    cholesterol: Number,
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
    nutrients: nutrientsSchema,
    serving_sizes: servingSizesSchema,
    benefits: [String],
    category: [String],
    avoid: [String],
    warnings: [String],
    storage: String,
    images: String,
    origin: String,
    availability: [String],
    alternative_names: [String],
});

const Meal = mongoose.models.Meal || mongoose.model('Meal', mealSchema);

export default Meal;
