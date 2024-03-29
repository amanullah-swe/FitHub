

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMelaById } from './mealApi';

export const fetchMelaByIdAsync = createAsyncThunk(
    'meal/fetch data',
    async ({ id }) => {
        const response = await fetchMelaById({ id });
        return response;
    }
);


const initialState = {
    data: {
        _id: '',
        name: "name of the meal",
        description: "description of the meal",
        images: "",
        nutrients: {
            protein: 0,
            calories: 0,
            carbohydrates: 0,
            fiber: 0,
            fat: 0,
            cholesterol: 0,
            sugar: 0
        },
        serving_sizes: {
            grams: 1,
            cups: 70,
            ounces: 80,
            teaspoons: 20,
            tablespoons: 30
        },
        otherData: [
            { name: "Benefits", value: [] },
            { name: "category", value: [] },
            { name: "avoid", value: [] },
            { name: "warnings", value: [] },
            { name: "storage", value: [] },
            { name: "origin", value: [] },
            { name: "availability", value: [] },
            { name: "alternative_names", value: [] }
        ]
    },
    calulatedNutrients: {
        protein: 0,
        calories: 0,
        carbohydrates: 0,
        fiber: 0,
        fat: 0,
        cholesterol: 0,
        sugar: 0
    },
    mealsError: null,
};

export const mealSlice = createSlice({
    name: 'meal',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        calculateNutrients: (state, action) => {
            // originalNutrient * unit * sevignssize / 100
            state.calulatedNutrients = {
                protein: state.data.nutrients.protein * action.payload.unite * action.payload.serving_size / 100,
                calories: state.data.nutrients.calories * action.payload.unite * action.payload.serving_size / 100,
                carbohydrates: state.data.nutrients.carbohydrates * action.payload.unite * action.payload.serving_size / 100,
                fiber: state.data.nutrients.fiber * action.payload.unite * action.payload.serving_size / 100,
                fat: state.data.nutrients.fat * action.payload.unite * action.payload.serving_size / 100,
                cholesterol: state.data.nutrients.cholesterol * action.payload.unite * action.payload.serving_size / 100,
                sugar: state.data.nutrients.sugar * action.payload.unite * action.payload.serving_size / 100
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMelaByIdAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMelaByIdAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.data = action.payload;
                state.calulatedNutrients = action.payload.nutrients;
                state.userError = null;
            })
            .addCase(fetchMelaByIdAsync.rejected, (state, action) => {
                state.status = 'reject';
                state.userError = action.error;
            })
    },
});

export const { increment, calculateNutrients } = mealSlice.actions;

export const selectMeal = (state) => state.meal.data;
export const selectCalculatedNutrients = (state) => state.meal.calulatedNutrients;

export default mealSlice.reducer;
