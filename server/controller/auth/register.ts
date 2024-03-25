import mongoose from "mongoose";
import { Request, Response } from "express";
import bcrypt from 'bcrypt'
import { User } from "../../models/user";

type userInfo = {
  name: string, email: string, phone: number, gender: string, profession: string, password: string, age: number
}
export async function register(req: Request, res: Response) {
  // we will use google auth and google share email and name of the user
  const {
    name,
    email,
    phone,
    gender,
    profession,
    password,
    age
  }: userInfo = req.body

  try {
    if (!name || !email || !phone || !gender || !profession || !password || !age) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    // Check if email is already registered
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      name,
      email,
      phone,
      gender,
      age,
      profession,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Return success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }

};