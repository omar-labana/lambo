import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from '../redux/slices/meals'
export const store = configureStore({
    reducer: { meals: mealsReducer },
})