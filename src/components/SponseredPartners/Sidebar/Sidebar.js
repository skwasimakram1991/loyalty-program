/** @format */

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { BsChevronRight } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import { VscMenu } from 'react-icons/vsc';
import logo from '../../../assets/images/logo.png';
import img1 from '../../../assets/images/menu-icon1.svg';
import img2 from '../../../assets/images/spimg1.svg';
import img3 from '../../../assets/images/spimg2.svg';
import img4 from '../../../assets/images/spimg3.svg';
import img5 from '../../../assets/images/spimg4.svg';
import img6 from '../../../assets/images/menu-icon6.svg';

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
      <section className={`menu-sec menu-sec2 ${show ? 'show' : ''}`}>
        <a href='#' className='main-logo'>
          <img src={logo} alt='' />
        </a>
        <ul>
          <li className={splitLocation[1] === 'dashboard2' ? 'active' : ''}>
            <a href='/dashboard3'>
              <img src={img1} alt='' /> Dashboard
            </a>
          </li>
          <li
            className={
              splitLocation[1] === 'manage-sub' ? 'active' : 'manage-sub'
            }>
            <a href='/manage-sub2'>
              <img src={img2} alt='' />
              Manage Subscription
            </a>
          </li>
          <li
            className={
              splitLocation[1] === 'AccountSetting'
                ? 'active'
                : 'AccountSetting'
            }>
            <a href='/account-setting2'>
              <img src={img3} alt='' />
              Account Settings
            </a>
          </li>
          <li
            className={
              splitLocation[1] === 'ManagePay' ? 'active' : 'ManagePay'
            }>
            <a href='/ManagePay2'>
              <img src={img4} alt='' />
              manage payment
            </a>
          </li>
          <li className={'logout'}>
            <a href='/ManagePay2'>
              <img src={img5} alt='' />
              Logout
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
