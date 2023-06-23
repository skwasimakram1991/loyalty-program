/** @format */

import React from 'react';
import logo from '../assets/images/logo.svg';
import Sidebar from '../Component/Sidebar/Sidebar';
import Header from '../Component/Header/Header';
import { BsChevronRight } from 'react-icons/bs';
import Footer from '../Component/Footer/Footer';

function ViewUser() {
  return (
    <div>
      <section>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-2 p-0'>
              <Sidebar />
            </div>
            <div className='col-lg-10 p-0'>
              <Header />
              <section className='partner-facilities-page main-page-size'>
                <div className='row align-items-center title-sec'>
                  <div className='col-lg-12'>
                    <h2>user Info</h2>
                    <ul className='breadcrumbs'>
                      <li>
                        <a href='#'>
                          user
                          <BsChevronRight />
                        </a>
                      </li>
                      <li>
                        <a href='#'>
                          user log
                          <BsChevronRight />
                        </a>
                      </li>
                      <li>Details</li>
                    </ul>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-5'>
                    <h3>User Information</h3>
                    <p>
                      Your information is valuable. Keep your details up-to-date
                      and accurate to ensure a smooth and personalized
                      experience. From your name to your contact information,
                      easily manage your user information and make sure we have
                      the correct data to serve you better.
                    </p>
                  </div>
                  <div className='col-lg-7'>
                    <div className='userGrid'>
                      <h5>
                        User code <span>123456789</span>
                      </h5>
                      <h5>
                        Username <span>Esther Howard</span>
                      </h5>
                      <h5>
                        Phone Number<span>(316) 555-0116</span>
                      </h5>
                      <h5>
                        Email Address <span>tim.jennings@example.com</span>
                      </h5>
                      <h5>
                        Street address{' '}
                        <span>2972 Westheimer Rd. Santa Ana, Illinois </span>
                      </h5>
                      <h5>
                        State<span>Santa Ana</span>
                      </h5>
                      <h5>
                        City <span>Santa Ana</span>
                      </h5>
                      <h5>
                        Country <span>America</span>
                      </h5>
                      <h5>
                        zip code <span>123456</span>
                      </h5>
                      <h5>
                        Registration date <span>25/03/2000 </span>
                      </h5>
                      <h5>
                        Total points earned <span>999 </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ViewUser;
