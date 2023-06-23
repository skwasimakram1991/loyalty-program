/** @format */

import React from 'react';
// import img1 from '../../../assets/images/dashboard-img1.svg';
function Dashcard({ img, title, amount }) {
  return (
    <>
      <div className='col-lg col-md col-4'>
        <div className='wrap'>
          <img src={img} alt='' />
          <h3>
            <span>{title}</span>
            {amount}
          </h3>
        </div>
      </div>
    </>
  );
}
export default Dashcard;
