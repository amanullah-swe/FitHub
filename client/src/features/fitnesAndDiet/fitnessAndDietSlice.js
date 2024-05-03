import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RemoveMealFromDailyFitnessAndMealsData, addDailyFitnessAndMealsData, fetchDailyFitnessAndMealsData } from './fitnessAndDietApi.js'
import { getPreviousDate } from '../../helpers/getPrevioudDate.js';
import { baseUrl } from '../../app/constant.js';


const initialState = {
  data: {
    date: getPreviousDate(),
    currentFitnessLevel: "",
    caloriesGoal: 0,
    proteinGoal: 0,
    weight: 0,
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
  },
  dashboarData: [
    {
      "_id": "placeHolder",
      "userId": "userID",
      "date": "date",
      "currentFitnessLevel": "unknown",
      "totalCaloriesBurned": 0,
      "totalNutrients": {
        "protein": 0,
        "calories": 0,
        "carbohydrates": 0,
        "fiber": 0,
        "fat": 0,
        "cholesterol": 0,
        "sugar": 0
      },
      "workouts": [],
      "meals": {
        "breakfast": [],
        "lunch": [],
        "dinner": [],
        "snackAm": [],
        "snackPm": []
      },
      "__v": 0
    },
    {
      "_id": "placeHolder",
      "userId": "userID",
      "date": "date",
      "currentFitnessLevel": "unknown",
      "totalCaloriesBurned": 0,
      "totalNutrients": {
        "protein": 0,
        "calories": 0,
        "carbohydrates": 0,
        "fiber": 0,
        "fat": 0,
        "cholesterol": 0,
        "sugar": 0
      },
      "workouts": [],
      "meals": {
        "breakfast": [],
        "lunch": [],
        "dinner": [],
        "snackAm": [],
        "snackPm": []
      },
      "__v": 0
    },
    {
      "_id": "placeHolder",
      "userId": "userID",
      "date": "date",
      "currentFitnessLevel": "unknown",
      "totalCaloriesBurned": 0,
      "totalNutrients": {
        "protein": 0,
        "calories": 0,
        "carbohydrates": 0,
        "fiber": 0,
        "fat": 0,
        "cholesterol": 0,
        "sugar": 0
      },
      "workouts": [],
      "meals": {
        "breakfast": [],
        "lunch": [],
        "dinner": [],
        "snackAm": [],
        "snackPm": []
      },
      "__v": 0
    },
    {
      "_id": "placeHolder",
      "userId": "userID",
      "date": "date",
      "currentFitnessLevel": "unknown",
      "totalCaloriesBurned": 0,
      "totalNutrients": {
        "protein": 0,
        "calories": 0,
        "carbohydrates": 0,
        "fiber": 0,
        "fat": 0,
        "cholesterol": 0,
        "sugar": 0
      },
      "workouts": [],
      "meals": {
        "breakfast": [],
        "lunch": [],
        "dinner": [],
        "snackAm": [],
        "snackPm": []
      },
      "__v": 0
    },
    {
      "_id": "placeHolder",
      "userId": "userID",
      "date": "date",
      "currentFitnessLevel": "unknown",
      "totalCaloriesBurned": 0,
      "totalNutrients": {
        "protein": 0,
        "calories": 0,
        "carbohydrates": 0,
        "fiber": 0,
        "fat": 0,
        "cholesterol": 0,
        "sugar": 0
      },
      "workouts": [],
      "meals": {
        "breakfast": [],
        "lunch": [],
        "dinner": [],
        "snackAm": [],
        "snackPm": []
      },
      "__v": 0
    },
    {
      "_id": "placeHolder",
      "userId": "userID",
      "date": "date",
      "currentFitnessLevel": "unknown",
      "totalCaloriesBurned": 0,
      "totalNutrients": {
        "protein": 0,
        "calories": 0,
        "carbohydrates": 0,
        "fiber": 0,
        "fat": 0,
        "cholesterol": 0,
        "sugar": 0
      },
      "workouts": [],
      "meals": {
        "breakfast": [],
        "lunch": [],
        "dinner": [],
        "snackAm": [],
        "snackPm": []
      },
      "__v": 0
    },
    {
      "_id": "placeHolder",
      "userId": "userID",
      "date": "date",
      "currentFitnessLevel": "unknown",
      "totalCaloriesBurned": 0,
      "totalNutrients": {
        "protein": 0,
        "calories": 0,
        "carbohydrates": 0,
        "fiber": 0,
        "fat": 0,
        "cholesterol": 0,
        "sugar": 0
      },
      "workouts": [],
      "meals": {
        "breakfast": [],
        "lunch": [],
        "dinner": [],
        "snackAm": [],
        "snackPm": []
      },
      "__v": 0
    },
  ],
  dietAndMealApiMessage: {
    success: null,
    error: null
  },
  homeError: false,
};
export const fetchDailyFitnessAndMealsDataAsync = createAsyncThunk(
  'fitnessAndMealData/fetch data',
  async ({ date }) => {
    const response = await fetchDailyFitnessAndMealsData({ date });
    return response;
  }
);

export const addDailyFitnessAndMealsDataAsync = createAsyncThunk(
  'fitnessAndMealData/add meal',
  async ({ date, meal, mealType }) => {
    const response = await addDailyFitnessAndMealsData({ date, meal, mealType });
    return response;
  }
);

