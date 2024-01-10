import { NextRequest, NextResponse } from "next/server";
import connect from '@/db/db'
import { User } from '@/models/user'
import mongoose from "mongoose";

export async function POST(req: NextRequest) {
  try {
    // we will use google auth and google share email and name of the user
    await connect();
    const { email } = await req.json();
    if (!email) return NextResponse.json({ error: "invalid credentail" }, { status: 400 })
    const user = await User.findOne({ email });
    if (!user) return NextResponse.json({ error: "user not exist go to login" }, { status: 404 })
    //  generate token and cookies and send to the user 
    return NextResponse.json({ data: user }, { status: 201 })
  } catch (error) {
    // check if error is duplicate key the return error message user exist and go to login
    return NextResponse.json({ error: error });
  }
}