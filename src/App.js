/** @format */

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminLayout from './Layout/AdminLayout/AdminLayout';
import PartnersFacilitiesLayout from './Layout/PartnersFacilitiesLayout/PartnersFacilitiesLayout';
import SponseredPartnersLayout from './Layout/SponseredPartnersLayout/SponseredPartnersLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login';
import ErrorPage from './Pages/ErrorPage';
import { Navigate } from 'react-router-dom/dist';
import Settings from './Pages/Settings';
import SponseredPayement from './Pages/SponseredPayement';
import PartnerFacilities from './Pages/PartneerFacilities/PartnerFacilities';
import AddPartner from './Pages/PartneerFacilities/AddPartner';
import SubscriptionMangement from './Pages/PartneerFacilities/SubscriptionMangement';
import RewardsCategories from './Pages/PartneerFacilities/RewardsCategories';
import AddReward from './Pages/PartneerFacilities/AddReward';
import RouteProtection from './Component/Auth/RouteProtection';
import PartnerDashboard from './Pages/Partners-Dashboard/Dashboard';
import SponserDashboard from './Pages/Sponser-Dashboard/Dashboard';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RouteProtection role={'super-admin'} />,
      children: [
        {
          path: '/',
          element: <AdminLayout />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: '/',
              element: <Navigate to='/dashboard' replace />,
            },
            {
              path: '/dashboard',
              element: <Dashboard />,
              errorElement: <ErrorPage />,
            },
            {
              path: '/settings',
              element: <Settings />,
            },
            {
              path: '/payments',
              children: [
                {
                  path: 'partner',
                  element: <SponseredPayement />,
                },
                {
                  path: 'sponser',
                  element: <SponseredPayement />,
                },
              ],
            },

            {
              path: 'partner',
              children: [
                {
                  index: true,
                  element: <PartnerFacilities />,
                },
                {
                  path: 'addpartner',
                  element: <AddPartner />,
                },
                {
                  path: 'subscription',
                  element: <SubscriptionMangement />,
                },
              ],
            },
            {
              path: 'sponser',
              children: [
                {
                  index: true,
                  element: <PartnerFacilities />,
                },
                {
                  path: 'add',
                  element: <AddPartner />,
                },
                {
                  path: 'cattegory',
                  element: <RewardsCategories />,
                },
                {
                  path: 'addreward',
                  element: <AddReward />,
                },
                {
                  path: 'subscription',
                  element: <SubscriptionMangement />,
                },
              ],
            },
            {
              path: 'tier',
              children: [
                {
                  index: true,
                  element: <PartnerFacilities />,
                },
                {
                  path: 'benefits',
                  element: <AddPartner />,
                },
                {
                  path: 'subscription',
                  element: <SubscriptionMangement />,
                },
              ],
            },
            {
              path: 'user',
              children: [
                {
                  index: true,
                  element: <PartnerFacilities />,
                },
                {
                  path: 'log',
                  element: <AddPartner />,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: '/',
      element: <RouteProtection role={'admin'} />,
      children: [
        {
          path: '/',
          element: <PartnersFacilitiesLayout />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: '/',
              element: <Navigate to='/admin-dashboard' replace />,
            },
            {
              path: '/admin-dashboard',
              element: <PartnerDashboard />,
            },
          ],
        },
      ],
    },
    {
      path: '/',
      element: <RouteProtection role={'sponser'} />,
      children: [
        {
          path: '/',
          element: <SponseredPartnersLayout />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: '/',
              element: <Navigate to='/sponser-dashboard' replace />,
            },
            {
              path: '/sponser-dashboard',
              element: <SponserDashboard />,
            },
          ],
        },
      ],
    },

    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
