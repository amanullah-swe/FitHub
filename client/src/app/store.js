import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice.js'
import fitnessAndDietReducer from '../features/fitnesAndDiet/fitnessAndDietSlice.js'
import mealReducer from '../features/meal/mealSlice.js'
const store = configureStore({
    reducer: {
        user: userReducer,
        fitnessAndDiet: fitnessAndDietReducer,
        meal: mealReducer
    }
});

export { store };