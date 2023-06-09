/** @format */

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BsChevronRight } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import { VscMenu } from 'react-icons/vsc';
import logo from '../images/logo.png';
import img1 from '../images/menu-icon1.svg';
import img2 from '../images/menu-icon2.svg';
import img3 from '../images/menu-icon3.svg';
import img4 from '../images/menu-icon4.svg';
import img5 from '../images/menu-icon5.svg';
import img6 from '../images/menu-icon6.svg';

function Sidebar() {
  const [show, setShow] = useState(false);
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setShow(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <section className={`menu-sec ${show ? 'show' : ''}`}>
        <a href='#' className='main-logo'>
          <img src={logo} alt='' />
        </a>
        <ul>
          <li className={splitLocation[1] === 'Dashboard' ? 'active' : ''}>
            <a href='/'>
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
              <img src={img3} alt='' /> Partner Facilities
            </a>
            <ul className='sub-menu'>
              <li>
                <a href='/PartnerFacilities'>Partner Facilities</a>
              </li>
              <li
                className={
                  splitLocation[1] === 'Rewards' ? 'active' : 'Rewards'
                }>
                <a href='/SubscriptionMangement'>Subscription Management</a>
              </li>
            </ul>
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
                <a href='/Rewards'>Sponsored category</a>
              </li>
              <li
                className={
                  splitLocation[1] === 'Rewards' ? 'active' : 'Rewards'
                }>
                <a href='/SubscriptionMangement'>Subscription Management</a>
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
                <a href='/Tier'>Tier Management</a>
              </li>
              <li>
                <a href='/tierbenefits'>Tier Benefits</a>
              </li>
            </ul>
          </li>
          <li className={splitLocation[1] === 'payment' ? 'active' : 'payment'}>
            <a href='/payment'>
              <img src={img4} alt='' />
              Payments <BsChevronRight />
            </a>
            <ul className='sub-menu'>
              <li>
                <a href='/facilitiesPayement'>Partner facilities payments</a>
              </li>
              <li>
                <a href='/sponseredPayement'>Sponsored partner payments</a>
              </li>
            </ul>
          </li>
          <li className={splitLocation[1] === 'user' ? 'active' : 'user'}>
            <a href='/user'>
              <img src={img5} alt='' /> User <BsChevronRight />
            </a>
            <ul className='sub-menu'>
              <li>
                <a href='/userView'>User management</a>
              </li>
              <li>
                <a href='/userLog'>User log</a>
              </li>
            </ul>
          </li>
          <li
            className={splitLocation[1] === 'settings' ? 'active' : 'settings'}>
            <a href='/settings'>
              <img src={img6} alt='' />
              Settings
            </a>
          </li>
        </ul>
        <div
          className='hamburger'
          onClick={() => {
            setShow((prev) => !prev);
          }}>
          {show ? <VscChromeClose /> : <VscMenu />}
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
