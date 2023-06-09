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
import TableWrapper from '../assets/MicroComponents/TableWrapper';

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
                      <a href='/addTier' className='title-btn'>
                        Add tier
                      </a>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <TableWrapper>
                        <tr>
                          <th>Tier name</th>
                          <th>Start Point</th>
                          <th>End Point</th>
                          <th>Workout per week</th>
                          <th>Color code</th>
                          <th>Edit</th>
                        </tr>
                        <tr>
                          <td>Healthy Beginner</td>
                          <td>50</td>
                          <td>1750</td>
                          <td>2-3</td>
                          <td>
                            <ColorCode color={'#F59A11'} />
                          </td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Intermediate Athlete</td>
                          <td>1800</td>
                          <td>5450</td>
                          <td>3-4</td>
                          <td>
                            <ColorCode color={'#1188F5'} />
                          </td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Advanced Athlete</td>
                          <td>5500</td>
                          <td>7250</td>
                          <td>4-5</td>
                          <td>
                            <ColorCode color={'#BA11F5'} />
                          </td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Elite Athlete</td>
                          <td>7300</td>
                          <td>9000</td>
                          <td>5+</td>
                          <td>
                            <ColorCode color={'#4CF67C'} />
                          </td>
                          <td>
                            <a href='#' className='edit-img'>
                              <img src={editimg} alt='' />
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td>Ambassador</td>
                          <td>9000+</td>
                          <td>Onwards</td>
                          <td>5+</td>
                          <td>
                            <ColorCode color={'#650575'} />
                          </td>
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

export default Tier;
