import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const api = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken'

export const getMeals = createAsyncThunk(
    'meals/getMeals',
    async () => {
        const meals = fetch(api)
            .then((res) => res.json())
        return meals
    }
)

const mealsSlice = createSlice({
    name: 'meals',
    initialState: {
        meals: [],
        status: null
    },
    extraReducers: {
        [getMeals.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getMeals.fulfilled]: (state, { payload }) => {
            state.meals = payload.meals
            state.status = 'success'
        },
        [getMeals.rejected]: (state, action) => {
            state.status = 'failed'
        },
    }
})

export default mealsSlice.reducer
