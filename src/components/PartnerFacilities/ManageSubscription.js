/** @format */

// import logo from "./logo.svg";
// import "./App.css";

import React, { useState } from 'react';

import Sidebar from './Sidebar/Sidebar';
import Header from '../../assets/inc/Header';
import Footer from '../../assets/inc/Footer';
import 'react-datepicker/dist/react-datepicker.css';
import TableWrapper from '../../assets/MicroComponents/TableWrapper';
import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';

function ManageSubscription() {
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
              <section className='manage-subs main-page-size'>
                <div className='container-fluid'>
                  <div className='row align-items-center title-sec'>
                    <div className='col-lg-6'>
                      <h2>Sponsored partner payments</h2>
                    </div>
                    <div className='col-lg-6 text-end'>
                      <a href='' className='pm-btn'>
                        Change plan
                      </a>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-5'>
                      <h3>Subscription Information</h3>
                      <p>
                        Thank you for considering our subscription services! We
                        offer a range of subscription options to fit your needs
                        and budget. Please read below to learn more about our
                        subscription plans.
                      </p>
                    </div>
                    <div className='col-lg-7'>
                      <div className='box'>
                        <h4>Business Pro</h4>
                        <ul>
                          <li>Listing</li>
                          <li>Customer Earn Reward</li>
                          <li>User activity Dashboard </li>
                          <li>Review management dashboard</li>
                          <li>Easy discovery/priority listing for app users</li>
                          <li>5 branded push/notification to users</li>
                          <li>1 Banner add for 7 days</li>
                          <li className='cancel'>
                            No commission leads from user
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='row mt-4'>
                    <div className='col-lg-5'>
                      <h3>Invoice History</h3>
                      <p>
                        Here you can view all of your past invoices and
                        payments. We keep a detailed record of all your billing
                        activity, so you can easily keep track of your expenses.
                      </p>
                    </div>
                    <div className='col-lg-7'>
                      <TableWrapper>
                        <tr>
                          <th>Date </th>
                          <th>Plan Type</th>
                          <th>Invoice Total</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                        <tr>
                          <td>12/06/23</td>
                          <td>Business Plus</td>
                          <td>49$</td>
                          <td>Paid</td>
                          <td>
                            <a href=''>View Invoice</a>
                          </td>
                        </tr>
                        <tr>
                          <td>28/10/23</td>
                          <td>Business Pro</td>
                          <td>49$</td>
                          <td>Paid</td>
                          <td>
                            <a href=''>View Invoice</a>
                          </td>
                        </tr>
                        <tr>
                          <td>07/05/23</td>
                          <td>Business Pro</td>
                          <td>49$</td>
                          <td>Paid</td>
                          <td>
                            <a href=''>View Invoice</a>
                          </td>
                        </tr>
                        <tr>
                          <td>16/08/23</td>
                          <td>Business Plus</td>
                          <td>49$</td>
                          <td>Paid</td>
                          <td>
                            <a href=''>View Invoice</a>
                          </td>
                        </tr>
                        <tr>
                          <td>12/06/23</td>
                          <td>Business Pro</td>
                          <td>49$</td>
                          <td>Paid</td>
                          <td>
                            <a href=''>View Invoice</a>
                          </td>
                        </tr>
                        <tr>
                          <td>18/09/23</td>
                          <td>Business Plus</td>
                          <td>49$</td>
                          <td>Paid</td>
                          <td>
                            <a href=''>View Invoice</a>
                          </td>
                        </tr>
                        <tr>
                          <td>15/08/23</td>
                          <td>Business Plus</td>
                          <td>49$</td>
                          <td>Paid</td>
                          <td>
                            <a href=''>View Invoice</a>
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

export default ManageSubscription;
