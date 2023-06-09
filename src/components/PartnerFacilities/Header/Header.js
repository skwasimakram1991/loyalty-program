/** @format */

import React from 'react';
import userimg from '../../../assets/images/user-img.png';
import Logo from '../../../assets/images/logo.svg';

function Header() {
  return (
    <div>
      <header class='header2'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 col-md-3 col-4'>
              <a href='' className='logo'>
                <img src={Logo} alt='' />
              </a>
            </div>
            <div className='col-lg-3 col-md-3 col-3 ms-auto'>
              <ul>
                <li>
                  <a href='#'>
                    <div className='img-sec'>
                      <img src={userimg} alt='' />
                      <span className='color1'></span>
                    </div>
                    <h3>
                      User Name <span>user@gmail.com</span>
                    </h3>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
