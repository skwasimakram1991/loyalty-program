/** @format */

import React from 'react';

import { BsChevronRight } from 'react-icons/bs';

function AddPartner() {
  return (
    <section className='partner-facilities-page main-page-size'>
      <div className='row align-items-center title-sec'>
        <div className='col-lg-12'>
          <h2>Add Reward Category</h2>
          <ul className='breadcrumbs'>
            <li>
              <a href='#'>
                Sponsored partner <BsChevronRight />
              </a>
            </li>
            <li>
              <a href='#'>
                Reward Category <BsChevronRight />
              </a>
            </li>
            <li>Add Reward Category</li>
          </ul>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-5'>
          <h3>Reward Information</h3>
          <p>
            Rewards are incentives given to individuals or groups in recognition
            of their achievements, contributions, or performance. Rewards can
            take many forms, including monetary compensation, promotions,
            bonuses, recognition, or other benefits.
          </p>
        </div>
        <div className='col-lg-7'>
          <div className='form-wrap'>
            <form action=''>
              <div className='row'>
                <div className='col-lg-6'>
                  <label htmlFor=''>Reward Category name *</label>
                  <input type='text' placeholder='FnB' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor=''>Description</label>
                  <textarea
                    name=''
                    id=''
                    cols='30'
                    rows='10'
                    placeholder='enter you ad description'></textarea>
                </div>

                <div className='col-lg-12'>
                  <input type='submit' value='Save' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddPartner;
