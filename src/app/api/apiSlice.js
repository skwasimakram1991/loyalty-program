/** @format */

import { createApi, fetchBaseQuery } from '@redux/toolkit/query/react';
import { setCredentials, logout } from '../../Features/Auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.localhost.3500/',
  Credentials: 'include',
  prepareHeaders: (headers, { getstate }) => {
    const token = getstate().auth.token;
    if (token) {
      headers.set('authorization', `bearer ${token}`);
    }
    return headers;
  },
});
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    console.log('sending refersh token');
    const refershResult = await baseQuery('/refersh', api, extraOptions);
    console.log(refershResult);
    if (refershResult?.data) {
      const user = api.getState().auth.user;
      api.dispatch(setCredentials({ ...refershResult.data, user }));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }
};
