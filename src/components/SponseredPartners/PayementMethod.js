/** @format */

import React from 'react';
import Header from './Header/Header';
import Footer from '../../assets/inc/Footer';

function PayementMethod() {
  return (
    <>
      <Header />
      <section className='info1'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <h3>Plan Preview</h3>
              <p>
                We are excited to present you with a preview of the plan that we
                have designed specifically for you. We have taken into
                consideration your requirements, preferences, and objectives to
                create a comprehensive and tailored plan to meet your needs.
                Here is an overview of the plan
              </p>
            </div>
            <div className='col-lg-9'>
              <div className='plan-box'>
                <h3>Business Pro</h3>
                <p>
                  Ideal for individuals who need quick access to basic features.
                </p>
                <h4>
                  $79 <span>/ Month</span>
                </h4>
                <ul>
                  <li>Listing as a reward partner</li>
                  <li>Customer redemption / click insights</li>
                  <li>Up to 100 redemption/footfall(monthly)</li>
                  <li className='cancel'>Review management dashboard</li>
                </ul>
                <div className='add-on'>
                  <h3>Add On</h3>
                  <ul>
                    <li>push notification $3/1000 subscribers</li>
                    <li>Banner Ads: $100/7days</li>
                    <li>
                      Top-up extra redemption credit (footfall): 100 redemption
                      credits/$10 (1 credit = 1 redemtion
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='info2'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3'>
              <h3>Payment details</h3>
              <p>
                Thank you for choosing our services. We appreciate your business
                and would like to provide you with the necessary payment details
                to proceed with your purchase. Kindly find the payment
                information.
              </p>
            </div>
            <div className='col-lg-9'>
              <div className='form-wrap'>
                <form action=''>
                  <div className='row'>
                    <div className='col-6'>
                      <label htmlFor=''>Name on card</label>
                      <input
                        type='text'
                        placeholder='Enter your name on card'
                      />
                    </div>
                    <div className='col-6'>
                      <label htmlFor=''>credit card number</label>
                      <input
                        type='text'
                        placeholder='X X X X    X X X X    X X X X    X X X X'
                      />
                    </div>
                    <div className='col-6'>
                      <label htmlFor=''>Expiry date </label>
                      <input type='text' placeholder='mm  /  yy' />
                    </div>
                    <div className='col-6'>
                      <label htmlFor=''>CVV</label>
                      <input type='text' placeholder='x  x  x' />
                    </div>
                    <div className='col-12 mt-5'>
                      <h6>
                        Subtotal <span>$49.00</span>
                      </h6>
                      <h6>
                        Other Fees <span>$4.00</span>
                      </h6>
                      <h6>
                        Total Fees <span>$53.00</span>
                      </h6>
                    </div>
                  </div>
                  <input type='submit' value='Make Payment' />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PayementMethod;
