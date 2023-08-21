/** @format */

import React, { useState } from 'react';

// import partnerimg1 from './img/partner-img1.png';
// import partnerimg2 from './img/partner-img2.png';
// import partnerimg3 from './img/partner-img3.png';
// import partnerimg4 from './img/partner-img4.png';
// import partnerimg5 from './img/partner-img5.png';
// import partnerimg6 from './img/partner-img6.png';
import editimg from './img/edit-icon.svg';

import { BsChevronLeft } from 'react-icons/bs';
import { BsChevronRight } from 'react-icons/bs';
import ToggleButton from './Components/ToggleButton';
import TableWrapper from '../../Component/TableWrapper/TableWrapper';

function RewardsCategories() {
  const [toggleOn, isToggleOn] = useState(false);
  return (
    <>
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
    </>
  );
}

export default RewardsCategories;