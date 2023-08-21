/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const subscriptionApi = createApi({
  reducerPath: 'subscriptionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://loyality-program.onrender.com/api/admin',
  }),
  refetchOnMountOrArgChange: 30,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ['subscription', 'feature', 'addons'],
  endpoints: (builder) => {
    return {
      fetchSubscriptions: builder.query({
        providesTags: ['subscription', 'feature', 'addons'],
        query: () => ({
          url: '/subscription/list',
          method: 'GET',
          headers: {
            'access-token': localStorage.getItem('adminToken'),
          },
        }),
        // cachePolicy: { strategies: ['cacheFirst'], tags: ['dash'] },
      }),
      createSubscription: builder.mutation({
        query: (data) => {
          const urlEncodedData = new URLSearchParams();
          Object.keys(data).forEach((key) => {
            urlEncodedData.append(key, data[key]);
          });
          return {
            url: '/subscription/create',
            method: 'POST',
            headers: {
              'access-token': localStorage.getItem('adminToken'),
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: urlEncodedData,
          };
        },
        invalidatesTags: ['subscription'],
      }),
      createFeatureAndAddons: builder.mutation({
        query: (payload) => {
          const urlEncodedData = new URLSearchParams();
          Object.keys(payload.data).forEach((key) => {
            urlEncodedData.append(key, payload.data[key]);
          });
          console.log(payload.createUrlForAll);
          return {
            url: payload.createUrlForAll,
            method: 'POST',
            headers: {
              'access-token': localStorage.getItem('adminToken'),
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: urlEncodedData,
          };
        },

        invalidatesTags: ['feature', 'addons'],
      }),
      updateFeatureAndAddons: builder.mutation({
        query: (url) => {
          return {
            url: url,
            method: 'PUT',
            headers: {
              'access-token': localStorage.getItem('adminToken'),
            },
          };
        },
        invalidatesTags: ['feature', 'addons'],
      }),
      updateSingleFeatureAndAddons: builder.mutation({
        query: (url) => {
          return {
            url: url,
            method: 'PUT',
            headers: {
              'access-token': localStorage.getItem('adminToken'),
            },
          };
        },
        invalidatesTags: ['feature', 'addons'],
      }),
    };
  },
});

export const {
  useFetchSubscriptionsQuery,
  useCreateSubscriptionMutation,
  useCreateFeatureAndAddonsMutation,
  useUpdateFeatureAndAddonsMutation,
  useUpdateSingleFeatureAndAddonsMutation,
} = subscriptionApi;
