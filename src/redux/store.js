import { configureStore } from "@reduxjs/toolkit";
import mealsReducer from '../redux/slices/meals'
import dishReducer from "../redux/slices/dish";
import filterReducer from "../redux/slices/filter";
export const store = configureStore({
    reducer: {
        meals: mealsReducer,
        dish: dishReducer,
        filter: filterReducer,
    },
})