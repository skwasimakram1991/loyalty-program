/** @format */

import React from 'react';
import logo from '../assets/images/logo.svg';
import Sidebar from '../assets/inc/Sidebar';
import Header from '../assets/inc/Header';
import Footer from '../assets/inc/Footer';
import TableWrapper from '../assets/MicroComponents/TableWrapper';
import editimg from '../assets/images/edit-icon.svg';

import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import ColorCode from '../assets/MicroComponents/ColorCode';
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
                  <div className='row align-items-center title-sec tier-title'>
                    <div className='col-lg-6'>
                      <h2>Tier benefits</h2>
                      <ul className='breadcrumbs'>
                        <li>
                          <a href='#'>
                            Tier <BsChevronRight />
                          </a>
                        </li>
                        <li>Tier benefits</li>
                      </ul>
                    </div>
                    <div className='col-lg-6 text-end'>
                      <a href='/addbenefits' className='title-btn'>
                        Add Benefit
                      </a>
                    </div>
                    <div className='col-lg-12'>
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
                                <option value='Sponsor category'>
                                  Sponsor category
                                </option>
                              </select>
                              <select name='' id=''>
                                <option default value='Tier Name'>
                                  Tier Name
                                </option>
                                <option value='Sponsor category'>
                                  Sponsor category
                                </option>
                              </select>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <TableWrapper>
                        <tr>
                          <th>Benefit name</th>
                          <th>Discount code</th>
                          <th>Discount %</th>
                          <th>Tier name</th>
                          <th>Sponsor category</th>
                          <th>Edit</th>
                        </tr>
                        <tr>
                          <td>Free Consultations + Follow ups</td>
                          <td>adidas10</td>
                          <td>10%</td>
                          <td>Healthy Beginner</td>
                          <td>FnB</td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Discounts on Packages</td>
                          <td>adidas10</td>
                          <td>10%</td>
                          <td>Intermediate Athlete</td>
                          <td>FnB</td>

                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Free Consultations + Follow ups</td>
                          <td>adidas10</td>
                          <td>10%</td>
                          <td>Advanced Athlete</td>
                          <td>FnB</td>

                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Free Sessions</td>
                          <td>adidas10</td>
                          <td>10%</td>
                          <td>Advanced Athlete</td>
                          <td>FnB</td>

                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Free access to events</td>
                          <td>adidas10</td>
                          <td>10%</td>
                          <td>Elite Athlete</td>
                          <td>FnB</td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Free Classes/Trials</td>
                          <td>adidas10</td>
                          <td>10%</td>
                          <td>Ambassador</td>
                          <td>FnB</td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                      </TableWrapper>
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
