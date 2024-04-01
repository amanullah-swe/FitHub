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
exports.creatMeal = exports.findMealByName = exports.findMealById = void 0;
const meal_1 = __importDefault(require("../models/meal"));
function findMealById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        try {
            const meal = yield meal_1.default.findById(id);
            return res.json(meal);
        }
        catch (error) {
            return res.json({ error: error });
        }
    });
}
exports.findMealById = findMealById;
function findMealByName(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { name } = req.params;
        try {
            const newMeal = yield meal_1.default.find({
                $or: [
                    { name: { $regex: name, $options: 'i' } }, // Match the name field
                    { "otherData.name": "alternative_names", "otherData.value": { $regex: name, $options: 'i' } } // Match the alternative_names array
                ]
            }).limit(10);
            res.status(200).json([...newMeal]);
        }
        catch (error) {
            return res.json({ error: error });
        }
    });
}
exports.findMealByName = findMealByName;
function creatMeal(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = req.body;
            const meal = new meal_1.default(data);
            yield meal.save();
            res.status(201).json({ meal, message: "meal created" });
        }
        catch (error) {
        }
    });
}
exports.creatMeal = creatMeal;
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
