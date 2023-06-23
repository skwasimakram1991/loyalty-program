/** @format */

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
function Chartdate() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  return (
    <>
      <div className='col-lg-6 col-md-6'>
        <form action=''>
          <DatePicker
            className='date-pick'
            placeholderText={'Start Date'}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />

          <DatePicker
            className='date-pick'
            selected={endDate}
            placeholderText={'End Date'}
            onChange={(date) => setEndDate(date)}
          />
          <input type='submit' value='Export' />
        </form>
      </div>
    </>
  );
}

export default Chartdate;
