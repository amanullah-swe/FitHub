import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RemoveMealFromDailyFitnessAndMealsData, addDailyFitnessAndMealsData, fetchDailyFitnessAndMealsData } from './fitnessAndDietApi.js'


const initialState = {
  data: {
    date: "20-03-2024",
    currentFitnessLevel: "Intermediate",
    totalCaloriesBurned: 300,
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
  userError: null,
};
export const fetchDailyFitnessAndMealsDataAsync = createAsyncThunk(
  'fitnessAndMealData/fetch data',
  async ({ date, userId }) => {
    const response = await fetchDailyFitnessAndMealsData({ date, userId });
    return response;
  }
);

export const addDailyFitnessAndMealsDataAsync = createAsyncThunk(
  'fitnessAndMealData/add meal',
  async ({ date, userId, meal, mealType }) => {
    const response = await addDailyFitnessAndMealsData({ date, userId, meal, mealType });
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
  },
  extraReducers: (builder) => {
    // fetch
    builder
      .addCase(fetchDailyFitnessAndMealsDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDailyFitnessAndMealsDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
        state.userError = null;
      })
      .addCase(fetchDailyFitnessAndMealsDataAsync.rejected, (state, action) => {
        state.status = 'reject';
        state.userError = action.error;
      })

      // add
      .addCase(addDailyFitnessAndMealsDataAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addDailyFitnessAndMealsDataAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.data = action.payload;
        state.userError = null;
      })
      .addCase(addDailyFitnessAndMealsDataAsync.rejected, (state, action) => {
        state.status = 'reject';
        state.userError = action.error;
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

export const { increment, } = fitnessSlice.actions;

export const selectFitness = (state) => state.fitnessAndDiet.data.meals;
export const selectTotalnutrients = (state) => state.fitnessAndDiet.data.totalNutrients;
export const selectDate = (state) => state.fitnessAndDiet.data.date;
export const selectDocumentId = (state) => state.fitnessAndDiet.data._id;
export default fitnessSlice.reducer;
