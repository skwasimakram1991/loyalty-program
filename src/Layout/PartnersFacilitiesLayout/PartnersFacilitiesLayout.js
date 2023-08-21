/** @format */

import React from 'react';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer';
import { Outlet } from 'react-router-dom';

function PartnersFacilitiesLayout() {
  const path = window.location.pathname;
  console.log(path);
  return (
    <>
      <section className='dash-layout'>
        <div className='container'>
          <div className='row'>
            {path !== '/partner-dashboard/basicInfo' &&
              path !== '/partner-dashboard/payement' && (
                <div className='col-lg-2 col-md-0 p-0'>
                  <Sidebar></Sidebar>
                </div>
              )}

            <div
              className={`${
                path !== '/partner-dashboard/basicInfo' &&
                path !== '/partner-dashboard/payement'
                  ? 'col-lg-10'
                  : 'col-lg-12'
              } ms-auto col-md-12 p-0`}>
              <Header></Header>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default PartnersFacilitiesLayout;
