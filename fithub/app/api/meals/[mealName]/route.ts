import connect from "@/db/db";
import Meal from "@/models/meal";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { mealName: string } }) {
    const mealName = params.mealName;
    try {
        connect();
        const newMeal = await Meal.find({
            $or: [
                { name: mealName },                  // Match the name field
                { alternative_names: mealName }      // Match the alternative_names array
            ]
        });

        return NextResponse.json({
            data: {
                newMeal
            }
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error });
    }
}