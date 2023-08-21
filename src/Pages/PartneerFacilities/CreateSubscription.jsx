/** @format */

import React from 'react';
import { BsChevronRight } from 'react-icons/bs';
import csc from 'country-state-city';
import { useForm } from 'react-hook-form';
import SuccessModal from '../../Component/notify/SuccessModal';
import { Link } from 'react-router-dom';
import { useCreateSubscriptionMutation } from '../../store/api/subscriptionApi';
function CreateSubscription() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const [createSubscription, response] = useCreateSubscriptionMutation();
  const onSubmit = async (data) => {
    const priceString = data.price_per_user; // "$21"
    const priceNumber = parseInt(priceString.replace('$', ''), 10);
    data.price_per_user = priceNumber;
    await createSubscription(data);
    console.log(data);
    console.log('clicked');
    reset();
  };

  // console.log(response);
  return (
    <>
      <section className='partner-facilities-page main-page-size'>
        <div className='row align-items-center title-sec'>
          <div className='col-lg-12'>
            <h2>Add Subscription</h2>
            <ul className='breadcrumbs'>
              <li>
                <a href='#'>
                  subscription management <BsChevronRight />
                </a>
              </li>
              <li>Add subscription</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-5 col-md-10'>
            <h3>Subscription Information</h3>
            <p>
              Subscription are individuals, companies, or organizations that
              work together to achieve common goals. subscriptions can take many
              forms, including joint ventures, collaborations, strategic
              alliances, and more.
            </p>
          </div>
          <div className='col-lg-7'>
            <div className='form-wrap'>
              <form action='' onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                  <div className='col-lg-12 col-md-12'>
                    <label htmlFor=''>Subscription name</label>
                    <input
                      type='text'
                      placeholder="Enter Subscription's name"
                      name='plan_name'
                      {...register('plan_name')}
                    />
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <label htmlFor=''>Subscription Description</label>
                    <textarea
                      type='text'
                      placeholder='Subscription_description'
                      name='description'
                      {...register('description')}></textarea>
                  </div>

                  <div className='col-lg-12 col-md-12'>
                    <label htmlFor=''>Subscription price</label>
                    <input
                      type='text'
                      placeholder='subscription_price'
                      defaultValue={'$'}
                      name='price_per_user'
                      {...register('price_per_user')}
                    />
                  </div>
                  <div className='col-lg-12'>
                    <button type='submit'>Save</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CreateSubscription;
