/** @format */

import React from 'react';
import logo from '../assets/images/logo.svg';
import Sidebar from '../Component/Sidebar/Sidebar';
import Header from '../Component/Header/Header';
import { BsChevronRight } from 'react-icons/bs';
import Footer from '../Component/Footer/Footer';

function AddPartner() {
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
                    <h2>Add Sponsor</h2>
                    <ul className='breadcrumbs'>
                      <li>
                        <a href='#'>
                          Sponsored partners <BsChevronRight />
                        </a>
                      </li>
                      <li>Add Sponsor</li>
                    </ul>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-5'>
                    <h3>Sponsor Information</h3>
                    <p>
                      Sponsors are individuals, organizations, or companies that
                      provide financial or other support to an event,
                      organization, or project. Sponsors may offer funding,
                      resources, expertise, or promotional opportunities in
                      exchange for brand visibility or other benefits.
                    </p>
                  </div>
                  <div className='col-lg-7'>
                    <div className='form-wrap'>
                      <form action=''>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Sponsor name</label>
                            <input
                              type='text'
                              placeholder='Enter sponsor’s name'
                            />
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Sponsor name</label>
                            <input
                              type='text'
                              placeholder='Enter sponsor’s name'
                            />
                          </div>
                          <div className='col-lg-12'>
                            <ul>
                              <li>
                                <label>
                                  <input type='radio' name='earn' id='' />{' '}
                                  Business Light
                                </label>
                                <h5>Customer earn reward</h5>
                                <h6>
                                  Users activity Dashboard (15 Days tiral)
                                </h6>
                              </li>
                              <li>
                                <label>
                                  <input type='radio' name='earn' id='' />{' '}
                                  Business Plus
                                </label>
                                <h5>Customer earn reward</h5>
                                <h6>
                                  Can send Alert notifications for users when
                                  they don't show off for workout more than a
                                  week (or set of interval)
                                </h6>
                              </li>
                              <li>
                                <label>
                                  <input type='radio' name='earn' id='' />{' '}
                                  Business Pro
                                </label>
                                <h5>Customer earn reward</h5>
                                <h6>
                                  Users activity Dashboard (15 Days tiral)
                                </h6>
                              </li>
                            </ul>
                            {/* <label htmlFor=''>Notes</label>
                            <textarea
                              name=''
                              id=''
                              placeholder='enter you ad description'></textarea> */}
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Offer percentage</label>
                            <input
                              type='text'
                              placeholder='Enter phone number'
                            />
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Offer code</label>
                            <input
                              type='text'
                              placeholder='Enter Email address'
                            />
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Street address</label>
                            <input
                              type='text'
                              placeholder='Enter street address'
                            />
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>State</label>
                            <select name='' id='' required>
                              <option value='' selected disabled>
                                Select state
                              </option>
                              <option value=''>Select state</option>
                              <option value=''>Select state</option>
                            </select>
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>City</label>
                            <select name='' id=''>
                              <option value=''>Select state</option>
                            </select>
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Country</label>
                            <select name='' id=''>
                              <option value=''>Select City</option>
                            </select>
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Zip Code</label>
                            <select name='' id=''>
                              <option value=''>Select Country</option>
                            </select>
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

export default AddPartner;
