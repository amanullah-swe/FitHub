import mongoose from "mongoose";
import { Request, Response } from "express";
import { User } from "../../models/user";
import jwt from 'jsonwebtoken';
export async function login(req: Request, res: Response) {
  try {
    // we will use google auth and google share email and name of the user
    const { email } = req.body;
    if (!email) return res.json({ error: "invalid credentail" })
    const user = await User.findOne({ email });
    if (!user) return res.json({ error: "user not exist go to login" })

    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '1h' });

    // Set the JWT token as a cookie
    res.cookie('token', token, {
      path: '/', // Set the path to '/'
      httpOnly: true,
      maxAge: 3600000,
      secure: true,
      sameSite: 'none'
    });
    //  generate token and cookies and send to the user 
    return res.status(201).json({ data: user })
  } catch (error) {
    console.log(error)
    console.log(req.body);
    // check if error is duplicate key the return error message user exist and go to login
    return res.json({ error: error });
  }
}