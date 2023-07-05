/** @format */

import { createSlice } from '@reduxjs/toolkit';
import { login } from '../thunks/authThunks';
import { useSelector } from 'react-redux';

const initialState = {
  data: {},
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
    });
  },
});

export const authReducer = authSlice.reducer;

export const getToken = (state) => state.auth.data.token;
// export const getRole = (state) => state.auth.data.role_id.rolegroup;
// console.log(getToken);
