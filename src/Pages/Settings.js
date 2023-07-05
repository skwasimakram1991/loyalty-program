/** @format */

import React from 'react';

function Settings() {
  return (
    <section className='partner-facilities-page main-page-size'>
      <div className='row align-items-center title-sec'>
        <div className='col-lg-12'>
          <h2>Settings</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-5'>
          <h3>Settings info</h3>
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
                  <label htmlFor=''>Registration Points</label>
                  <input type='text' placeholder='200' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor=''>
                    Time interval for deducting points (in days)
                  </label>
                  <input type='text' placeholder='14' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor=''>Point user get max in a day</label>
                  <input type='text' placeholder='150' />
                </div>
                <div className='col-lg-6'>
                  <label htmlFor=''>
                    Point user get after scanning QR code
                  </label>
                  <input type='text' placeholder='50' />
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
    </section>
  );
}

export default Settings;
