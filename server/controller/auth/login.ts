import mongoose from "mongoose";
import { Request, Response } from "express";
import { User } from "../../models/user";
export async function login(req: Request, res: Response) {
  try {
    // we will use google auth and google share email and name of the user
    const { email } = req.body;
    if (!email) return res.json({ error: "invalid credentail" })
    const user = await User.findOne({ email });
    if (!user) return res.json({ error: "user not exist go to login" })
    //  generate token and cookies and send to the user 
    return res.status(201).json({ data: user })
  } catch (error) {
    console.log(error)
    console.log(req.body);
    // check if error is duplicate key the return error message user exist and go to login
    return res.json({ error: error });
  }
}