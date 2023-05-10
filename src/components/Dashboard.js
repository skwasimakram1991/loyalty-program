/** @format */

import React, { useState } from 'react';
import Sidebar from '../assets/inc/Sidebar';
import Header from '../assets/inc/Header';
// import logo from  "../assets/images/logo.svg"
import img1 from '../assets/images/dashboard-img1.svg';

import ReactApexChart from 'react-apexcharts';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import Footer from '../assets/inc/Footer';

function Dashboard() {
  const [state, setState] = useState({
    series: [
      {
        name: 'Net Profit',
        data: [700, 500, 657, 856, 661, 558, 763, 560, 466, 1000],
      },
      {
        name: 'Revenue',
        data: [676, 785, 601, 898, 687, 505, 991, 614, 594, 250],
      },
    ],

    options: {
      grid: {
        show: false,
      },
      legend: {
        show: false,
      },
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
        ],
      },
      yaxis: {
        title: {
          // text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
        colors: ['#F2BBC3', '#2F2F2F'],
      },
      tooltip: {
        enabled: false,
        y: {
          formatter: function (val) {
            return '$ ' + val + ' thousands';
          },
        },
      },
    },
  });

  const [startDate, setStartDate] = useState(new Date());

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
              <section className='dashboard-page main-page-size'>
                <div className='row align-items-center title-sec'>
                  <div className='col-lg-6 col-md-6'>
                    <h2>Dashboard</h2>
                  </div>
                </div>
                <div className='sec1'>
                  <div className='row'>
                    <div className='col-lg col-md col'>
                      <div className='wrap'>
                        <img src={img1} alt='' />
                        <h3>
                          <span>Users</span>1824
                        </h3>
                      </div>
                      {/* test */}
                    </div>
                    <div className='col-lg col-md col'>
                      <div className='wrap'>
                        <img src={img1} alt='' />
                        <h3>
                          <span>partner facility</span>1824
                        </h3>
                      </div>
                    </div>
                    <div className='col-lg col-md col'>
                      <div className='wrap'>
                        <img src={img1} alt='' />
                        <h3>
                          <span>Sponsored partner</span>1824
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='sec2'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6'>
                      <h3>User stats</h3>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <form action=''>
                        <DatePicker
                          className='date-pick'
                          placeholderText={'Start Date'}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />

                        <DatePicker
                          className='date-pick'
                          selected={startDate}
                          placeholderText={'End Date'}
                          onChange={(date) => setStartDate(date)}
                        />
                        <input type='submit' value='Export' />
                      </form>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type='bar'
                        height={350}
                      />
                    </div>
                  </div>
                </div>
                <div className='sec2'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6'>
                      <h3>partner facility stats</h3>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <form action=''>
                        <DatePicker
                          className='date-pick'
                          placeholderText={'Start Date'}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />

                        <DatePicker
                          className='date-pick'
                          selected={startDate}
                          placeholderText={'End Date'}
                          onChange={(date) => setStartDate(date)}
                        />
                        <input type='submit' value='Export' />
                      </form>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type='bar'
                        height={350}
                      />
                    </div>
                  </div>
                </div>
                <div className='sec2'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-12'>
                      <h3>Sponsored partner stats</h3>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                      <form action=''>
                        <DatePicker
                          className='date-pick'
                          placeholderText={'Start Date'}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                        />

                        <DatePicker
                          className='date-pick'
                          selected={startDate}
                          placeholderText={'End Date'}
                          onChange={(date) => setStartDate(date)}
                        />
                        <input type='submit' value='Export' />
                      </form>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type='bar'
                        height={350}
                      />
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
