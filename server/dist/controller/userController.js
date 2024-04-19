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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateHealthInfo = exports.updatePersonalInfo = exports.getUserById = void 0;
const user_1 = require("../models/user");
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = req.body.userId;
            const user = yield user_1.User.findById(userId);
            if (!user)
                res.status(404).json({ message: "security error" });
            res.status(200).json(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "server error" });
        }
    });
}
exports.getUserById = getUserById;
function updatePersonalInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { name, email, phone, gender, profession, userId } = req.body;
            if (!name || !email || !phone || !gender || !profession)
                return res.status(302).json({ error: "in valid input" });
            const user = yield user_1.User.findByIdAndUpdate(userId, { name, email, phone, gender, profession }, { new: true, projection: { password: 0 } });
            if (!user)
                res.status(404).json({ message: "security error" });
            delete user.password;
            res.status(200).json(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "server error" });
        }
    });
}
exports.updatePersonalInfo = updatePersonalInfo;
function updateHealthInfo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { caloriesGoal, proteinGoal, age, height, weight, preferredWorkouts, dietaryPreferences, fitnessGoals, activityLevel, medicalConditions, userId } = req.body;
            if (!caloriesGoal || !proteinGoal || !age || !height || !weight || !preferredWorkouts || !dietaryPreferences || !fitnessGoals || !medicalConditions)
                return res.status(302).json({ error: "in valid input" });
            const user = yield user_1.User.findByIdAndUpdate(userId, {
                caloriesGoal,
                proteinGoal,
                age,
                height,
                weight,
                preferredWorkouts,
                dietaryPreferences,
                fitnessGoals,
                medicalConditions
            }, {
                new: true,
                projection: { password: 0 }
            });
            if (!user)
                res.status(404).json({ message: "security error" });
            res.status(200).json(user);
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "server error" });
        }
    });
}
exports.updateHealthInfo = updateHealthInfo;
