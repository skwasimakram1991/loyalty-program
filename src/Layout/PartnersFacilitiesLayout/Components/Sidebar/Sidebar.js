/** @format */

import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

import { BsChevronRight } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import { VscMenu } from 'react-icons/vsc';
import logo from '../../img/logo.png';
import img1 from '../../img/menu-icon1.svg';
import img2 from '../../img/menu-icon2.svg';
import img3 from '../../img/menu-icon3.svg';
import img4 from '../../img/menu-icon4.svg';
import img5 from '../../img/menu-icon5.svg';
import img6 from '../../img/menu-icon6.svg';
import { logoutUser } from '../../../../store/slices/authSlice';
import { useDispatch } from 'react-redux';

function Sidebar() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  //assigning location variable

  //destructuring pathname from location
  // const { pathname } = location;

  //Javascript split method to get the name of the path in array
  // const splitLocation = pathname.split('/');

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
          <li>
            <NavLink to='/partner-dashboard'>
              <img src={img1} alt='' /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to='/partner-dashboard/manage-sub'>
              <img src={img2} alt='' />
              Manage Subscription
            </NavLink>
          </li>
          <li>
            <NavLink to='/partner-dashboard/account-setting'>
              <img src={img3} alt='' />
              Account Settings
            </NavLink>
          </li>
          <li>
            <NavLink to='/partner-dashboard/ManagePay'>
              <img src={img4} alt='' />
              manage payment
            </NavLink>
          </li>
          <li
            className={'logout'}
            onClick={() => {
              dispatch(logoutUser());
            }}>
            <NavLink to={'/partner/login'}>
              <img src={img5} alt='' />
              Logout
            </NavLink>
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
