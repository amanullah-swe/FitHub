import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { User } from "../../models/user";
export async function login(req: Request, res: Response) {
  try {
    // Find user by email
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "invalid inputs " })
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    // Check if password is correct
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const token = jwt.sign({ userId: user._id }, 'your-secret-key', { expiresIn: '7d' });

    // Set the JWT token as a cookie
    res.cookie('token', token, {
      path: '/', // Set the path to '/'
      httpOnly: true,
      maxAge: 3600000,
      secure: true,
      sameSite: 'none'
    });
    //  generate token and cookies and send to the user 
    return res.status(201).json({ message: "login successful", });
  }
  catch (error) {
    console.log(error);
    return res.status(504).json({ error });
  }
}