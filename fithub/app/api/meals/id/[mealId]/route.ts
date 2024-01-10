import connect from "@/db/db";
import Meal from "@/models/meal";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { mealId: string } }) {
    const mealId = params.mealId;
    try {
        connect();
        const meal = await Meal.findById(mealId);

        return NextResponse.json({
            data: {
                meal
            }
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error });
    }
}