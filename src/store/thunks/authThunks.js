/** @format */

import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/** @format */
export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ data: { email, password }, role }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      };
      const { data } = await axios.post(
        `https://loyality-program.onrender.com/api/${role}/login`,
        { email, password },
        config,
      );
      // store user's token in local storage
      localStorage.setItem('adminToken', data.data.token);
      localStorage.setItem('role', data.data.role_id.rolegroup);
      localStorage.setItem('partnerInfo', JSON.stringify(data?.data));
      localStorage.setItem(
        'user',
        JSON.stringify({
          fullname: data.data.fullname,
          sponsor_name: data.data.sponsor_name,
          email: data.data.email,
          image: data.data.image,
          isPaymentCompleted: data.data.isPaymentCompleted,
        }),
      );

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);
export const userLogout = createAction('auth/logout');
