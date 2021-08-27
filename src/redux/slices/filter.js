import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: 'All',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload; // eslint-disable-line no-param-reassign
    },
  },
});

export const { updateFilter } = filterSlice.actions;

export default filterSlice.reducer;
