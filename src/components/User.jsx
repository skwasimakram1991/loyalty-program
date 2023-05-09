/** @format */

import React from 'react';
import logo from '../assets/images/logo.svg';
import Sidebar from '../assets/inc/Sidebar';
import Header from '../assets/inc/Header';
import Footer from '../assets/inc/Footer';
import viewImg from '../assets/images/view.svg';
import editimg from '../assets/images/edit-icon.svg';

import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import ColorCode from '../assets/MicroComponents/ColorCode';
function Tier() {
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
                      <h2>User management</h2>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className='table-wrap'>
                        <table>
                          <tr>
                            <th>user name</th>
                            <th>user Code</th>
                            <th>Email address</th>
                            <th>Phone no</th>
                            <th>total points</th>
                            <th>View</th>
                          </tr>
                          <tr>
                            <td>Darlene Robertson</td>
                            <td>123456789</td>
                            <td>nathan.roberts@example.com</td>
                            <td>(308) 555-0121</td>
                            <td>999</td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Annette Black</td>
                            <td>123456789</td>
                            <td>debbie.baker@example.com</td>
                            <td>(808) 555-0111</td>
                            <td>999</td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Wade Warren</td>
                            <td>123456789</td>
                            <td>debra.holt@example.com</td>
                            <td>(217) 555-0113</td>
                            <td>999</td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Ronald Richards</td>
                            <td>123456789</td>
                            <td>curtis.weaver@example.com</td>
                            <td>(225) 555-0118</td>
                            <td>999</td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Albert Flores</td>
                            <td>123456789</td>
                            <td>kenzi.lawson@example.com</td>
                            <td>(208) 555-0112</td>
                            <td>999</td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Brooklyn Simmons</td>
                            <td>123456789</td>
                            <td>sara.cruz@example.com</td>
                            <td>(406) 555-0120</td>
                            <td>999</td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>Cameron Williamson</td>
                            <td>123456789</td>
                            <td>michelle.rivera@example.com</td>
                            <td>(229) 555-0109</td>
                            <td>999</td>
                            <td>
                              <a href='#' className='edit-img'>
                                <img src={viewImg} alt='' />
                              </a>
                            </td>
                          </tr>
                        </table>
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

export default Tier;
