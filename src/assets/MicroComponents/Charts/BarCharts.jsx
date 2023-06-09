/** @format */

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
function BarCharts() {
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
  return (
    <>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type='bar'
        height={350}
      />
    </>
  );
}

export default BarCharts;
