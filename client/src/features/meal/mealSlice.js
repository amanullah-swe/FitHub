

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMealById } from './mealApi';

export const fetchMelaByIdAsync = createAsyncThunk(
    'meal/fetch data',
    async ({ id }) => {
        const response = await fetchMealById({ id });
        return response;
    }
);

const fetchMealByIdThunk = createAsyncThunk(
    'meals/fetchById',
    async (id) => {
        try {
            const meal = await fetchMealById({ id });
            return meal;  // Return the fetched meal data on success
        } catch (error) {
            // Reject the thunk with the error object
            return rejectWithValue(error);
        }
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
    mealError: null,
};

export const mealSlice = createSlice({
    name: 'meal',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        showCustomMeals: (state, action) => {
            state.data.name = action.payload?.name || "meal ";
            state.data.description = action.payload?.description || "meal descriptoin";
            state.data.images = action.payload?.images || '';
            state.data.nutrients = action.payload?.nutrients || {
                protein: 0,
                calories: 0,
                carbohydrates: 0,
                fiber: 0,
                fat: 0,
                cholesterol: 0,
                sugar: 0
            };
            // to make sure that other meals data is not be displayed 
            state.data.otherData = [
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
        calculateNutrients: (state, action) => {
            // originalNutrient * unit * sevignssize / 100
            console.log(action.payload.unite, action.payload.serving_size);
            state.calulatedNutrients = {
                protein: (state.data.nutrients.protein * action.payload.unite * action.payload.serving_size) / 100,
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
                state.mealError = action.error.error;
            })
    },
});

export const { increment, calculateNutrients, showCustomMeals } = mealSlice.actions;

export const selectMeal = (state) => state.meal.data;
export const selectCalculatedNutrients = (state) => state.meal.calulatedNutrients;

export default mealSlice.reducer;
