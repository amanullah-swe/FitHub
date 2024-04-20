import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RemoveMealFromDailyFitnessAndMealsData, addDailyFitnessAndMealsData, fetchDailyFitnessAndMealsData } from './fitnessAndDietApi.js'
import { getPreviousDate } from '../../helpers/getPrevioudDate.js';


const initialState = {
  data: {
    date: getPreviousDate(),
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
      {
        workoutType: "Running",
        duration: 30,
        caloriesBurned: 300
      },
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
  },
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


      // remvove
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
  },
});

export const { increment, clearDietAndMealApiMessage } = fitnessSlice.actions;

export const selectFitness = (state) => state.fitnessAndDiet.data.meals;
export const selectTotalnutrients = (state) => state.fitnessAndDiet.data.totalNutrients;
export const selectDate = (state) => state.fitnessAndDiet.data.date;
export const selectDocumentId = (state) => state.fitnessAndDiet.data._id;
export const selectHomeError = (state) => state.fitnessAndDiet.homeError;
export const selectDietAndMealApiMessage = (state) => state.fitnessAndDiet.dietAndMealApiMessage;
export default fitnessSlice.reducer;
