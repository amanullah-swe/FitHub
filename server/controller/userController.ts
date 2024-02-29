import { Request, Response } from "express";
import { User } from "../models/user";
export async function getUserById(req: Request, res: Response) {

    try {
        const userId: string = req.body.userId;
        const user = await User.findById(userId);
        if (!user) res.status(404).json({ message: "security error" });
        res.status(200).json({ data: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "server error" });
    }
}