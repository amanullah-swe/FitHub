// A mock function to mimic making an async request for data

export function fetchDailyFitnessAndMealsData({ date, userId }) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`http://localhost:8080/api/daily-meals-and-fitness-data`, {
      credentials: "include",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date, userId })
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

export function addDailyFitnessAndMealsData({ date, userId, meal, mealType }) {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(`http://localhost:8080/api/addMeals`, {
      credentials: "include",
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ date, userId, meal, mealType })
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
    const response = await fetch(`http://localhost:8080/api/remove-meals`, {
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
