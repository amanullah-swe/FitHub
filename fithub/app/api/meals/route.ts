import Meal from "@/models/meal";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const meal = await req.json();
        const newMeal = new Meal(meal);
        newMeal.save();
        return NextResponse.json({ data: newMeal });
    } catch (error) {
        return NextResponse.json({ error: error });
    }
}