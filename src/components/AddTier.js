/** @format */

import React from 'react';
import logo from '../assets/images/logo.svg';
import Sidebar from '../assets/inc/Sidebar';
import Header from '../assets/inc/Header';
import { BsChevronRight } from 'react-icons/bs';
import Footer from '../assets/inc/Footer';

function AddTier() {
  return (
    <div>
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-2 p-0'>
              <Sidebar />
            </div>
            <div className='col-lg-10 p-0'>
              <Header />
              <section className='partner-facilities-page main-page-size'>
                <div className='row align-items-center title-sec'>
                  <div className='col-lg-12'>
                    <h2>Add tier</h2>
                    <ul className='breadcrumbs'>
                      <li>
                        <a href='#'>
                          Tier
                          <BsChevronRight />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          Tier management
                          <BsChevronRight />
                        </a>
                      </li>
                      <li>Add tier</li>
                    </ul>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-5'>
                    <h3>Tier Information</h3>
                    <p>
                      In the context of computing systems, tier information
                      refers to the levels of a multi-layered architecture.
                      Tiers are often used to separate different functions of a
                      system, allowing for better organization and scalability.
                    </p>
                  </div>
                  <div className='col-lg-7'>
                    <div className='form-wrap'>
                      <form action=''>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Tier name</label>
                            <input
                              type='text'
                              placeholder='Enter your tier name'
                            />
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Start point</label>
                            <input
                              type='text'
                              placeholder='Enter Start point'
                            />
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>End point</label>
                            <input type='text' placeholder='Enter end point' />
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Workout per week</label>
                            <input
                              type='text'
                              placeholder='enter workout details'
                            />
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Maintenance</label>
                            <input
                              type='text'
                              placeholder='Enter maintenance '
                            />
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Upgrade Reward</label>
                            <input type='text' placeholder='Enter reward' />
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Color code</label>
                            <input
                              type='text'
                              placeholder='Select your color'
                            />
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>point Deduction</label>
                            <input type='text' placeholder='2x' />
                          </div>
                          <div className='col-lg-12'>
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
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AddTier;
