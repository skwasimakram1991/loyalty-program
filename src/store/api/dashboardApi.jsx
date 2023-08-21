/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const dashboardApi = createApi({
  reducerPath: 'dashboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://loyality-program.onrender.com/api/admin',
  }),
  refetchOnMountOrArgChange: 30,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ['dash'],
  endpoints: (builder) => {
    return {
      fetchDashboardData: builder.query({
        providesTags: ['dash'],
        query: () => ({
          url: '/dashboard',
          method: 'GET',
          headers: {
            'access-token': localStorage.getItem('adminToken'),
          },
        }),
      }),
    };
  },
});

export const { useFetchDashboardDataQuery } = dashboardApi;
