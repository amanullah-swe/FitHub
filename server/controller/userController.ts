import { Request, Response } from "express";
import { User } from "../models/user";
import DailyFitnessAndDietModel from "../models/dailyFitnessAndDietSchema";
import { getPreviousDate } from "../helpers/getPrevioudDate";
export async function getUserById(req: Request, res: Response) {

    try {
        const userId: string = req.body.userId;
        const user = await User.findById(userId);
        if (!user) res.status(404).json({ message: "security error" });
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error" });
    }
}

export async function updatePersonalInfo(req: Request, res: Response) {
    type userInfo = {
        name: string, email: string, phone: number, gender: string, profession: string, userId: string
    }
    try {
        const { name, email, phone, gender, profession, userId }: userInfo = req.body;
        if (!name || !email || !phone || !gender || !profession) return res.status(302).json({ error: "in valid input" })
        const user = await User.findByIdAndUpdate(userId, { name, email, phone, gender, profession }, { new: true, projection: { password: 0 } });
        if (!user) res.status(404).json({ message: "security error" });
        delete user.password;
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error" });
    }
}

export async function updateHealthInfo(req: Request, res: Response) {
    type userInfo = {
        userId: string,
        caloriesGoal: number,
        proteinGoal: number,
        age: number,
        height: {
            value: number,
            unit: string
        },
        weight: {
            value: number,
            unit: string
        },
        preferredWorkouts: [string],
        dietaryPreferences: [string],
        fitnessGoals: [string],
        activityLevel: string,
        medicalConditions: [string],
    }
    try {
        const {
            caloriesGoal,
            proteinGoal,
            age,
            height,
            weight,
            preferredWorkouts,
            dietaryPreferences,
            fitnessGoals,
            activityLevel,
            medicalConditions,
            userId
        }: userInfo = req.body;
        if (!caloriesGoal || !proteinGoal || !age || !height || !weight || !preferredWorkouts || !dietaryPreferences || !fitnessGoals || !medicalConditions) return res.status(302).json({ error: "in valid input" })
        const user = await User.findByIdAndUpdate(userId,
            {
                caloriesGoal,
                proteinGoal,
                age,
                height,
                weight,
                preferredWorkouts,
                dietaryPreferences,
                fitnessGoals,
                medicalConditions
            },
            {
                new: true,
                projection: { password: 0 }
            }
        );
        if (!user) res.status(404).json({ message: "security error" });
        const upadatedDietAndFitness = await DailyFitnessAndDietModel.findOneAndUpdate({ userId, date: getPreviousDate(0) }, { weight: weight.value, caloriesGoal, proteinGoal }, { new: true })
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error" });
    }
}
