import { Request, Response } from "express";
import Meal from "../models/meal";

export async function findMealById(req: Request, res: Response) {
    const { id } = req.params;
    try {
        const meal = await Meal.findById(id);
        return res.json(meal);
    } catch (error) {
        return res.json({ error: error });
    }
}
export async function findMealByName(req: Request, res: Response) {
    const { name } = req.params;

    try {
        const newMeal = await Meal.find({
            $or: [
                { name: { $regex: name, $options: 'i' } },                  // Match the name field
                { "otherData.name": "alternative_names", "otherData.value": { $regex: name, $options: 'i' } }    // Match the alternative_names array
            ]
        }).limit(10);
        res.status(200).json([...newMeal]);
    } catch (error) {
        return res.json({ error: error });
    }
}
export async function creatMeal(req: Request, res: Response) {
    try {
        const data = req.body;
        const meal = new Meal(data);
        await meal.save();
        res.status(201).json({ meal, message: "meal created" });
    } catch (error) {

    }
}

// Meal.updateMany(
//     {}, // Filter: Update all documents
//     { $set: { "serving_sizes.grams": 1 } } // Update operation
// )
//     .then(result => {
//         console.log(result); // Log the result of the update operation
//     })
//     .catch(error => {
//         console.error(error); // Handle any errors that occur during the update operation
//     });