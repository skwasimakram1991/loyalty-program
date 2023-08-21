/** @format */

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

export const countriesApi = createApi({
  reducerPath: 'countries',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
  endpoints: (builder) => ({
    fetchCountries: builder.query({
      providesTags: ['partner'],
      query: () => {
        return {
          url: 'all',
          method: 'GET',
        };
      },
    }),
  }),
});

export const { useFetchCountriesQuery } = countriesApi;
