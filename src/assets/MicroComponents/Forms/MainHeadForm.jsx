/** @format */

import React from 'react';

function MainHeadForm() {
  return (
    <>
      <div className='form-wrap head-form'>
        <form action=''>
          <div className='row'>
            <div className='col-lg-4'>
              <input type='text' placeholder='Search' />
            </div>
            <div className='col-lg-5 ms-auto d-flex justify-content-end  '>
              <select name='' id=''>
                <option default value='Tier Name'>
                  Tier Name
                </option>
                <option value='Sponsor category'>Sponsor category</option>
              </select>
              <select name='' id=''>
                <option default value='Tier Name'>
                  Tier Name
                </option>
                <option value='Sponsor category'>Sponsor category</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default MainHeadForm;
