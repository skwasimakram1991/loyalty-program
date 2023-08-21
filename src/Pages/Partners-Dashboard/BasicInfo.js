/** @format */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function BasicInfo() {
  console.log(localStorage.getItem('isPaymentCompleted'));
  const navigate = useNavigate();
  const isPaymentCompleted = useSelector(
    (state) => state.auth.userInfo.isPaymentCompleted,
  );
  const partnerInfo = useSelector((state) => state.auth.partnerInfo);
  console.log(partnerInfo);
  useEffect(() => {
    if (isPaymentCompleted) navigate('/partner-dashboard');
  }, [isPaymentCompleted]);

  function convertData(isoDate) {
    const dateObj = new Date(isoDate);
    const year = dateObj.getFullYear().toString().slice(-2);
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    const convertedDate = `${day}/${month}/${year}`;
    return convertedDate;
  }

  return (
    <>
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
                    <span>{partnerInfo?.sponsor_name}</span>
                  </li>
                  <li>
                    Phone Number
                    <span>{partnerInfo.phone}</span>
                  </li>
                  <li>
                    Email Address
                    <span>{partnerInfo.email}</span>
                  </li>
                  <li>
                    Street address
                    <span>{partnerInfo.street_address}</span>
                  </li>
                  <li>
                    State
                    <span>{partnerInfo.state}</span>
                  </li>
                  <li>
                    City
                    <span>{partnerInfo.city}</span>
                  </li>
                  <li>
                    Country
                    <span>{partnerInfo.country}</span>
                  </li>
                  <li>
                    zip code
                    <span>{partnerInfo.zip_code}</span>
                  </li>
                  <li>
                    Registration date
                    <span>{convertData(partnerInfo.createdAt)}</span>
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
                    <label
                      htmlFor='light'
                      className={`${
                        partnerInfo.subscription_id === 1 ? 'active' : ''
                      }`}>
                      <input
                        type='radio'
                        name='subscription_id'
                        id='light'
                        value={1}
                        defaultChecked={partnerInfo.subscription_id}
                      />
                      <h2>Business Light</h2>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                      <h4>
                        $0 <span>/ Month</span>
                      </h4>
                      <ul>
                        <li>Listing</li>
                        <li>Customer Earn Reward</li>
                        <li>
                          User activity Dashboard <span>(for 15days)</span>
                        </li>
                        <li className='cancel'>Review management dashboard</li>
                        <li className='cancel'>
                          Easy discovery/priority listing for app users
                        </li>
                        <li className='cancel'>
                          No branded push/notification to users
                        </li>
                        <li className='cancel'>No Banner add</li>
                        <li className='cancel'>
                          No commission leads from user
                        </li>
                      </ul>
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor='plus'
                      className={`${
                        partnerInfo.subscription_id === 2 ? 'active' : ''
                      }`}>
                      <input
                        type='radio'
                        name='subscription_id'
                        id='plus'
                        value={2}
                        defaultChecked={partnerInfo.subscription_id}
                      />
                      <h2>Business Pro</h2>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                      <h4>
                        $49<span>/ Month</span>
                      </h4>
                      <ul>
                        <li>Listing</li>
                        <li>Customer Earn Reward</li>
                        <li>
                          User activity Dashboard <span>(for 15days)</span>
                        </li>
                        <li>Review management dashboard</li>
                        <li>Easy discovery/priority listing for app users</li>
                        <li>No branded push/notification to users</li>
                        <li>No Banner add</li>
                        <li className='cancel'>
                          No commission leads from user
                        </li>
                      </ul>
                    </label>
                  </li>
                  <li>
                    <label
                      htmlFor='pro'
                      className={`${
                        partnerInfo.subscription_id === 3 ? 'active' : ''
                      }`}>
                      <input
                        type='radio'
                        name='subscription_id'
                        id='pro'
                        value={3}
                        defaultChecked={partnerInfo.subscription_id}
                      />
                      <h2>Business Plus</h2>
                      <p>
                        Ideal for individuals who need quick access to basic
                        features.
                      </p>
                      <h4>
                        $19 <span>/ Month</span>
                      </h4>
                      <ul>
                        <li>Listing</li>
                        <li>Customer Earn Reward</li>
                        <li>
                          User activity Dashboard <span>(for 15days)</span>
                        </li>
                        <li>Review management dashboard</li>
                        <li>Easy discovery/priority listing for app users</li>
                        <li>No branded push/notification to users</li>
                        <li className='cancel'>No Banner add</li>
                        <li className='cancel'>
                          No commission leads from user
                        </li>
                      </ul>
                    </label>
                  </li>
                </ul>
                <button
                  className='pm-btn ms-auto mt-4'
                  onClick={() => navigate('/partner-dashboard/payement')}>
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BasicInfo;
