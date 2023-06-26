/** @format */

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from './Layout/DashboardLayout';
import Adminlayout from './Layout/AdminLayout/AdminLayout';
import PartnersFacilitiesLayout from './Layout/PartnersFacilitiesLayout/PartnersFacilitiesLayout';
import SponseredPartnersLayout from './Layout/SponseredPartnersLayout/SponseredPartnersLayout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login';
import PartnerFacilities from './Pages/PartneerFacilities/PartnerFacilities';
import AddPartner from './Pages/PartneerFacilities/AddPartner';
import SubscriptionMangement from './Pages/PartneerFacilities/SubscriptionMangement';
import Notfound from './Pages/NotFound/Notfound';
import RewardsCategories from './Pages/PartneerFacilities/RewardsCategories';
import AddReward from './Pages/PartneerFacilities/AddReward';
function DashboardRoutes() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Adminlayout />}>
          <Route path='/' element={<Navigate replace to='dashboard' />} />
          <Route path='dashboard' element={<Dashboard />}></Route>
          <Route path='partner/'>
            <Route index element={<PartnerFacilities />} />
            <Route path='addpartner' element={<AddPartner />} />
            <Route path='subscription' element={<SubscriptionMangement />} />
          </Route>
          <Route path='sponser/'>
            <Route index element={<PartnerFacilities />} />
            <Route path='addsponser' element={<AddPartner />} />
            <Route path='cattegory' element={<RewardsCategories />} />
            <Route path='addreward' element={<AddReward />} />
            <Route path='subscription' element={<SubscriptionMangement />} />
          </Route>
          <Route path='tier/'>
            <Route index element={<PartnerFacilities />} />
            <Route path='benefits' element={<AddPartner />} />
            <Route path='subscription' element={<SubscriptionMangement />} />
          </Route>
          <Route
            path='payments'
            element={<Navigate replace to='/payments/partner' />}>
            <Route path='/payments/partner' element={<PartnerFacilities />} />
            <Route path='/payments/sponser' element={<AddPartner />} />
          </Route>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      {/* <Routes>
        <Route path='/' element={<Adminlayout />}>
          <Route path='dashboard' element={<Dashboard />}></Route>
        </Route>
        <Route path='/' element={<Adminlayout />}>
          <Route path='dashboard' element={<Dashboard />}></Route>
        </Route>
      </Routes> */}
    </>
  );
}

export default DashboardRoutes;
