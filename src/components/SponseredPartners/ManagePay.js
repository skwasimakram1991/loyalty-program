/** @format */
/** @format */

import React from 'react';
import logo from '../../assets/images/logo.svg';
import VisaImg from '../../assets/images/visa.png';
import Sidebar from './Sidebar/Sidebar';
import Header from '../../assets/inc/Header';
import Footer from '../../assets/inc/Footer';
import { BsChevronRight } from 'react-icons/bs';

function ManagePay() {
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
              <section className='manage-page main-page-size'>
                <div className='row align-items-center title-sec'>
                  <div className='col-lg-6'>
                    <h2>Account Settings</h2>
                    <ul class='breadcrumbs'>
                      <li>
                        <a href='#'>
                          Account Settings
                          <BsChevronRight />
                        </a>
                      </li>
                      <li>manage payment</li>
                    </ul>
                  </div>
                  <div className='col-lg-6 text-end'>
                    <a href='/addcard' class='title-btn'>
                      Add card
                    </a>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-5'>
                    <h3>Card details</h3>
                    <p>
                      provide your card details, The security of your
                      information is of utmost importance to us, and we assure
                      you that we have implemented strict measures to safeguard
                      your data. Please enter your card details using the secure
                      form provided.
                    </p>
                  </div>
                  <div className='col-lg-7'>
                    {/* <div className='visa-card'>
                      <div className='row align-items-center'>
                        <div className='col-6'>
                          <ul>
                            <li>
                              <span>Name on card</span>
                              Edward Hunt
                            </li>
                            <li>
                              <span>credit card number</span>
                              5524 6528 4985 4502
                            </li>
                            <li>
                              <span>Expiry date</span>
                              06/27
                            </li>
                            <li>
                              <span>CVV</span>
                              123
                            </li>
                          </ul>
                          <a href='' className='pm-btn'>
                            Delete card
                          </a>
                        </div>
                        <div className='col-6'>
                          <img src={VisaImg} alt='' />
                        </div>
                      </div>
                    </div> */}
                    {/* <div className='form-wrap'>
                      <form action=''>
                        <div className='row'>
                          <div className='col-6'>
                            <label htmlFor=''>Name on card</label>
                            <input
                              type='text'
                              placeholder='Enter your name on card'
                            />
                          </div>
                          <div className='col-6'>
                            <label htmlFor=''>credit card number</label>
                            <input
                              type='text'
                              placeholder='X X X X    X X X X    X X X X    X X X X'
                            />
                          </div>
                          <div className='col-6'>
                            <label htmlFor=''>Expiry date </label>
                            <input type='text' placeholder='mm  /  yy' />
                          </div>
                          <div className='col-6'>
                            <label htmlFor=''>CVV</label>
                            <input type='text' placeholder='x  x  x' />
                          </div>
                        </div>
                        <input type='submit' value='Save' />
                      </form>
                    </div> */}
                    <div className='card-box'>
                      <div className='visa-card'>
                        <label htmlFor='check'>
                          <div className='row align-items-center'>
                            <div className='col-12'>
                              <input type='radio' name='' id='check' />
                            </div>
                            <div className='col-6'>
                              <ul>
                                <li>
                                  <span>Name on card</span>
                                  Edward Hunt
                                </li>
                                <li>
                                  <span>credit card number</span>
                                  5524 6528 4985 4502
                                </li>
                                <li>
                                  <span>Expiry date</span>
                                  06/27
                                </li>
                                <li>
                                  <span>CVV</span>
                                  123
                                </li>
                              </ul>
                              <a href='' className='pm-btn'>
                                Delete card
                              </a>
                            </div>
                            <div className='col-6 text-end'>
                              <img src={VisaImg} alt='' />
                            </div>
                          </div>
                        </label>
                      </div>
                      <div className='visa-card'>
                        <label htmlFor='check2'>
                          <div className='row align-items-center'>
                            <div className='col-12'>
                              <input type='radio' name='' id='check2' />
                            </div>
                            <div className='col-6'>
                              <ul>
                                <li>
                                  <span>Name on card</span>
                                  Edward Hunt
                                </li>
                                <li>
                                  <span>credit card number</span>
                                  5524 6528 4985 4502
                                </li>
                                <li>
                                  <span>Expiry date</span>
                                  06/27
                                </li>
                                <li>
                                  <span>CVV</span>
                                  123
                                </li>
                              </ul>
                              <a href='' className='pm-btn'>
                                Delete card
                              </a>
                            </div>
                            <div className='col-6 text-end'>
                              <img src={VisaImg} alt='' />
                            </div>
                          </div>
                        </label>
                      </div>
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

export default ManagePay;
