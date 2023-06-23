/** @format */

import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import Dash2Img1 from '../../assets/images/dash3-img1.png';
import Dash2Img2 from '../../assets/images/dash3-img2.png';
// import Chart from '../../assets/MicroComponents/Charts/Chart';
import qr from '../../assets/images/q2.png';
// import Chartdate from '../../assets/MicroComponents/Charts/Chartdate';
import TableWrapper from '../../Component/TableWrapper/TableWrapper';

function Dashboard() {
  return (
    <div>
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-2 col-md-0 p-0'>
              <Sidebar />
            </div>
            <div className='col-lg-10 col-md-12 p-0'>
              <Header />
              <section className='dashboard-page dash2-sec main-page-size'>
                <div className='row align-items-center title-sec'>
                  <div className='col-lg-6 col-md-6'>
                    <h2>Dashboard</h2>
                  </div>
                </div>
                <div className='sec1'>
                  <div className='row'>
                    <div className='col-lg col-md col-4'>
                      <div className='wrap'>
                        <img src={Dash2Img1} alt='' />
                        <h3>
                          <span>Total redemption</span>
                          1824
                        </h3>
                      </div>
                      {/* test   new */}
                    </div>
                    <div className='col-lg col-md col-4'>
                      <div className='wrap'>
                        <img src={Dash2Img2} alt='' />
                        <h3>
                          <span>redemption</span>
                          1824
                        </h3>
                      </div>
                      {/* test   new */}
                    </div>
                  </div>
                </div>
                {/* <Chart title='redemption History' /> */}
                <div className='sec2'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6'>
                      <h3>used Coupons</h3>
                    </div>
                    {/* <Chartdate /> */}
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <TableWrapper>
                        <tr>
                          <th width='35%'>Coupon Name </th>
                          <th width='20%'>Discount</th>
                          <th width='15%'>Username</th>
                          <th width='20%'>Store Location</th>
                          <th width='10%'>Date</th>
                        </tr>
                        <tr>
                          <td>adidas10</td>
                          <td>10%</td>
                          <td>Kathryn Murphy</td>
                          <td>1901 Thornridge Cir. Shiloh, Hawaii 81063</td>
                          <td>28/10/23</td>
                        </tr>
                        <tr>
                          <td>adidas 35</td>
                          <td>35%</td>
                          <td>Darlene Rober</td>
                          <td>4140 Parker Rd. Allentown, New Mexico 31134</td>
                          <td>16/08/23</td>
                        </tr>
                        <tr>
                          <td>adidas 20</td>
                          <td>20%</td>
                          <td>Jenny Wilson</td>
                          <td>
                            4517 Washington Ave. Manchester, Kentucky 39495
                          </td>
                          <td>16/08/23</td>
                        </tr>
                        <tr>
                          <td>adidas 40</td>
                          <td>40%</td>
                          <td>Floyd Miles</td>
                          <td>8502 Preston Rd. Inglewood, Maine 98380</td>
                          <td>12/06/23</td>
                        </tr>
                        <tr>
                          <td>adidas 60</td>
                          <td>60%</td>
                          <td>Guy Hawkins</td>
                          <td>
                            2118 Thornridge Cir. Syracuse, Connecticut 35624
                          </td>
                          <td>18/09/23</td>
                        </tr>
                        <tr>
                          <td>Adidas 30</td>
                          <td>30%</td>
                          <td>Devon Lane</td>
                          <td>2464 Royal Ln. Mesa, New Jersey 45463</td>
                          <td>15/08/23</td>
                        </tr>
                        <tr>
                          <td>Adidas 40</td>
                          <td>40%</td>
                          <td>Devon Lane</td>
                          <td>2464 Royal Ln. Mesa, New Jersey 45463</td>
                          <td>15/08/23</td>
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

export default Dashboard;
