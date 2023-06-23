/** @format */

import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import Dash2Img1 from '../../assets/images/dash2-img1.png';
import Dash2Img2 from '../../assets/images/dash2-img2.png';
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
                          <span>QR code scaned</span>
                          1824
                        </h3>
                        <img src={qr} alt='' className='qr' />
                      </div>
                      {/* test   new */}
                    </div>
                    <div className='col-lg col-md col-4'>
                      <div className='wrap'>
                        <img src={Dash2Img2} alt='' />
                        <h3>
                          <span>Active User</span>
                          1824
                        </h3>
                      </div>
                      {/* test   new */}
                    </div>
                  </div>
                </div>
                {/* <Chart title='User stats' /> */}
                <div className='sec2'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6'>
                      <h3>Scanned QR</h3>
                    </div>
                    {/* <Chartdate /> */}
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <TableWrapper>
                        <tr>
                          <th>Users </th>
                          <th>Email</th>
                          <th>User Code</th>
                          <th>Date</th>
                        </tr>
                        <tr>
                          <td>Brooklyn Simmons</td>
                          <td>jessica.hanson@example.com</td>
                          <td>123456789</td>
                          <td>12/06/23</td>
                        </tr>
                        <tr>
                          <td>Cody Fisher</td>
                          <td>sara.cruz@example.com</td>
                          <td>123456789</td>
                          <td>28/10/23</td>
                        </tr>
                        <tr>
                          <td>Albert Flores</td>
                          <td>jessica.hanson@example.com</td>
                          <td>123456789</td>
                          <td>15/08/23</td>
                        </tr>
                        <tr>
                          <td>Kathryn Murphy</td>
                          <td>debra.holt@example.com</td>
                          <td>123456789</td>
                          <td>07/05/23</td>
                        </tr>
                        <tr>
                          <td>Jenny Wilson</td>
                          <td>georgia.young@example.com</td>
                          <td>123456789</td>
                          <td>16/08/23</td>
                        </tr>
                        <tr>
                          <td>Eleanor Pena</td>
                          <td>jackson.graham@example.com</td>
                          <td>123456789</td>
                          <td>18/09/23</td>
                        </tr>
                        <tr>
                          <td>Ronald Richards</td>
                          <td>dolores.chambers@example.com</td>
                          <td>123456789</td>
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
