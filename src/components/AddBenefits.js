/** @format */

import React from 'react';
import logo from '../assets/images/logo.svg';
import fileLogo from '../assets/images/file-logo.png';
import Sidebar from '../Component/Sidebar/Sidebar';
import Header from '../Component/Header/Header';
import { BsChevronRight } from 'react-icons/bs';
import Footer from '../Component/Footer/Footer';

function AddBenefits() {
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
                    <h2>Add benefit</h2>
                    <ul className='breadcrumbs'>
                      <li>
                        <a href='#'>
                          Tier
                          <BsChevronRight />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          Tier benefit
                          <BsChevronRight />
                        </a>
                      </li>
                      <li>Add benefit</li>
                    </ul>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-5'>
                    <h3>Benefit Information</h3>
                    <p>
                      Log information is a record of events and errors that
                      occur within a system. It provides valuable insights into
                      system performance, user behavior, and security. By
                      keeping track of log data, you can troubleshoot issues,
                      monitor performance, and identify areas for optimization.
                    </p>
                  </div>
                  <div className='col-lg-7'>
                    <div className='form-wrap'>
                      <form action=''>
                        <div className='row'>
                          <div className='col-lg-6'>
                            <select name='' id=''>
                              <option default value='Enter benefit name'>
                                Enter benefit name
                              </option>
                              <option value='Enter benefit name'>
                                Enter benefit name
                              </option>
                            </select>
                          </div>
                          <div className='col-lg-6'>
                            <select name='' id=''>
                              <option default value='Enter benefit name'>
                                Enter benefit name
                              </option>
                              <option value='Enter benefit name'>
                                Enter benefit name
                              </option>
                            </select>
                          </div>
                          <div className='col-lg-12'>
                            <select name='' id=''>
                              <option default value='Enter benefit name'>
                                Select Sponsor
                              </option>
                              <option value='Enter benefit name'>
                                Enter benefit name
                              </option>
                            </select>
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>benefit name</label>
                            <input
                              type='text'
                              placeholder='Enter benefit name'
                            />
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Discount Code</label>
                            <input
                              type='text'
                              placeholder='Enter discount code'
                            />
                          </div>
                          <div className='col-lg-6'>
                            <label htmlFor=''>Discount Percentage</label>
                            <input type='text' placeholder='Enter discount %' />
                          </div>
                          <div className='col-lg-12'>
                            <label htmlFor=''>Logo</label>
                            <div className='file-box'>
                              <img src={fileLogo} alt='' />
                              <h4>
                                Browse file
                                <span>Only JPEG and PNG with max size 1MB</span>
                              </h4>
                              <button className='pm-btn'>Upload</button>
                              <input type='file' name='' id='' />
                            </div>
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

export default AddBenefits;
