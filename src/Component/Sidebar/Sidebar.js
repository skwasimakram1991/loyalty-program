/** @format */

import React, { useEffect, useState } from 'react';
import { useLocation, NavLink, Link } from 'react-router-dom';

import { BsChevronRight } from 'react-icons/bs';
import { VscChromeClose } from 'react-icons/vsc';
import { VscMenu } from 'react-icons/vsc';
import logo from '../../assets/images/logo.png';
import img1 from '../../assets/images/menu-icon1.svg';
import img2 from '../../assets/images/menu-icon2.svg';
import img3 from '../../assets/images/menu-icon3.svg';
import img4 from '../../assets/images/menu-icon4.svg';
import img5 from '../../assets/images/menu-icon5.svg';
import img6 from '../../assets/images/menu-icon6.svg';

function Sidebar() {
  const [show, setShow] = useState(false);
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split('/');
  console.log(splitLocation[splitLocation.length - 1]);

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
    <>
      <section className={`menu-sec ${show ? 'show' : ''}`}>
        <a href='#' className='main-logo'>
          <img src={logo} alt='' />
        </a>
        <ul>
          <li>
            <NavLink to='/dashboard'>
              <img src={img1} alt='' /> Dashboard
            </NavLink>
          </li>
          <li>
            <span
              className={`${splitLocation[1] === 'partner' ? 'active' : ''}`}>
              <img src={img3} alt='' /> Partner Facilities
              <BsChevronRight />
            </span>
            <ul className='sub-menu'>
              <li
                className={`${
                  splitLocation[splitLocation.length - 1] === 'partner'
                    ? 'active'
                    : ''
                }`}>
                <Link to='/partner'>Partner Facilities</Link>
              </li>
              <li
                className={`${
                  splitLocation[splitLocation.length - 1] === 'subscription'
                    ? 'active'
                    : ''
                }`}>
                <Link to='/partner/subscription'>Subscription Management</Link>
              </li>
            </ul>
          </li>
          <li>
            <span
              className={`${splitLocation[1] === 'sponser' ? 'active' : ''}`}>
              <img src={img3} alt='' /> Sponsored partner
              <BsChevronRight />
            </span>
            <ul className='sub-menu'>
              <li
                className={`${
                  splitLocation[splitLocation.length - 1] === 'sponser'
                    ? 'active'
                    : ''
                }`}>
                <Link to='/sponser'>Sponsored partner</Link>
              </li>
              <li
                className={`${
                  splitLocation[splitLocation.length - 1] === 'cattegory'
                    ? 'active'
                    : ''
                }`}>
                <Link to='sponser/cattegory'>Sponsored category</Link>
              </li>
              <li
                className={`${
                  splitLocation[splitLocation.length - 1] === 'subscription'
                    ? 'active'
                    : ''
                }`}>
                <Link to='sponser/subscription'>Subscription Management</Link>
              </li>
            </ul>
          </li>
          <li>
            <span className={`${splitLocation[1] === 'tier' ? 'active' : ''}`}>
              <img src={img3} alt='' /> Tier
              <BsChevronRight />
            </span>
            <ul className='sub-menu'>
              <li
                className={`${
                  splitLocation[splitLocation.length - 1] === 'tier'
                    ? 'active'
                    : ''
                }`}>
                <Link to='tier'>Tier Management</Link>
              </li>
              <li
                className={`${
                  splitLocation[splitLocation.length - 1] === 'benefits'
                    ? 'active'
                    : ''
                }`}>
                <Link to='tier/benefits'>Tier Benefits</Link>
              </li>
              <li
                className={`${
                  splitLocation[splitLocation.length - 1] === 'subscription'
                    ? 'active'
                    : ''
                }`}>
                <Link to='tier/subscription'>Subscription Management</Link>
              </li>
            </ul>
          </li>
          <li>
            <span className={`${splitLocation[1] === 'tier' ? 'active' : ''}`}>
              <img src={img3} alt='' /> Payments
              <BsChevronRight />
            </span>
            <ul className='sub-menu'>
              <li
                className={`${
                  splitLocation[splitLocation.length - 1] === 'tier'
                    ? 'active'
                    : ''
                }`}>
                <Link to='tier'>Partner facilities payments</Link>
              </li>
              <li
                className={`${
                  splitLocation[splitLocation.length - 1] === 'benefits'
                    ? 'active'
                    : ''
                }`}>
                <Link to='tier/benefits'>Sponsored partner payments</Link>
              </li>
            </ul>
          </li>
          {/* <li className={splitLocation[1] === 'payment' ? 'active' : 'payment'}>
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
          </li> */}
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
    </>
  );
}

export default Sidebar;
