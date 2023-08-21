/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './api/authApi';
import { authSlice } from './slices/authSlice';
import { authMiddleware } from '../Component/Auth/authMiddleware';
import { dashboardApi } from './api/dashboardApi';
import { partnerApi } from './api/partnersApi';
import { countriesApi } from './api/Services/countriesApi';
import { subscriptionApi } from './api/subscriptionApi';
import partnerReducer from './slices/partnerSlice';
import { partnerDashboardApi } from './api/Partner-dashboard/partnerDashboardApi';
export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [partnerApi.reducerPath]: partnerApi.reducer,
    [countriesApi.reducerPath]: countriesApi.reducer,
    [subscriptionApi.reducerPath]: subscriptionApi.reducer,
    [partnerDashboardApi.reducerPath]: partnerDashboardApi.reducer,
    auth: authSlice.reducer,
    partner: partnerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(authMiddleware)
      .concat(dashboardApi.middleware)
      .concat(partnerApi.middleware)
      .concat(countriesApi.middleware)
      .concat(subscriptionApi.middleware)
      .concat(partnerDashboardApi.middleware),
});
setupListeners(store.dispatch);
export * from './thunks/authThunks';
