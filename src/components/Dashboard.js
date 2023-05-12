/** @format */

import React, { useState } from 'react';
import Sidebar from '../assets/inc/Sidebar';
import Header from '../assets/inc/Header';
import Footer from '../assets/inc/Footer';
import DashList from '../assets/MicroComponents/DashCard/DashList';
import Chart from '../assets/MicroComponents/Charts/Chart';
function Dashboard() {
  return (
    <div>
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-2 col-md-0 p-0'>
              <Sidebar />
            </div>
            <div className='col-lg-10 col-md-12 p-0'>
              <Header />
              <section className='dashboard-page main-page-size'>
                <div className='row align-items-center title-sec'>
                  <div className='col-lg-6 col-md-6'>
                    <h2>Dashboard</h2>
                  </div>
                </div>
                <DashList />
                <Chart title='User' />
                <Chart title='Partner Facility' />
                <Chart title='Sponsored Partner' />
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Dashboard;
