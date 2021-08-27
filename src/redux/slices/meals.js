import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const chicken = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken';
const pasta = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta';
const seafood = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
/* eslint-disable no-param-reassign */
export const getMeals = createAsyncThunk(
  'meals/getMeals',
  async () => {
    const chickenMeals = await fetch(chicken)
      .then((res) => res.json())
      .then((meals) => meals.meals.slice(0, 6));
    chickenMeals.forEach((meal) => { meal.type = 'Chicken'; });
    const pastaMeals = await fetch(pasta)
      .then((res) => res.json())
      .then((meals) => meals.meals.slice(0, 6));
    pastaMeals.forEach((meal) => { meal.type = 'Pasta'; });
    const seafoodMeals = await fetch(seafood)
      .then((res) => res.json())
      .then((meals) => meals.meals.slice(0, 6));
    seafoodMeals.forEach((meal) => { meal.type = 'Seafood'; });
    return [...chickenMeals, ...pastaMeals, ...seafoodMeals];
  },
);

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    meals: [],
    status: null,
  },
  extraReducers: {
    [getMeals.fulfilled]: (state, { payload }) => {
      state.meals = payload.map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    },
  },
});
/* eslint-enable no-param-reassign */

export default mealsSlice.reducer;
