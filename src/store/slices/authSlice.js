/** @format */
import { createSlice } from '@reduxjs/toolkit';
import { userLogin, userLogout } from '../thunks/authThunks';
const adminToken = localStorage.getItem('adminToken')
  ? localStorage.getItem('adminToken')
  : null;
const role = localStorage.getItem('role') ? localStorage.getItem('role') : null;

const userInfo = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : {};
const partnerInfo = localStorage.getItem('partnerInfo')
  ? JSON.parse(localStorage.getItem('partnerInfo'))
  : {};
const initialState = {
  loading: false,
  userInfo,
  partnerInfo,
  adminToken,
  error: null,
  role,
  success: false,
};
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.loading = false;
      state.success = false;
      state.userInfo = {};
      state.adminToken = null;
      state.error = null;
      state.role = null;
      localStorage.removeItem('adminToken');
      localStorage.removeItem('role');
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.userInfo = payload.data;
        state.adminToken = payload.data.token;
        state.role = payload.data.role_id.rolegroup;
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(userLogout, (state) => {
        state.loading = false;
        state.success = false;
        state.userInfo = {};
        state.adminToken = null;
        state.error = null;
        state.role = null;

        localStorage.removeItem('adminToken');
        localStorage.removeItem('role');
        localStorage.removeItem('user');
      });
  },
});

export const { logoutUser } = authSlice.actions;
