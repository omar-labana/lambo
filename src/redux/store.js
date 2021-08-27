import { configureStore } from '@reduxjs/toolkit';
import mealsReducer from './slices/meals';
import dishReducer from './slices/dish';
import filterReducer from './slices/filter';

const store = configureStore({
  reducer: {
    meals: mealsReducer,
    dish: dishReducer,
    filter: filterReducer,
  },
});

export default store;
