/** @format */

// import logo from "./logo.svg";
// import "./App.css";

import React from 'react';

import partnerimg1 from './img/partner-img1.png';
import partnerimg2 from './img/partner-img2.png';
import partnerimg3 from './img/partner-img3.png';
import partnerimg4 from './img/partner-img4.png';
import partnerimg5 from './img/partner-img5.png';
import partnerimg6 from './img/partner-img6.png';
import qrcodeimg from './img/qr-code.svg';
import downloadimg from './img/download.svg';
import editimg from './img/edit-icon.svg';

import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import TableWrapper from '../../Component/TableWrapper/TableWrapper';
function PartnerFacilities() {
  return (
    <section className='partner-facilities-page main-page-size'>
      <div className='container-fluid'>
        <div className='row align-items-center title-sec'>
          <div className='col-lg-6'>
            <h2>Partner Facilities</h2>
          </div>
          <div className='col-lg-6 text-end'>
            <a href='/partner/add' className='title-btn'>
              Add Partner
            </a>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <TableWrapper>
              <tr>
                <th>partner name</th>
                <th>Email address</th>
                <th>Phone no</th>
                <th>QR Code</th>
                <th>Download QR</th>
                <th>Edit</th>
              </tr>
              <tr>
                <td>
                  <img src={partnerimg1} alt='' />
                  McDonald's
                </td>
                <td>nathan.roberts@example.com</td>
                <td>(907) 555-0101</td>
                <td>
                  <a href='#' className='qr-img'>
                    <img src={qrcodeimg} alt='' />
                  </a>
                </td>
                <td>
                  <a href='#' className='down-img'>
                    <img src={downloadimg} alt='' />
                  </a>
                </td>
                <td>
                  <a href='#' className='edit-img'>
                    <img src={editimg} alt='' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={partnerimg2} alt='' />
                  Gillette
                </td>
                <td>michelle.rivera@example.com</td>
                <td>(208) 555-0112</td>
                <td>
                  <a href='#' className='qr-img'>
                    <img src={qrcodeimg} alt='' />
                  </a>
                </td>
                <td>
                  <a href='#' className='down-img'>
                    <img src={downloadimg} alt='' />
                  </a>
                </td>
                <td>
                  <a href='#' className='edit-img'>
                    <img src={editimg} alt='' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={partnerimg1} alt='' />
                  McDonald's
                </td>
                <td>tim.jennings@example.com</td>
                <td>(308) 555-0121</td>
                <td>
                  <a href='#' className='qr-img'>
                    <img src={qrcodeimg} alt='' />
                  </a>
                </td>
                <td>
                  <a href='#' className='down-img'>
                    <img src={downloadimg} alt='' />
                  </a>
                </td>
                <td>
                  <a href='#' className='edit-img'>
                    <img src={editimg} alt='' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={partnerimg3} alt='' />
                  Starbucks
                </td>
                <td>dolores.chambers@example.com</td>
                <td>(303) 555-0105</td>
                <td>
                  <a href='#' className='qr-img'>
                    <img src={qrcodeimg} alt='' />
                  </a>
                </td>
                <td>
                  <a href='#' className='down-img'>
                    <img src={downloadimg} alt='' />
                  </a>
                </td>
                <td>
                  <a href='#' className='edit-img'>
                    <img src={editimg} alt='' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={partnerimg4} alt='' />
                  Mitsubishi
                </td>
                <td>jessica.hanson@example.com</td>
                <td>(480) 555-0103</td>
                <td>
                  <a href='#' className='qr-img'>
                    <img src={qrcodeimg} alt='' />
                  </a>
                </td>
                <td>
                  <a href='#' className='down-img'>
                    <img src={downloadimg} alt='' />
                  </a>
                </td>
                <td>
                  <a href='#' className='edit-img'>
                    <img src={editimg} alt='' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={partnerimg5} alt='' />
                  MasterCard
                </td>
                <td>sara.cruz@example.com</td>
                <td>(603) 555-0123</td>
                <td>
                  <a href='#' className='qr-img'>
                    <img src={qrcodeimg} alt='' />
                  </a>
                </td>
                <td>
                  <a href='#' className='down-img'>
                    <img src={downloadimg} alt='' />
                  </a>
                </td>
                <td>
                  <a href='#' className='edit-img'>
                    <img src={editimg} alt='' />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img src={partnerimg6} alt='' />
                  Louis Vuitton
                </td>
                <td>debbie.baker@example.com</td>
                <td>(209) 555-0104</td>
                <td>
                  <a href='#' className='qr-img'>
                    <img src={qrcodeimg} alt='' />
                  </a>
                </td>
                <td>
                  <a href='#' className='down-img'>
                    <img src={downloadimg} alt='' />
                  </a>
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
  );
}

export default PartnerFacilities;