export const RemoveMealFromDailyFitnessAndMealsDataAsync = createAsyncThunk(
  'fitnessAndMealData/remove meal',
  async ({ name, docId, index, mealType, meal }) => {
    const response = await RemoveMealFromDailyFitnessAndMealsData({ name, docId, index, mealType, meal });
    return response;
  }
);

export const addWorkout = createAsyncThunk(
  "workouts/add",
  async (workoutData, { rejectWithValue }) => {
    try {
      const response = await fetch(baseUrl + "/api/add-workout",
        {
          method: "POST",
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(workoutData),
        });

      if (!response.ok) {
        const errorMessage = await response.json();
        return rejectWithValue(errorMessage.error);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue("An unexpected error occurred.");
    }
  }
);

export const removeWorkout = createAsyncThunk(
  "workouts/remove",
  async (workoutData, { rejectWithValue }) => {
    try {
      const response = await fetch(baseUrl + "/api/remove-workout",
        {
          method: "DELETE",
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(workoutData),
        });

      if (!response.ok) {
        const errorMessage = await response.json();
        return rejectWithValue(errorMessage.error);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue("An unexpected error occurred.");
    }
  }
);

export const dashboardData = createAsyncThunk(
  "dahboard/get data",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(baseUrl + "/api/dashboard-data",
        {
          method: "GET",
          credentials: 'include',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
        });

      if (!response.ok) {
        const errorMessage = await response.json();
        return rejectWithValue(errorMessage.error);
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error)
      return rejectWithValue("An unexpected error occurred.");
    }
  }
);
export const fitnessSlice = createSlice({
  name: 'fitnessAndDiet',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    clearDietAndMealApiMessage: (state) => {
      state.dietAndMealApiMessage.success = null;
      state.dietAndMealApiMessage.error = null;
    },
  },
  extraReducers: (builder) => {
    // fetch
    builder
      .addCase(fetchDailyFitnessAndMealsDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDailyFitnessAndMealsDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.dietAndMealApiMessage.success = 'request fullfiled'
        state.data = action.payload;
        state.homeError = null;
      })
      .addCase(fetchDailyFitnessAndMealsDataAsync.rejected, (state, action) => {
        state.status = 'reject';
        state.dietAndMealApiMessage.error = action.error.message;
        state.homeError = action.error;
      })

      // MEAL ADD 
      .addCase(addDailyFitnessAndMealsDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addDailyFitnessAndMealsDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.dietAndMealApiMessage.success = 'meal added'
        state.data = action.payload;
        state.homeError = null;
      })
      .addCase(addDailyFitnessAndMealsDataAsync.rejected, (state, action) => {
        state.status = 'reject';
        state.dietAndMealApiMessage.error = action.error.message;
        state.homeError = action.error;
      })


      // remvoveMeals
      .addCase(RemoveMealFromDailyFitnessAndMealsDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(RemoveMealFromDailyFitnessAndMealsDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
        state.userError = null;
      })
      .addCase(RemoveMealFromDailyFitnessAndMealsDataAsync.rejected, (state, action) => {
        state.status = 'reject';
        state.userError = action.error;
      })


      // ADD  workouts  
      .addCase(addWorkout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addWorkout.fulfilled, (state, action) => {
        state.status = 'idle';
        state.dietAndMealApiMessage.success = 'workout added'
        state.data = action.payload;
        state.homeError = null;
      })
      .addCase(addWorkout.rejected, (state, action) => {
        state.status = 'reject';
        state.dietAndMealApiMessage.error = action.error;
        state.homeError = action.error;
      })

      // REMOVE  workouts  
      .addCase(removeWorkout.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(removeWorkout.fulfilled, (state, action) => {
        state.status = 'idle';
        state.dietAndMealApiMessage.success = 'workout added'
        state.data = action.payload;
        state.homeError = null;
      })
      .addCase(removeWorkout.rejected, (state, action) => {
        state.status = 'reject';
        state.dietAndMealApiMessage.error = action.error;
        state.homeError = action.error;
      })

      // DASHBOARD  
      .addCase(dashboardData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(dashboardData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.dietAndMealApiMessage.success = 'workout added'
        state.dashboarData = action.payload;
        state.homeError = null;
      })
      .addCase(dashboardData.rejected, (state, action) => {
        state.status = 'reject';
        state.dietAndMealApiMessage.error = action.error;
        state.homeError = action.error;
      })
  },
});

export const { increment, clearDietAndMealApiMessage } = fitnessSlice.actions;

export const selectFitness = (state) => state.fitnessAndDiet.data.meals;
export const selectTotalnutrients = (state) => state.fitnessAndDiet.data.totalNutrients;
export const selectDate = (state) => state.fitnessAndDiet.data.date;
export const selectDocumentId = (state) => state.fitnessAndDiet.data._id;
export const selectHomeError = (state) => state.fitnessAndDiet.homeError;
export const selectDietAndMealApiMessage = (state) => state.fitnessAndDiet.dietAndMealApiMessage;
export const selectWorkouts = (state) => state.fitnessAndDiet.data.workouts;
export const caloriesGoal = (state) => state.fitnessAndDiet.data.caloriesGoal;
export const proteinGoal = (state) => state.fitnessAndDiet.data.proteinGoal;
export const weight = (state) => state.fitnessAndDiet.data.weight;
export const selectDashboardData = (state) => state.fitnessAndDiet.dashboarData;
export default fitnessSlice.reducer;
