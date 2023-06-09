/** @format */

import React, { useState } from 'react';

import Sidebar from '../assets/inc/Sidebar';
import Header from '../assets/inc/Header';
import partnerimg1 from '../assets/images/partner-img1.png';
import partnerimg2 from '../assets/images/partner-img2.png';
import partnerimg3 from '../assets/images/partner-img3.png';
import partnerimg4 from '../assets/images/partner-img4.png';
import partnerimg5 from '../assets/images/partner-img5.png';
import partnerimg6 from '../assets/images/partner-img6.png';
import editimg from '../assets/images/edit-icon.svg';
import TableWrapper from '../assets/MicroComponents/TableWrapper';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import ToggleButton from '../assets/MicroComponents/ToggleButton';

function RewardsCategories() {
  const [toggleOn, isToggleOn] = useState(false);
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
                      <h2>Reward Category</h2>
                      <ul className='breadcrumbs'>
                        <li>
                          <a href='#'>
                            Tier <BsChevronRight />
                          </a>
                        </li>
                        <li>Reward Category</li>
                      </ul>
                    </div>
                    <div className='col-lg-6 text-end'>
                      <a href='/AddRewards' className='title-btn'>
                        Add Rewards
                      </a>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <TableWrapper>
                        <tr>
                          <th>reward Category name</th>
                          <th></th>
                          <th></th>
                          <th></th>
                          <th>Status</th>
                          <th>Edit</th>
                        </tr>
                        <tr>
                          <td>FnB</td>
                          <td></td>
                          <td></td>
                          <td>
                            {/* <a href='#' className='qr-img'>
                                <img src={qrcodeimg} alt='' />
                              </a> */}
                          </td>
                          <td>
                            <ToggleButton />
                          </td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Merchandise</td>
                          <td></td>
                          <td></td>
                          <td>
                            {/* <a href='#' className='qr-img'>
                                <img src={qrcodeimg} alt='' />
                              </a> */}
                          </td>
                          <td>
                            <ToggleButton />
                          </td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Coaching & Personal Training</td>
                          <td></td>
                          <td></td>
                          <td>
                            {/* <a href='#' className='qr-img'>
                                <img src={qrcodeimg} alt='' />
                              </a> */}
                          </td>
                          <td>
                            <ToggleButton />
                          </td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Memberships</td>
                          <td></td>
                          <td></td>
                          <td>
                            {/* <a href='#' className='qr-img'>
                                <img src={qrcodeimg} alt='' />
                              </a> */}
                          </td>
                          <td>
                            <ToggleButton />
                          </td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Nutrition</td>
                          <td></td>
                          <td></td>
                          <td>
                            {/* <a href='#' className='qr-img'>
                                <img src={qrcodeimg} alt='' />
                              </a> */}
                          </td>
                          <td>
                            <ToggleButton />
                          </td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Rehabilitation & Wellness</td>
                          <td></td>
                          <td></td>
                          <td>
                            {/* <a href='#' className='qr-img'>
                                <img src={qrcodeimg} alt='' />
                              </a> */}
                          </td>
                          <td>
                            <ToggleButton />
                          </td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Sporting Events</td>
                          <td></td>
                          <td></td>
                          <td>
                            {/* <a href='#' className='qr-img'>
                                <img src={qrcodeimg} alt='' />
                              </a> */}
                          </td>
                          <td>
                            <ToggleButton />
                          </td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                      </TableWrapper>
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

export default RewardsCategories;
