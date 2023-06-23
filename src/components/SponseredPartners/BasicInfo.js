/** @format */

import React from 'react';
import Header from './Header/Header';
import Footer from '../../Component/Footer/Footer';

function BasicInfo() {
  return (
    <>
      <Header />
      <section className='info1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <h3>Personal Information</h3>
              <p>
                Your information is valuable. Keep your details up-to-date and
                accurate to ensure a smooth and personalized experience. From
                your name to your contact information, easily manage your user
                information and make sure we have the correct data to serve you
                better.
              </p>
            </div>
            <div className='col-lg-9'>
              <div className='box'>
                <ul>
                  <li>
                    User code
                    <span>123456789</span>
                  </li>
                  <li>
                    Username
                    <span>Esther Howard</span>
                  </li>
                  <li>
                    Phone Number
                    <span>(907) 555-0101</span>
                  </li>
                  <li>
                    Email Address
                    <span>Info@gym.com</span>
                  </li>
                  <li>
                    Street address
                    <span>
                      World of SportsAdi-Dassler-Straße 191074 Herzogenaurach
                    </span>
                  </li>
                  <li>
                    State
                    <span>Bavaria</span>
                  </li>
                  <li>
                    City
                    <span>Herzogenaurach</span>
                  </li>
                  <li>
                    Country
                    <span>Germany</span>
                  </li>
                  <li>
                    zip code
                    <span>191074</span>
                  </li>
                  <li>
                    Registration date
                    <span>25/03/2000</span>
                  </li>
                </ul>
                <a href='' class='pm-btn'>
                  Edit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='info2'>
        <div className='container'>
          <div className='row'>
            {' '}
            <div className='col-lg-3'>
              <h3>Choose a plan that’s right for you</h3>
              <p>
                We offer a range of options to fit your needs and budget. Please
                take a look at our options below and choose the plan that works
                best for you.
              </p>
            </div>
            <div className='col-lg-9'>
              <form action=''>
                <ul>
                  <li>
                    <label htmlFor='light'>
                      <input type='radio' name='light' id='light' />
                      <h2>Business Light</h2>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                      <h4>
                        $0 <span>/ Month</span>
                      </h4>
                      <ul>
                        <li>Listing as a reward partner</li>
                        <li>Customer redemption / click insights</li>
                        <li>Up to 50 redemption/footfall or transaction</li>
                        <li className='cancel'>1 banner ads for 7 days</li>
                      </ul>
                      <div className='add-on'>
                        <h2>Add On</h2>
                        <ul>
                          <li className='cancel'>
                            push notification $3/1000 subscribers
                          </li>
                          <li className='cancel'>Banner Ads: $100/7days</li>
                          <li>
                            Top-up extra redemption credit (footfall): 100
                            redemption credits/$10 (1 credit = 1 redemtion
                          </li>
                        </ul>
                      </div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor='light' class='active'>
                      <input type='radio' name='light' id='light' />
                      <h2>Business Pro</h2>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                      <h4>
                        $49<span>/ Month</span>
                      </h4>
                      <ul>
                        <li>Listing as a reward partner</li>
                        <li>Customer redemption / click insights</li>
                        <li>Up to 50 redemption/footfall or transaction</li>
                        <li className='cancel'>1 banner ads for 7 days</li>
                      </ul>
                      <div className='add-on'>
                        <h2>Add On</h2>
                        <ul>
                          <li>push notification $3/1000 subscribers</li>
                          <li>Banner Ads: $100/7days</li>
                          <li>
                            Top-up extra redemption credit (footfall): 100
                            redemption credits/$10 (1 credit = 1 redemtion
                          </li>
                        </ul>
                      </div>
                    </label>
                  </li>
                  <li>
                    <label htmlFor='light'>
                      <input type='radio' name='light' id='light' />
                      <h2>Business Plus</h2>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                      <h4>
                        $19 <span>/ Month</span>
                      </h4>
                      <ul>
                        <li>Listing as a reward partner</li>
                        <li>Customer redemption / click insights</li>
                        <li>Up to 50 redemption/footfall or transaction</li>
                        <li>1 banner ads for 7 days</li>
                      </ul>
                      <div className='add-on'>
                        <h2>Add On</h2>
                        <ul>
                          <li>push notification $3/1000 subscribers</li>
                          <li>Banner Ads: $100/7days</li>
                          <li>
                            Top-up extra redemption credit (footfall): 100
                            redemption credits/$10 (1 credit = 1 redemtion
                          </li>
                        </ul>
                      </div>
                    </label>
                  </li>
                </ul>
                <a href='' className='pm-btn'>
                  Continue
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BasicInfo;
