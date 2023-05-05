/** @format */

import React from 'react';
import { useLocation } from 'react-router-dom';

import { BsChevronRight } from 'react-icons/bs';

import logo from '../images/logo.png';
import img1 from '../images/menu-icon1.svg';
import img2 from '../images/menu-icon2.svg';
import img3 from '../images/menu-icon3.svg';
import img4 from '../images/menu-icon4.svg';
import img5 from '../images/menu-icon5.svg';
import img6 from '../images/menu-icon6.svg';

function Sidebar() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');
  return (
    <div>
      <section className='menu-sec'>
        <a href='#' className='main-logo'>
          <img src={logo} alt='' />
        </a>
        <ul>
          <li className={splitLocation[1] === 'Dashboard' ? 'active' : ''}>
            <a href='/Dashboard'>
              <img src={img1} alt='' /> Dashboard
            </a>
          </li>
          <li
            className={
              splitLocation[1] === 'PartnerFacilities'
                ? 'active'
                : 'PartnerFacilities'
            }>
            <a href='/PartnerFacilities'>
              <img src={img2} alt='' /> Partner Facilities
            </a>
          </li>
          <li className={splitLocation[1] === 'sponsor' ? 'active' : 'sponsor'}>
            <a href='/sponsor'>
              <img src={img3} alt='' />
              Sponsored partner <BsChevronRight />
            </a>
            <ul className='sub-menu'>
              <li>
                <a href='#'>Sponsored partner</a>
              </li>
              <li
                className={
                  splitLocation[1] === 'Rewards' ? 'active' : 'Rewards'
                }>
                <a href='/Rewards'>Rewards category</a>
              </li>
            </ul>
          </li>
          <li className={splitLocation[1] === 'Tier' ? 'active' : 'Tier'}>
            <a href='/Tier'>
              <img src={img4} alt='' />
              Tier <BsChevronRight />
            </a>
            <ul className='sub-menu'>
              <li>
                <a href='#'>Tier Management</a>
              </li>
              <li>
                <a href='#'>Tier Benefits</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='#'>
              <img src={img5} alt='' /> User <BsChevronRight />
            </a>
            <ul className='sub-menu'>
              <li>
                <a href='#'>User management</a>
              </li>
              <li>
                <a href='#'>User log</a>
              </li>
            </ul>
          </li>
          <li>
            <a href='#'>
              <img src={img6} alt='' />
              Settings
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Sidebar;
