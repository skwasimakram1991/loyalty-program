/** @format */

import React from 'react';
import Dashcard from './Dashcard';
import img1 from '../../img/dashboard-img1.svg';
import { useFetchDashboardDataQuery } from '../../../../store/api/dashboardApi';
function DashList({ partnerData = 32, sponsorPartnerData = 12 }) {
  const cardData = [
    {
      id: 1,
      title: 'user',
      amount: 1200,
      img: img1,
    },
    {
      id: 2,
      title: 'Partner Facility',
      amount: partnerData,
      img: img1,
    },
    {
      id: 3,
      title: 'Sponsored Partner',
      amount: sponsorPartnerData,
      img: img1,
    },
  ];
  // console.log(cardData);
  return (
    <>
      <div className='sec1'>
        <div className='row'>
          {cardData.map((data) => {
            return <Dashcard {...data} key={data.id} />;
          })}
        </div>
      </div>
    </>
  );
}

export default DashList;
