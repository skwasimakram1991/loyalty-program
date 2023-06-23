/** @format */

import React from 'react';
import Dashcard from './Dashcard';
import { cardData } from './Data/Data';
function DashList() {
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
