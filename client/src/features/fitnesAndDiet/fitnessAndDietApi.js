// A mock function to mimic making an async request for data
import { baseUrl } from "../../app/constant";
export function fetchDailyFitnessAndMealsData({ date }) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`${baseUrl}/api/daily-meals-and-fitness-data`, {
      credentials: "include",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date })
    });
    if (response.status == 404) {
      const data = {
        date: date,
        currentFitnessLevel: "",
        totalCaloriesBurned: 0,
        totalNutrients: {
          protein: 0,
          calories: 0,
          carbohydrates: 0,
          fiber: 0,
          fat: 0,
          cholesterol: 0,
          sugar: 0
        },
        workouts: [
          // Additional workout entries
        ],
        meals: {
          breakfast: [
          ],
          lunch: [
            // Similar structure as Breakfast
          ],
          dinner: [
            // Similar structure as Breakfast
          ],
          snackAm: [
            // Similar structure as Breakfast
          ],
          snackPm: [
            // Similar structure as Breakfast
          ],

        },
      }
      return resolve(data);
    }
    if (!response.ok) {
      const data = await response.json();
      return reject(data);
    }
    const data = await response.json();
    return resolve(data);
  }
  );
}
export function addDailyFitnessAndMealsData({ date, meal, mealType }) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`${baseUrl}/api/addMeals`, {
      credentials: "include",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date, meal, mealType })
    });
    if (!response.ok) {
      const data = await response.json();
      return reject(data);
    }
    const data = await response.json();
    return resolve(data);
  }
  );
}


export function RemoveMealFromDailyFitnessAndMealsData({ name, docId, index, mealType, meal }) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`${baseUrl}/api/remove-meals`, {
      credentials: "include",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, docId, index, mealType, meal })
    });
    if (!response.ok) {
      const data = await response.json();
      return reject(data);
    }
    const data = await response.json();
    return resolve(data);
  }
  );
}
