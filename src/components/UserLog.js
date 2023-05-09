/** @format */

// import logo from "./logo.svg";
// import "./App.css";

import React from 'react';

import Sidebar from '../assets/inc/Sidebar';
import Header from '../assets/inc/Header';

import partnerimg1 from '../assets/images/partner-img1.png';
import partnerimg2 from '../assets/images/partner-img2.png';
import partnerimg3 from '../assets/images/partner-img3.png';
import partnerimg4 from '../assets/images/partner-img4.png';
import partnerimg5 from '../assets/images/partner-img5.png';
import partnerimg6 from '../assets/images/partner-img6.png';
import editimg from '../assets/images/edit-icon.svg';
import viewImg from '../assets/images/view.svg';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

function UserLog() {
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
                <div className='container-fluid'>
                  <div className='row align-items-center title-sec2'>
                    <div className='col-lg-6'>
                      <h2>Sponsored partners</h2>
                    </div>

                    <div className='col-lg-12'>
                      <div className='form-wrap head-form user-form'>
                        <form action=''>
                          <div className='row'>
                            <div className='col-lg-4'>
                              <input type='text' placeholder='Search' />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='table-wrap'>
                        <table>
                          <tr>
                            <th>user name</th>
                            <th>user Code</th>
                            <th>Company name</th>
                            <th>Date</th>
                            <th>Point earned</th>
                            <th>View</th>
                          </tr>

                          <tr>
                            <td>Dianne Russell</td>
                            <td>123456789</td>
                            <td>
                              <a href='#' className='partneer-img'>
                                <img src={partnerimg2} alt='' />
                              </a>
                              (eBay
                            </td>
                            <td>25/03/2000</td>
                            <td>50</td>
                            <td>
                              <a href='/ViewUserLog' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Cody Fisher</td>
                            <td>123456789</td>
                            <td>
                              <a href='#' className='partneer-img'>
                                <img src={partnerimg3} alt='' />
                              </a>
                              Bank of America
                            </td>
                            <td>25/03/2000</td>
                            <td>50</td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Ralph Edwards</td>
                            <td>123456789</td>
                            <td>
                              <a href='#' className='partneer-img'>
                                <img src={partnerimg4} alt='' />
                              </a>
                              Starbucks
                            </td>
                            <td>25/03/2000</td>
                            <td>50</td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Darlene Robertson</td>
                            <td>123456789</td>
                            <td>
                              <a href='#' className='partneer-img'>
                                <img src={partnerimg5} alt='' />
                              </a>
                              Facebook
                            </td>
                            <td>25/03/2000</td>
                            <td>50</td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Leslie Alexander</td>
                            <td>123456789</td>
                            <td>
                              <a href='#' className='partneer-img'>
                                <img src={partnerimg6} alt='' />
                              </a>
                              IBM
                            </td>
                            <td>25/03/2000</td>
                            <td>50</td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Robert Fox</td>
                            <td>123456789</td>
                            <td>
                              <a href='#' className='partneer-img'>
                                <img src={partnerimg1} alt='' />
                              </a>
                              L'Oréal
                            </td>
                            <td>25/03/2000</td>
                            <td>50</td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Darrell Steward</td>
                            <td>123456789</td>
                            <td>
                              <a href='#' className='partneer-img'>
                                <img src={partnerimg5} alt='' />
                              </a>
                              Gillette
                            </td>
                            <td>25/03/2000</td>
                            <td>50</td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <ul className='page-nation'>
                        <li>
                          <a href='#'>
                            <BsChevronLeft />
                          </a>
                        </li>
                        <li className='active'>
                          <a href='#'>1</a>
                        </li>
                        <li>
                          <a href='#'>2</a>
                        </li>
                        <li>
                          <a href='#'>3</a>
                        </li>
                        <li>
                          <a href='#'>4</a>
                        </li>
                        <li>
                          <a href='#'>5</a>
                        </li>
                        <li>
                          <a href='#'>
                            <BsChevronRight />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default UserLog;
