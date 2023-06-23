/** @format */

import React, { useState } from 'react';
import DashList from './components/DashCard/DashList';
import Chart from './components/Charts/Chart';
function Dashboard() {
  return (
    <section className='dashboard-page main-page-size'>
      <div className='row align-items-center title-sec'>
        <div className='col-lg-6 col-md-6'>
          <h2>Dashboard</h2>
        </div>
      </div>
      <DashList />
      <Chart title='User stats' />
      <Chart title='partner facility stats' />
      <Chart title='Sponsored partner stats' />
    </section>
  );
}

export default Dashboard;
