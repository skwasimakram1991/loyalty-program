/** @format */

import React from 'react';
import logo from '../assets/images/logo.svg';
import Sidebar from '../assets/inc/Sidebar';
import Header from '../assets/inc/Header';
import viewImg from '../assets/images/view.svg';
import { BsChevronRight } from 'react-icons/bs';
import Footer from '../assets/inc/Footer';
import partnerimg1 from '../assets/images/partner-img1.png';
import partnerimg2 from '../assets/images/partner-img2.png';
import partnerimg3 from '../assets/images/partner-img3.png';
import partnerimg4 from '../assets/images/partner-img4.png';
import partnerimg5 from '../assets/images/partner-img5.png';
import partnerimg6 from '../assets/images/partner-img6.png';
function viewUserLog() {
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
                    <h2>user Log</h2>
                    <ul className='breadcrumbs'>
                      <li>
                        <a href='#'>
                          user
                          <BsChevronRight />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          user log
                          <BsChevronRight />
                        </a>
                      </li>
                      <li>Details</li>
                    </ul>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-5'>
                    <h3>log Information</h3>
                    <p>
                      Keep track of your system's activity and performance with
                      detailed log information. Logs record events and errors,
                      allowing you to identify issues and troubleshoot them
                      quickly.
                    </p>
                  </div>
                  <div className='col-lg-7'>
                    <div className='userGrid'>
                      <h5>
                        User code <span>123456789</span>
                      </h5>
                      <h5>
                        Username <span>Esther Howard</span>
                      </h5>
                      <h5>
                        Phone Number<span>(316) 555-0116</span>
                      </h5>
                      <h5>
                        Total points earned<span>999</span>
                      </h5>
                      <h5>
                        Company name
                        <span>Louis Vuitton </span>
                      </h5>
                      <h5>
                        Registration date<span>25/03/2000</span>
                      </h5>
                      <h5>
                        City <span>Santa Ana</span>
                      </h5>
                    </div>
                  </div>
                  <div className='col-lg-12 mr-t-24'>
                    <div className='table-wrap'>
                      <table class='table userTable'>
                        <tr>
                          <th>Company name</th>

                          <th></th>
                          <th></th>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Points</th>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg1} alt='' />
                            Brooklyn Simmons
                          </td>
                          <td></td>
                          <td></td>
                          <td>25/03/2000</td>
                          <td>12:41AM</td>
                          <td>+50</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg2} alt='' />
                            Cody Fisher
                          </td>
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
                          <td>25/03/2000</td>
                          <td>12:41AM</td>
                          <td>+50</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg1} alt='' />
                            Albert Flores
                          </td>
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
                          <td>25/03/2000</td>
                          <td>12:41AM</td>
                          <td>+50</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg3} alt='' />
                            Kathryn Murphy
                          </td>
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
                          <td>25/03/2000</td>
                          <td>12:41AM</td>
                          <td>+50</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg4} alt='' />
                            Jenny Wilson
                          </td>
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
                          <td>25/03/2000</td>
                          <td>12:41AM</td>
                          <td>+50</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg5} alt='' />
                            Eleanor Pena
                          </td>
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
                          <td>25/03/2000</td>
                          <td>12:41AM</td>
                          <td>+50</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg6} alt='' />
                            Ronald Richards
                          </td>
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
                          <td>25/03/2000</td>
                          <td>12:41AM</td>
                          <td>+50</td>
                        </tr>
                      </table>
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

export default viewUserLog;
