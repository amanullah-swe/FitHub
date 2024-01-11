import mongoose from "mongoose";
import { Request, Response } from "express";
import { User } from "../../models/user";
export async function signup(req: Request, res: Response) {
  try {
    // we will use google auth and google share email and name of the user
    const { email, name } = req.body;
    if (!email || !name) return res.json({ error: "invalid credentail" })
    const newUser = new User({ email, name });
    await newUser.save();
    return res.json({ data: newUser })
  } catch (error) {
    console.log(error);
    // check if error is duplicate key the return error message user exist and go to login
    return res.json({ error: error });
  }
}