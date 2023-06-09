/** @format */

import React, { useState } from 'react';
import BarCharts from './BarCharts';
import Chartdate from './Chartdate';
function Chart({ title }) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className='sec2'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6'>
            <h3>{title}</h3>
          </div>
          <Chartdate />
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <BarCharts />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
