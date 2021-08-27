import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const base = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

export const getDish = createAsyncThunk(
  'dish/getDish',
  async ({ id }) => {
    const dish = await fetch(base + id)
      .then((res) => res.json())
      .then((res) => res.meals[0]);
    return dish;
  },
);

const dishSlice = createSlice({
  name: 'dish',
  initialState: {
    dish: {},
    status: null,
  },
  extraReducers: {
    [getDish.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getDish.fulfilled]: (state, { payload }) => {
      state.dish = payload;
      state.status = 'success';
    },
    [getDish.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default dishSlice.reducer;
