/** @format */

import React from 'react';
import logo from '../assets/images/logo.svg';
import Sidebar from '../Component/Sidebar/Sidebar';
import Header from '../Component/Header/Header';
import { BsChevronRight } from 'react-icons/bs';
import Footer from '../Component/Footer/Footer';
import subImg1 from '../assets/images/buisnessPlan.png';
import subImg2 from '../assets/images/b-list.png';
function SubscriptionMangement() {
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
              <section className='partner-facilities-page main-page-size subscriptionManagement'>
                <div className='row align-items-center title-sec'>
                  <div className='col-lg-12'>
                    <h2>subscription management</h2>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-lg-5'>
                    <h3>Subscription Details</h3>
                    <p>
                      Partners are individuals, companies, or organizations that
                      work together to achieve common goals. Partnerships can
                      take many forms, including joint ventures, collaborations,
                      strategic alliances, and more.
                    </p>
                  </div>
                  <div className='col-lg-7'>
                    <div className='subscribe-cards'>
                      <div className='sub-card'>
                        <h4>
                          Business Light
                          <img src={subImg1} alt='' />
                        </h4>
                        <p>
                          Ideal for individuals who need quick access to basic
                          features.
                        </p>
                        <h5>
                          $0 <span>/ Month</span>
                        </h5>
                        <ul>
                          <li>
                            <img src={subImg2} alt='' />
                            Listing as a reward partner
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Customer redemption / click insights
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Up to 200 redemption/footfall
                          </li>
                          <li>
                            <img src={subImg2} alt='' />1 banner ads for 7 days
                          </li>
                        </ul>
                      </div>
                      <div className='sub-card pro'>
                        <h4>
                          Business Pro
                          <img src={subImg1} alt='' />
                        </h4>
                        <p>
                          Ideal for individuals who need quick access to basic
                          features.
                        </p>
                        <h5>
                          $79 <span>/ Month</span>
                        </h5>
                        <ul>
                          <li>
                            <img src={subImg2} alt='' />
                            Listing as a reward partner
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Customer redemption / click insights
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Up to 200 redemption/footfall
                          </li>
                          <li>
                            <img src={subImg2} alt='' />1 banner ads for 7 days
                          </li>
                        </ul>
                      </div>
                      <div className='sub-card'>
                        <h4>
                          Business Plus
                          <img src={subImg1} alt='' />
                        </h4>
                        <p>
                          Ideal for individuals who need quick access to basic
                          features.
                        </p>
                        <h5>
                          $49<span>/ Month</span>
                        </h5>
                        <ul>
                          <li>
                            <img src={subImg2} alt='' />
                            Listing as a reward partner
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Customer redemption / click insights
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Up to 200 redemption/footfall
                          </li>
                          <li>
                            <img src={subImg2} alt='' />1 banner ads for 7 days
                          </li>
                        </ul>
                      </div>
                      <div className='sub-card'>
                        <h6>Add on</h6>
                        <ul>
                          <li>
                            <img src={subImg2} alt='' />
                            push notification
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Banner Ads
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Redemption/footfall
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Top-up extra redemption credit{' '}
                          </li>
                        </ul>
                      </div>
                      <div className='sub-card pro'>
                        <h6>Add on</h6>
                        <ul>
                          <li>
                            <img src={subImg2} alt='' />
                            push notification
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Banner Ads
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Redemption/footfall
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Top-up extra redemption credit{' '}
                          </li>
                        </ul>
                      </div>
                      <div className='sub-card'>
                        <h6>Add on</h6>
                        <ul>
                          <li>
                            <img src={subImg2} alt='' />
                            push notification
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Banner Ads
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Redemption/footfall
                          </li>
                          <li>
                            <img src={subImg2} alt='' />
                            Top-up extra redemption credit{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className='btns'>
                      <li>
                        <button className='pm-btn'>add features</button>
                      </li>
                      <li>
                        <button className='pm-btn'>add Add ons</button>
                      </li>
                    </ul>
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

export default SubscriptionMangement;
