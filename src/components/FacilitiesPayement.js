/** @format */

// import logo from "./logo.svg";
// import "./App.css";

import React, { useState } from 'react';

import Sidebar from '../Component/Sidebar/Sidebar';
import Header from '../Component/Header/Header';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import partnerimg1 from '../assets/images/partner-img1.png';
import partnerimg2 from '../assets/images/partner-img2.png';
import partnerimg3 from '../assets/images/partner-img3.png';
import partnerimg4 from '../assets/images/partner-img4.png';
import partnerimg5 from '../assets/images/partner-img5.png';
import partnerimg6 from '../assets/images/partner-img6.png';
import editimg from '../assets/images/edit-icon.svg';
import TableWrapper from '../Component/TableWrapper/TableWrapper';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

function FacilitiesPayement() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
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
              <section className='facilities-payement main-page-size'>
                <div className='container-fluid'>
                  <div className='row align-items-center title-sec'>
                    <div className='col-lg-6'>
                      <h2>Partner facilities payments</h2>
                    </div>
                    <div className='col-lg-6 text-end'>
                      <form action=''>
                        <DatePicker
                          className='date-pick'
                          placeholderText={'Start Date'}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />

                        <DatePicker
                          className='date-pick'
                          selected={endDate}
                          placeholderText={'End Date'}
                          onChange={(date) => setEndDate(date)}
                        />
                      </form>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <TableWrapper>
                        <tr>
                          <th>partner name</th>
                          <th>Phone no</th>
                          <th>Subscription</th>
                          <th>Payment Date</th>
                          <th>Amount</th>
                          <th>Status</th>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg1} alt='' />
                            Adidas
                          </td>
                          <td>(907) 555-0101</td>
                          <td>Business Light</td>
                          <td>25/03/2023</td>
                          <td>$467</td>
                          <td className='paid'>Paid</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg2} alt='' />
                            Apple
                          </td>
                          <td>(907) 555-0101</td>
                          <td>Business Pro</td>
                          <td>25/03/2023</td>
                          <td>$567</td>
                          <td className='paid'>Paid</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg1} alt='' />
                            McDonald's
                          </td>
                          <td>(907) 555-0101</td>
                          <td>Business Plus</td>
                          <td>25/03/2023</td>
                          <td>$334</td>
                          <td className='paid'>Paid</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg3} alt='' />
                            eBay
                          </td>
                          <td>(907) 555-0101</td>
                          <td>Business Light</td>
                          <td>25/03/2023</td>
                          <td>$568</td>
                          <td className='paid'>Paid</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg4} alt='' />
                            IBM
                          </td>
                          <td>(907) 555-0101</td>
                          <td>Business Light</td>
                          <td>25/03/2023</td>
                          <td>$745</td>
                          <td className='paid'>Paid</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg5} alt='' />
                            Louis Vuitton
                          </td>
                          <td>(907) 555-0101</td>
                          <td>Business Plus</td>
                          <td>25/03/2023</td>
                          <td>$275</td>
                          <td className='paid'>Paid</td>
                        </tr>
                        <tr>
                          <td>
                            <img src={partnerimg6} alt='' />
                            Sony
                          </td>
                          <td>(907) 555-0101</td>
                          <td>Business Pro</td>
                          <td>25/03/2023</td>
                          <td>$375</td>
                          <td className='paid'>Paid</td>
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

export default FacilitiesPayement;
