/** @format */

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usePaymentRequestMutation } from '../../store/api/Partner-dashboard/partnerDashboardApi';
import { useFetchPartnerDataQuery } from '../../store/api/partnersApi';
import { useForm } from 'react-hook-form';
import SuccessModal from '../../Component/notify/SuccessModal';
// import { usePaymentRequestMutation } from '../../store/api/Partner-dashboard/partnerDashboardApi';

function PayementMethod() {
  const [card, setCard] = useState({
    cardno: '',
    cardtype: 'far fa-credit-card',
    expirydt: '',
    name: '',
  });
  const onChange = (e) => {
    var cartype_new = cardnumber(e.target.value);
    setCard({
      ...card,
      cardno: e.target.value,
      cardtype: cartype_new,
    });
  };
  const onChangeName = (e) => {
    setCard({
      ...card,
      name: e.target.value, // Update the "name" state on input change
    });
  };
  const onChangeCVV = (e) => {
    setCard({
      ...card,
      cvv: e.target.value,
    });
  };
  const cardnumber = (inputtxt) => {
    var matches = inputtxt.match(/(\d+)/);
    var cardno = '';
    console.log(matches);
    if (matches) {
      cardno = inputtxt.split(' - ').join('');
    }
    console.log(cardno);
    var cardtype1 = card.cardtype;
    //var visa = /^(?:4[0-9]{16}(?:[0-9]{3})?)$/;
    var visa = /^(?:4[0-9]{2}?)$/;
    var mastercardRegEx = /^(?:5[1-5][0-9]{3})$/;
    var amexpRegEx = /^(?:3[47][0-9]{3})$/;
    var discovRegEx = /^(?:6(?:011|5[0-9][0-9])[0-9]{5})$/;
    console.log(visa.test(cardno));
    if (visa.test(cardno) === true) {
      cardtype1 = 'far fa fa-3x fa-cc-visa  carddetail-cardtype';
    } else if (mastercardRegEx.test(cardno) === true) {
      cardtype1 = 'far fa fa-3x fa-cc-mastercard carddetail-cardtype';
    } else if (amexpRegEx.test(cardno) === true) {
      cardtype1 = 'far fa fa-3x fa-cc-amex carddetail-cardtype';
    } else if (discovRegEx.test(cardno) === true) {
      cardtype1 = 'far fa fa-3x fa-cc-discover carddetail-cardtype';
    }
    return cardtype1;
  };
  const cc_format = (value) => {
    const v = value.replace(/[^0-9]/gi, '').substr(0, 16);

    const parts = [];
    for (let i = 0; i < v.length; i += 4) {
      parts.push(v.substr(i, 4));
    }
    return parts.length > 1 ? parts.join(' - ') : value;
  };
  const expriy_format = (value) => {
    const expdate = value;
    const expDateFormatter =
      expdate.replace(/\//g, '').substring(0, 2) +
      (expdate.length > 2 ? '/' : '') +
      expdate.replace(/\//g, '').substring(2, 4);

    return expDateFormatter;
  };
  const onChangeExp = (e) => {
    setCard({
      ...card,
      expirydt: e.target.value,
    });
  };

  const navigate = useNavigate();
  const isPaymentCompleted = useSelector(
    (state) => state.auth.userInfo.isPaymentCompleted,
  );
  const [payementRequest, response] = usePaymentRequestMutation();
  console.log(response);

  async function handleSubmit(e) {
    e.preventDefault();
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const yearStr = card.expirydt.split('/')[1].trim();
    const monthStr = card.expirydt.split('/')[0].trim();
    const year =
      yearStr.length === 2 ? parseInt('20' + yearStr) : parseInt(yearStr);
    const month = parseInt(monthStr);
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      console.error(
        'Invalid expiration date. Please enter a valid future date.',
      );
      return;
    }
    const currentCentury = Math.floor(currentYear / 100);
    const enteredCentury = Math.floor(year / 100);
    const adjustedYear = enteredCentury * 100 + (year % 100);
    const fullYear =
      adjustedYear >= currentYear + 30 ? adjustedYear - 100 : adjustedYear;
    const paymentData = {
      subscriptionPlanId: 2,
      sponsor_name: card.name,
      card_number: card.cardno.replace(/\D/g, ''),
      exp_month: card.expirydt.split('/')[0],
      exp_year: fullYear,
      cvv: card.cvv,
    };
    console.log(paymentData);
    await payementRequest(paymentData);
    setCard({
      cardno: '',
      cardtype: 'far fa-credit-card',
      expirydt: '',
      name: '',
    });
  }
  useEffect(() => {
    if (isPaymentCompleted) navigate('/partner-dashboard');
  }, [isPaymentCompleted]);

  return (
    <>
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
                  $49 <span>/ Month</span>
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
                  <li className='cancel'>No commission leads from user</li>
                </ul>
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
                <form onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-6'>
                      <label htmlFor='name'>Name on card</label>
                      <input
                        type='text'
                        placeholder='Enter your name on card'
                        value={card.name}
                        onChange={onChangeName}
                      />
                    </div>
                    <div className='col-6'>
                      <label htmlFor='card_no'>Credit card number</label>
                      <input
                        type='text'
                        className='cardetails-input'
                        data-mask='0000 0000 0000 0000'
                        placeholder='XXXX-XXXX-XXXX-XXXX'
                        value={cc_format(card.cardno)}
                        onChange={onChange}
                        onKeyPress={(event) => {
                          if (!/[0-9]/.test(event.key)) {
                            event.preventDefault();
                          }
                        }}
                      />
                    </div>
                    <div className='col-6'>
                      <label htmlFor='date'>Expiry date</label>
                      <input
                        type='text'
                        name='expiry-data'
                        className='cardetails-input'
                        placeholder='mm / yy'
                        onChange={onChangeExp}
                        value={expriy_format(card.expirydt)}
                      />
                    </div>
                    <div className='col-6'>
                      <label htmlFor='cvv'>CVV</label>
                      <input
                        type='password'
                        className='cardetails-input'
                        data-mask='000'
                        placeholder='000'
                        maxlength='3'
                        pattern='[0-9][0-9][0-9]'
                        onChange={onChangeCVV}
                        value={card.cvv}
                      />
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
      {response.isLoading && (
        <SuccessModal loader={true} title={'Please wait'} />
      )}
    </>
  );
}

export default PayementMethod;
