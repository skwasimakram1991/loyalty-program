/** @format */

import React from 'react';
import logo from '../assets/images/logo.svg';
import Sidebar from '../assets/inc/Sidebar';
import Header from '../assets/inc/Header';
import Footer from '../assets/inc/Footer';
import partnerimg1 from '../assets/images/partner-img1.png';
import partnerimg2 from '../assets/images/partner-img2.png';
import partnerimg3 from '../assets/images/partner-img3.png';
import partnerimg4 from '../assets/images/partner-img4.png';
import partnerimg5 from '../assets/images/partner-img5.png';
import partnerimg6 from '../assets/images/partner-img6.png';
import editimg from '../assets/images/edit-icon.svg';

import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
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
                <div className='container-fluid'>
                  <div className='row align-items-center title-sec'>
                    <div className='col-lg-6'>
                      <h2>Tier management</h2>
                      <ul className='breadcrumbs'>
                        <li>
                          <a href='#'>
                            Tier <BsChevronRight />
                          </a>
                        </li>

                        <li>Tier management</li>
                      </ul>
                    </div>
                    <div className='col-lg-6 text-end'>
                      <a href='/AddSponsor' className='title-btn'>
                        Add tier
                      </a>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='table-wrap'>
                        <table>
                          <tr>
                            <th>Tier name</th>
                            <th>Start Point</th>
                            <th>End Point</th>
                            <th>Workout per week</th>
                            <th>Color code</th>
                            <th>Edit</th>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg1} alt='' />
                              Healthy Beginner
                            </td>
                            <td>50</td>
                            <td>1750</td>
                            <td>2-3</td>
                            <td>
                              <span></span>
                              #F59A11
                            </td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={editimg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg2} alt='' />
                              Apple
                            </td>
                            <td>jessica.hanson@example.com</td>
                            <td>(252) 555-0126</td>
                            <td>
                              {/* <a href='#' className='qr-img'>
                                <img src={qrcodeimg} alt='' />
                              </a> */}
                            </td>
                            <td>
                              {/* <a href='#' className='down-img'>
                                <img src={downloadimg} alt='' />
                              </a> */}
                            </td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={editimg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg1} alt='' />
                              McDonald's
                            </td>
                            <td>bill.sanders@example.com</td>
                            <td>(239) 555-0108</td>
                            <td>
                              {/* <a href='#' className='qr-img'>
                                <img src={qrcodeimg} alt='' />
                              </a> */}
                            </td>
                            <td>
                              {/* <a href='#' className='down-img'>
                                <img src={downloadimg} alt='' />
                              </a> */}
                            </td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={editimg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg3} alt='' />
                              eBay
                            </td>
                            <td>tim.jennings@example.com</td>
                            <td>(308) 555-0121</td>
                            <td>
                              {/* <a href='#' className='qr-img'>
                                <img src={qrcodeimg} alt='' />
                              </a> */}
                            </td>
                            <td>
                              {/* <a href='#' className='down-img'>
                                <img src={downloadimg} alt='' />
                              </a> */}
                            </td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={editimg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg4} alt='' />
                              IBM
                            </td>
                            <td>tanya.hill@example.com</td>
                            <td>(629) 555-0129</td>
                            <td>
                              {/* <a href='#' className='qr-img'>
                                <img src={qrcodeimg} alt='' />
                              </a> */}
                            </td>
                            <td>
                              {/* <a href='#' className='down-img'>
                                <img src={downloadimg} alt='' />
                              </a> */}
                            </td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={editimg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg5} alt='' />
                              Louis Vuitton
                            </td>
                            <td>nathan.roberts@example.com</td>
                            <td>(302) 555-0107</td>
                            <td>
                              {/* <a href='#' className='qr-img'>
                                <img src={qrcodeimg} alt='' />
                              </a> */}
                            </td>
                            <td>
                              {/* <a href='#' className='down-img'>
                                <img src={downloadimg} alt='' />
                              </a> */}
                            </td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={editimg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src={partnerimg6} alt='' />
                              Sony
                            </td>
                            <td>debbie.baker@example.com</td>
                            <td>(319) 555-0115</td>
                            <td>
                              {/* <a href='#' className='qr-img'>
                                <img src={qrcodeimg} alt='' />
                              </a> */}
                            </td>
                            <td>
                              {/* <a href='#' className='down-img'>
                                <img src={downloadimg} alt='' />
                              </a> */}
                            </td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={editimg} alt='' />
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
      <Footer />
    </div>
  );
}

export default AddPartner;