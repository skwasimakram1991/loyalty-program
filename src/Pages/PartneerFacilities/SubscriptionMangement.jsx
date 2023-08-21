/** @format */

import React, { Fragment, useState } from 'react';
import subImg1 from './img/buisnessPlan.png';
import subImg2 from './img/b-list.png';
import { Link } from 'react-router-dom';
import {
  useUpdateFeatureAndAddonsMutation,
  useFetchSubscriptionsQuery,
  useCreateFeatureAndAddonsMutation,
  useUpdateSingleFeatureAndAddonsMutation,
} from '../../store/api/subscriptionApi';
import SuccessModal from '../../Component/notify/SuccessModal';
import { useForm } from 'react-hook-form';
function SubscriptionMangement() {
  const { data, isLoading, error } = useFetchSubscriptionsQuery();
  // console.log(data);
  const [modal, setModal] = useState(null);
  function openModal(type) {
    setModal(type);
  }
  return (
    <>
      {isLoading && <SuccessModal title={'Loading...'} loader={false} />}
      {error && <SuccessModal title={'Error...'} loader={false} />}
      {data && (
        <section className='partner-facilities-page main-page-size subscriptionManagement'>
          <div className='row align-items-center title-sec'>
            <div className='col-lg-6'>
              <h2>subscription management</h2>
            </div>
            <div className='col-lg-6 text-end'>
              <Link to={'/partner/subscription-create'} className='title-btn'>
                Add Subscription
              </Link>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-5'>
              <h3>Subscription Details</h3>
              <p>
                Partners are individuals, companies, or organizations that work
                together to achieve common goals. Partnerships can take many
                forms, including joint ventures, collaborations, strategic
                alliances, and more.
              </p>
            </div>
            <div className='col-lg-7'>
              <div className='subscribe-cards'>
                {data?.data?.map((subs, ind) => {
                  return (
                    <div
                      className={`sub-col ${(ind + 1) % 2 === 0 ? 'pro' : ''}`}
                      key={subs?.id}>
                      <div className='sub-card'>
                        <h4>
                          {subs?.plan_name}
                          <img src={subImg1} alt='' />
                        </h4>
                        <p>{subs?.description}</p>
                        <h5>
                          ${subs?.price_per_user}
                          <span>/ {subs?.bill_frequency}</span>
                        </h5>
                        <ul>
                          {subs?.feature_ids.map((features, ind) => {
                            return (
                              <li key={ind}>
                                <img src={subImg2} alt='' />
                                {features}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <div className='sub-card'>
                        <h6>Add on</h6>
                        <ul>
                          {subs?.add_ons_id?.map((features, ind) => {
                            return (
                              <li key={ind}>
                                <img src={subImg2} alt='' />
                                {features}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                })}

                <ul className='btns'>
                  <li>
                    <button
                      className='pm-btn'
                      onClick={() => openModal('features')}>
                      add features
                    </button>
                  </li>
                  <li>
                    <button
                      className='pm-btn'
                      onClick={() => openModal('addons')}>
                      add Add ons
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {modal === 'features' && (
            <Modal
              setModal={setModal}
              title={'Add Features'}
              createUrlForAll={'/sub-menu/create'}
              updateUrlForAll={'/sub-menu/update-feature-sub'}
              updateForOne={'/subscriptions'}
            />
          )}
          {modal === 'addons' && (
            <Modal
              setModal={setModal}
              title={'add Add ons'}
              createUrlForAll={'/add-on-menu/create'}
              updateUrlForAll={'/add-on-menu/update-add-on'}
              updateForOne={'/subscriptions/addons'}
            />
          )}
        </section>
      )}
    </>
  );
}

export default SubscriptionMangement;

function Modal({
  setModal,
  title,
  createUrlForAll,
  updateUrlForAll,
  updateForOne,
}) {
  const [selectedOption, setSelectedOption] = useState('all');
  const { data, isLoading, error } = useFetchSubscriptionsQuery();

  function handleCloseModal() {
    setModal(null);
  }
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
      <div className='loyalty-modal-overlay'>
        <div className='loyalty-modal'>
          <div className='modal-head'>
            <h3>{title}</h3>
            <button className='close' onClick={handleCloseModal}>
              &times;
            </button>
          </div>
          <div className='modal-body'>
            <div className='content1'>
              <h5>Applies on</h5>
              <p>
                Partners are individuals, companies, or organizations that work
                together to achieve common goals.
              </p>
            </div>
            <div className='content2'>
              <div className='box'>
                <label htmlFor='all'>
                  <input
                    type='radio'
                    name='radioOption'
                    value='all'
                    id='all'
                    checked={selectedOption === 'all'}
                    onChange={handleOptionChange}
                  />
                  Applicable for All
                </label>
                <label htmlFor='not_all'>
                  <input
                    type='radio'
                    name='radioOption'
                    value='not_all'
                    id='not_all'
                    checked={selectedOption === 'not_all'}
                    onChange={handleOptionChange}
                  />
                  Not for All
                </label>
              </div>
              {selectedOption === 'all' && (
                <FormContent1
                  createUrlForAll={createUrlForAll}
                  updateUrlForAll={updateUrlForAll}
                />
              )}
              {selectedOption === 'not_all' && (
                <FormContent2
                  plans={data.data}
                  updateForOne={updateForOne}
                  createUrlForAll={createUrlForAll}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function FormContent1({ createUrlForAll, updateUrlForAll }) {
  const [createFeature, response] = useCreateFeatureAndAddonsMutation();
  const [updateFeature, response2] = useUpdateFeatureAndAddonsMutation();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const priceString = data.price_per_user; // "$21"
    try {
      await createFeature({ data, createUrlForAll }); // Pass the URL as a parameter here
      await updateFeature(updateUrlForAll);
      console.log(data);
      console.log(response);
      console.log(response2);
      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error('Error creating feature:', error);
    }
  };
  return (
    <>
      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <div className='box1 boxf' key={1}>
          <label>For All Subscription</label>
          <input
            type='text'
            placeholder='XYZ'
            name={`${
              createUrlForAll === '/sub-menu/create'
                ? 'menu_name'
                : 'add_on_name'
            }`}
            {...register(
              `${
                createUrlForAll === '/sub-menu/create'
                  ? 'menu_name'
                  : 'add_on_name'
              }`,
              {
                required: 'menu_name is required',
              },
            )}
          />
        </div>
        <input type='submit' className='pm-btn' value='Save' />
      </form>
      {response.isLoading && (
        <SuccessModal title={'Please wait...'} loader={false} />
      )}
      {response2.isLoading && (
        <SuccessModal title={'updating wait...'} loader={false} />
      )}
    </>
  );
}
function FormContent2({ plans, updateForOne, createUrlForAll }) {
  const [createFeature, response] = useCreateFeatureAndAddonsMutation();
  const [updateone, response2] = useUpdateSingleFeatureAndAddonsMutation();
  const [oneId, setOneId] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log('Form Data:');
    plans?.forEach(async (plan) => {
      const fieldValue = data[plan?.plan_name];
      if (fieldValue && fieldValue.trim() !== '') {
        console.log(`ID: ${plan?.id},  ${plan?.plan_name}: ${fieldValue}`);
        const data = {
          [`${
            createUrlForAll === '/sub-menu/create' ? 'menu_name' : 'add_on_name'
          }`]: fieldValue,
        };

        console.log(data);
        await createFeature({ data, createUrlForAll });
        await updateone(`${updateForOne}/${plan?.id}`);
      }
    });

    reset();
  };
  return (
    <>
      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <div className='box2 boxf' key={2}>
          {plans?.map((plan) => {
            return (
              <Fragment key={plan?.id}>
                <label>{plan?.plan_name}</label>
                <input
                  type='text'
                  placeholder='XYZ'
                  name={plan?.plan_name}
                  // {...register(plan?.plan_name, {
                  //   required: `${plan?.plan_name} is required`,
                  // })}
                  {...register(plan?.plan_name)}
                />
              </Fragment>
            );
          })}
        </div>
        <input type='submit' className='pm-btn' value='Save' />
      </form>
      {response.isLoading && (
        <SuccessModal title={'Please wait...'} loader={false} />
      )}
      {response2.isLoading && (
        <SuccessModal title={'updating wait...'} loader={false} />
      )}
    </>
  );
}
