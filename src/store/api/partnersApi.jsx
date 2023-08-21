/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const partnerApi = createApi({
  reducerPath: 'partnerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://loyality-program.onrender.com/api/admin',
  }),
  tagTypes: ['partner'],
  refetchOnMountOrArgChange: 5,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => {
    return {
      fetchPartnersData: builder.query({
        query: ({ page = 1 }) => ({
          url: '/get-all-partner',
          method: 'GET',
          headers: {
            'access-token': localStorage.getItem('adminToken'),
          },
          params: {
            page: page,
          },
        }),
        providesTags: [{ type: 'partners', id: 'LIST' }],
      }),
      fetchPartnerData: builder.query({
        query: () => ({
          url: '/get-all-partner',
          method: 'GET',
          headers: {
            'access-token': localStorage.getItem('adminToken'),
          },
        }),
        // providesTags: ['partner'],
      }),
      createPartners: builder.mutation({
        query: (data) => {
          const urlEncodedData = new URLSearchParams();
          Object.keys(data).forEach((key) => {
            urlEncodedData.append(key, data[key]);
          });
          return {
            url: '/partner/create',
            method: 'POST',
            headers: {
              'access-token': localStorage.getItem('adminToken'),
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: urlEncodedData,
          };
        },
        invalidatesTags: [{ type: 'partners', id: 'LIST' }],
      }),
      updatePartners: builder.mutation({
        query: ({ data, id }) => {
          const urlEncodedData = new URLSearchParams();
          Object.keys(data).forEach((key) => {
            urlEncodedData.append(key, data[key]);
          });
          return {
            url: `partner-facility/update/${id}`,
            method: 'Put',
            headers: {
              'access-token': localStorage.getItem('adminToken'),
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: urlEncodedData,
          };
        },
        invalidatesTags: (result, error, body) => [
          { type: 'partners', id: body.id },
        ],
      }),
    };
  },
});

export const {
  useFetchPartnersDataQuery,
  useCreatePartnersMutation,
  useUpdatePartnersMutation,
  useFetchPartnerDataQuery,
} = partnerApi;
