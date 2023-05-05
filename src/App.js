import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css"

import "./assets/css/style.css"
// import { Redirect } from "react-router";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


import login from "./components/Login";
import Dashboard from "./components/Dashboard";
import PartnerFacilities from "./components/PartnerFacilities";
import AddPartner from  "./components/AddPartner"
function App() {
  return (
    <Router>
      <Switch>
        {/* <Redirect to="/" /> */}
        <Route exact path="/login" component={login} />
        <Route exact path="/Dashboard" component={Dashboard} />
        <Route exact path="/PartnerFacilities" component={PartnerFacilities} />
        <Route exact path="/AddPartner" component={AddPartner} />
        {/* <Route path="/about" component={About} />
        <Route path="/contactus" component={ContactUs} /> */}
        {/* <Redirect to="/" /> */}
      </Switch>
    </Router>
  );
}


export default App;
