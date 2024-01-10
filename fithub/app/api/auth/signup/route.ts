import { NextRequest, NextResponse } from "next/server";
import connect from '@/db/db.js'
import {User} from '@/models/user'
import mongoose from "mongoose";

export async function POST(req:NextRequest){
    try {
      // we will use google auth and google share email and name of the user
       await connect();
       const {email,name}= await req.json();
       if(!email || !name)   return NextResponse.json({ error:"invalid credentail" }, { status: 400 })
       const newUser = new User({email,name});
       await newUser.save();
       return NextResponse.json({ data:newUser }, { status: 201 })
    } catch (error) {
      // check if error is duplicate key the return error message user exist and go to login
      return  NextResponse.json({error:error});
    }
}