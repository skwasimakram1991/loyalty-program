/** @format */

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminLayout from './Layout/AdminLayout/AdminLayout';
import PartnersFacilitiesLayout from './Layout/PartnersFacilitiesLayout/PartnersFacilitiesLayout';
import SponseredPartnersLayout from './Layout/SponseredPartnersLayout/SponseredPartnersLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login';
import PartnersLogin from './Pages/Partners-Dashboard/Login';
import ErrorPage from './Pages/ErrorPage';
import { Navigate } from 'react-router-dom/dist';
import Settings from './Pages/Settings';
import SponseredPayement from './Pages/SponseredPayement';
import PartnerFacilities from './Pages/PartneerFacilities/PartnerFacilities';
import AddPartner from './Pages/PartneerFacilities/AddPartner';
import EditPartner from './Pages/PartneerFacilities/EditPartner';
import SubscriptionMangement from './Pages/PartneerFacilities/SubscriptionMangement';
import RewardsCategories from './Pages/PartneerFacilities/RewardsCategories';
import AddReward from './Pages/PartneerFacilities/AddReward';
import RouteProtection from './Component/Auth/RouteProtection';
import PartnerRouteProtection from './Component/Auth/PartnerRouteProtection';
import PartnerDashboard from './Pages/Partners-Dashboard/Dashboard';
import ManageSubscription from './Pages/Partners-Dashboard/ManageSubscription';
import AccountSetting from './Pages/Partners-Dashboard/AccountSetting';
import ManagePayement from './Pages/Partners-Dashboard/ManagePay';
import PayementMethod from './Pages/Partners-Dashboard/PayementMethod';
import BasicInfo from './Pages/Partners-Dashboard/BasicInfo';
// import ManageSubscription from './Pages/Partners-Dashboard/ManageSubscription';
import SponserDashboard from './Pages/Sponser-Dashboard/Dashboard';
import CreateSubscription from './Pages/PartneerFacilities/CreateSubscription';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RouteProtection role={'backend'} redirectTo='/login' />,
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
                  path: 'editpartner/:id',
                  element: <EditPartner />,
                },
                {
                  path: 'subscription',
                  element: <SubscriptionMangement />,
                },
                {
                  path: 'subscription-create',
                  element: <CreateSubscription />,
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
      path: '/partner-dashboard',
      element: (
        <RouteProtection role={'sub-backend'} redirectTo='/partner/login' />
      ),
      children: [
        {
          path: '',
          element: <PartnersFacilitiesLayout />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: '',
              element: <PartnerDashboard />,
            },
            {
              path: 'manage-sub',
              element: <ManageSubscription />,
            },
            {
              path: 'account-setting',
              element: <AccountSetting />,
            },
            {
              path: 'ManagePay',
              element: <ManagePayement />,
            },
            {
              path: 'basicInfo',
              element: <BasicInfo />,
            },
            {
              path: 'payement',
              element: <PayementMethod />,
            },
          ],
        },
      ],
    },
    {
      path: '/',
      element: (
        <RouteProtection role={['sponser']} redirectTo='/sponser/login' />
      ),
      children: [
        {
          path: '/sponser',
          element: <SponseredPartnersLayout />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: '/sponser',
              element: <Navigate to='dashboard' replace />,
            },
            {
              path: 'dashboard',
              element: <PartnersLogin />,
            },
          ],
        },
      ],
    },

    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/partner/login',
      element: <PartnersLogin />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
