/** @format */

import React, { useEffect, useState } from 'react';
import DashList from './components/DashCard/DashList';
import Chart from './components/Charts/Chart';
import { useFetchDashboardDataQuery } from '../../store/api/dashboardApi';
import { useSelector } from 'react-redux';
import SuccessModal from '../../Component/notify/SuccessModal';
function Dashboard() {
  const { data, error, isLoading, isFetching } = useFetchDashboardDataQuery();
  console.log(useFetchDashboardDataQuery());

  let content;
  if (isLoading) {
    content = <SuccessModal loader={false} title={'Loading'} />;
  }

  if (data) {
    content = (
      <section className='dashboard-page main-page-size'>
        <div className='row align-items-center title-sec'>
          <div className='col-lg-6 col-md-6'>
            <h2>Dashboard</h2>
          </div>
        </div>

        <DashList
          partnerData={data?.partnerData ? data?.partnerData : 0}
          sponsorPartnerData={
            data?.sponsorPartnerData ? data?.sponsorPartnerData : 0
          }
        />

        <Chart title='User stats' />
        <Chart title='partner facility stats' />
        <Chart title='Sponsored partner stats' />
      </section>
    );
  }

  if (error) {
    content = <h2>Error</h2>;
  }
  return (
    <>
      {content}
      {/* {showSuccessModal && (
        <SuccessModal loader={false} title={'Welcome'} duration={3} />
      )} */}
    </>
  );
}

export default Dashboard;
