/** @format */

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const login = createAsyncThunk('auth/fetch', async () => {
  const response = await axios.get('http://localhost:9000/partnerLogin');
  return response.data;
});
