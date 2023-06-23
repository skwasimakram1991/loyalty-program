/** @format */

import React from 'react';

// import './assets/css/style.css';

import { Routes, Route } from 'react-router-dom';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardLayout from './Layout/DashboardLayout';
// import PartnerFacilities from './pages/PartneerFacilities/PartnerFacilities';
import PartnerFacilities from './Pages/PartneerFacilities/PartnerFacilities';
import AddPartner from './Pages/PartneerFacilities/AddPartner';
// import AddPartner from './components/AddPartner';
import SponsoredPartner from './components/SponsoredPartner';
import AddSponsor from './components/AddSponsor';
import Rewards from './components/RewardsCategories';
import AddRewards from './components/AddReward';
import AddTier from './components/AddTier';
import Tier from './components/Tier';
import TierBenefits from './components/TierBenefits';
import AddBenefits from './components/AddBenefits';
import User from './components/User';
import ViewUser from './components/ViewUser';
import UserLog from './components/UserLog';
import Settings from './components/Settings';
import SubscriptionMangement from './components/SubscriptionMangement';
import FacilitiesPayement from './components/FacilitiesPayement';
import SponseredPayement from './components/SponseredPayement';
import Payement from './components/Payement';
import ViewUserLog from './components/ViewUserlog';
// PartnerFacilities
import BasicInfo from './components/PartnerFacilities/BasicInfo';
import Dashboard2 from './components/PartnerFacilities/Dashboard';
import ManageSubscription from './components/PartnerFacilities/ManageSubscription';
import AccountSetting from './components/PartnerFacilities/AccountSetting';
import ManagePay from './components/PartnerFacilities/ManagePay';
import PayementMethod from './components/PartnerFacilities/PayementMethod';
// SponseredPartners
import BasicInfo2 from './components/SponseredPartners/BasicInfo';
import Dashboard3 from './components/SponseredPartners/Dashboard';
import ManageSubscription2 from './components/SponseredPartners/ManageSubscription';
import AccountSetting2 from './components/SponseredPartners/AccountSetting';
import ManagePay2 from './components/SponseredPartners/ManagePay';
import PayementMethod2 from './components/SponseredPartners/PayementMethod';

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path='/login' component={login} />
    //     <Route exact path='/' component={Dashboard} />
    //     <Route exact path='/PartnerFacilities' component={PartnerFacilities} />
    //     <Route exact path='/AddPartner' component={AddPartner} />
    //     <Route exact path='/Sponsor' component={SponsoredPartner} />
    //     <Route exact path='/AddSponsor' component={AddSponsor} />
    //     <Route exact path='/Rewards' component={Rewards} />
    //     <Route exact path='/AddRewards' component={AddRewards} />
    //     <Route exact path='/Tier' component={Tier} />
    //     <Route exact path='/addTier' component={AddTier} />
    //     <Route exact path='/tierbenefits' component={TierBenefits} />
    //     <Route exact path='/payment' component={Payement} />
    //     <Route
    //       exact
    //       path='/facilitiesPayement'
    //       component={FacilitiesPayement}
    //     />
    //     <Route exact path='/sponseredPayement' component={SponseredPayement} />
    //     <Route exact path='/addbenefits' component={AddBenefits} />
    //     <Route exact path='/user' component={User} />
    //     <Route exact path='/userView' component={ViewUser} />
    //     <Route exact path='/userLog' component={UserLog} />
    //     <Route exact path='/settings' component={Settings} />
    //     <Route
    //       exact
    //       path='/SubscriptionMangement'
    //       component={SubscriptionMangement}
    //     />
    //     <Route exact path='/ViewUserLog' component={ViewUserLog} />

    //     {/* Partner facilities screen */}
    //     <Route exact path='/basicinfo' component={BasicInfo} />
    //     <Route exact path='/dashboard2' component={Dashboard2} />
    //     <Route exact path='/manage-sub' component={ManageSubscription} />
    //     <Route exact path='/account-setting' component={AccountSetting} />
    //     <Route exact path='/ManagePay' component={ManagePay} />
    //     <Route exact path='/PayementMethod' component={PayementMethod} />
    //     {/*SponseredPartners */}
    //     <Route exact path='/basicinfo2' component={BasicInfo2} />
    //     <Route exact path='/dashboard3' component={Dashboard3} />
    //     <Route exact path='/manage-sub2' component={ManageSubscription2} />
    //     <Route exact path='/account-setting2' component={AccountSetting2} />
    //     <Route exact path='/ManagePay2' component={ManagePay2} />
    //     <Route exact path='/PayementMethod2' component={PayementMethod2} />
    //   </Switch>
    // </Router>
    <>
      <Routes>
        <Route
          path='/'
          element={
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          }></Route>
        <Route path='/partners'>
          <Route
            index
            element={
              <DashboardLayout>
                <PartnerFacilities />
              </DashboardLayout>
            }
          />
          <Route
            path='add'
            element={
              <DashboardLayout>
                <AddPartner />
              </DashboardLayout>
            }
          />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<h2>Not Found</h2>} />
      </Routes>
    </>
  );
}

export default App;
