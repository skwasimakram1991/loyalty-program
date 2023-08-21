/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const partnerDashboardApi = createApi({
  reducerPath: 'partnerDashboardApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://loyality-program.onrender.com/api/admin/',
  }),
  tagTypes: ['payment'],
  endpoints: (builder) => ({
    paymentRequest: builder.mutation({
      query: (data) => {
        const urlEncodedData = new URLSearchParams();
        Object.keys(data).forEach((key) => {
          urlEncodedData.append(key, data[key]);
        });
        return {
          url: 'transaction/purchase',
          method: 'POST',
          body: urlEncodedData,
          headers: {
            'access-token': localStorage.getItem('adminToken'),
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        };
      },
      invalidatesTags: ['payment'],
    }),
  }),
});
export const { usePaymentRequestMutation } = partnerDashboardApi;
