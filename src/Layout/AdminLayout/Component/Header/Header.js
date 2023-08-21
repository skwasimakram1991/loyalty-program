/** @format */

import React from 'react';
import userimg from '../../img/user-img.png';
import Logo from '../../img/logo.png';
import { useSelector } from 'react-redux';

function Header() {
  const adminData = useSelector((state) => state.auth.userInfo);
  // const adminDataParsed = JSON.parse(adminData);
  const logoImg =
    'https://loyality-program.onrender.com/' +
    adminData.image.split('/').slice(3).join('/');
  // console.log(
  //   'https://loyality-program.onrender.com/' +
  //     adminData.img.split('/').slice(3).join('/'),
  // );
  console.log(process.env.REACT_APP_BASE_URL);

  return (
    <>
      <header>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 col-md-3 col-4'>
              <a href='' className='logo'>
                <img src={Logo} alt='' />
              </a>
            </div>
            <div className='col-lg-3 col-md-3 col-3 offset-4 offset-lg-9 offset-md-5'>
              <ul>
                <li>
                  <a href='#'>
                    <div className='img-sec'>
                      <img src={logoImg} alt='' />
                      <span className='color1'></span>
                    </div>
                    <h3>
                      {adminData.fullname}
                      <span>{adminData.email}</span>
                    </h3>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
