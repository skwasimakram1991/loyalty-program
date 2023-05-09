/** @format */

import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
// import { Redirect } from "react-router";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import login from './components/Login';
import Dashboard from './components/Dashboard';
import PartnerFacilities from './components/PartnerFacilities';
import AddPartner from './components/AddPartner';
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
import ViewUserLog from './components/ViewUserlog';
function App() {
  return (
    <Router>
      <Switch>
        {/* <Redirect to="/" /> */}
        <Route exact path='/login' component={login} />
        <Route exact path='/Dashboard' component={Dashboard} />
        <Route exact path='/PartnerFacilities' component={PartnerFacilities} />
        <Route exact path='/AddPartner' component={AddPartner} />
        <Route exact path='/Sponsor' component={SponsoredPartner} />
        <Route exact path='/AddSponsor' component={AddSponsor} />
        <Route exact path='/Rewards' component={Rewards} />
        <Route exact path='/AddRewards' component={AddRewards} />
        <Route exact path='/Tier' component={Tier} />
        <Route exact path='/addTier' component={AddTier} />
        <Route exact path='/tierbenefits' component={TierBenefits} />
        <Route exact path='/addbenefits' component={AddBenefits} />
        <Route exact path='/user' component={User} />
        <Route exact path='/userView' component={ViewUser} />
        <Route exact path='/userLog' component={UserLog} />
        <Route exact path='/settings' component={Settings} />
        <Route
          exact
          path='/SubscriptionMangement'
          component={SubscriptionMangement}
        />
        <Route exact path='/ViewUserLog' component={ViewUserLog} />
      </Switch>
    </Router>
  );
}

export default App;
