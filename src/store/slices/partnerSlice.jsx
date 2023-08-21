/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currPage: 1,
};

export const partnerSlice = createSlice({
  name: 'partner', // Corrected name to 'partner'
  initialState,
  reducers: {
    updatePage: (state, { payload }) => {
      state.currPage = payload;
    },
  },
});

export const { updatePage } = partnerSlice.actions;

export default partnerSlice.reducer;
