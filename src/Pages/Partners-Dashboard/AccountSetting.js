/** @format */
/** @format */

import React from 'react';
import logo from '../../assets/images/logo.svg';

import { BsChevronRight } from 'react-icons/bs';

function AccountSetting() {
  return (
    <section className='partner-facilities-page main-page-size'>
      <div className='row align-items-center title-sec'>
        <div className='col-lg-12'>
          <h2>Account Settings</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-5'>
          <h3>General information</h3>
          <p>
            Fine-tune your account with our powerful settings. Personalize your
            experience, adjust preferences, and access features that enhance
            your productivity.
          </p>
        </div>
        <div className='col-lg-7'>
          <div className='form-wrap'>
            <form action=''>
              <div className='row'>
                <div className='col-lg-6'>
                  <label htmlFor=''>First name</label>
                  <input type='text' placeholder='Esther' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor=''>Last name</label>
                  <input type='Howard' placeholder='14' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor=''>Business name</label>
                  <input type='text' placeholder='Flex Gym' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor=''>Business Address</label>
                  <input type='text' placeholder='7529 E. Pecan St.' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor=''>Phone number</label>
                  <input type='text' placeholder='(907) 555-0101' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor=''>Email</label>
                  <input type='text' placeholder='Info@gym.com' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor=''>address</label>
                  <input
                    type='text'
                    placeholder='World of SportsAdi-Dassler-Straße 191074 Herzogenaurach'
                  />
                </div>
                <div className='col-lg-12'>
                  <input type='submit' value='Save' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='row mr-t-24'>
        <div className='col-lg-5'>
          <h3>Change Password</h3>
          <p>
            Secure your account with a new password. Update your login
            credentials now to keep your information safe and protect your
            privacy. Change your password in just a few simple steps and enjoy
            peace of mind knowing that your account is well-protected.
          </p>
        </div>
        <div className='col-lg-7'>
          <div className='form-wrap'>
            <form action=''>
              <div className='row'>
                <div className='col-lg-6'>
                  <label htmlFor=''>Current Password</label>
                  <input type='text' placeholder='Current Password' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor=''>New Password</label>
                  <input type='text' placeholder='New Password' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor=''>Confirm password</label>
                  <input type='text' placeholder='Confirm password' />
                </div>
                <div className='col-lg-12'>
                  <input type='submit' value='Save' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='row mr-t-24'>
        <div className='col-lg-5'>
          <h3>Contact Support.</h3>
          <p>
            Thank you for reaching out to our customer support team! We're here
            to help you with any questions or concerns you may have. simply fill
            out the contact form and one of our support representatives will
            respond to you as soon as possible. If you need immediate
            assistance, we recommend using our live chat or phone support
            options.
          </p>
        </div>
        <div className='col-lg-7'>
          <div className='form-wrap'>
            <form action=''>
              <div className='row'>
                <div className='col-lg-12'>
                  <label htmlFor=''>Subject</label>
                  <input type='text' placeholder='Enter your subject' />
                </div>
                <div className='col-lg-12'>
                  <label htmlFor=''>Message</label>
                  <textarea
                    name=''
                    id=''
                    cols='30'
                    placeholder='enter your subject description'
                    rows='10'></textarea>
                </div>
                <div className='col-lg-12'>
                  <input type='submit' value='Save' />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountSetting;
