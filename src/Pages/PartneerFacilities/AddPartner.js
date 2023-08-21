/** @format */

import React, { useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import {
  useCreatePartnersMutation,
  useFetchPartnersDataQuery,
} from '../../store/api/partnersApi';
import { useForm } from 'react-hook-form';
import { useFetchCountriesQuery } from '../../store/api/Services/countriesApi';
import SuccessModal from '../../Component/notify/SuccessModal';
import { Country, State, City } from 'country-state-city';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
function AddPartner() {
  const [createPartner, { isLoading }] = useCreatePartnersMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const onSubmit = async (data) => {
    console.log(selectedCountry, selectedState, selectedCity);
    const newData = {
      sponsor_name: data.sponsor_name,
      subscription_id: data.subscription_id,
      notes: data.notes,
      phone: data.phone,
      email: data.email,
      street_address: data.street_address,
      country: selectedCountry.label,
      state: selectedState.label,
      city: selectedCity.label,
      zip_code: data.zip_code,
    };
    console.log(newData);
    await createPartner(newData);
    navigate('/partner');
    reset();
  };
  const countryOptions = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const stateOptions = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
        value: state.isoCode,
        label: state.name,
      }))
    : [];

  const cityOptions = selectedState
    ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map(
        (city) => ({
          value: city.name,
          label: city.name,
        }),
      )
    : [];
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSelectedState(null);
    setSelectedCity(null);
  };

  const handleStateChange = (selectedOption) => {
    setSelectedState(selectedOption);
    setSelectedCity(null);
  };

  const handleCityChange = (selectedOption) => {
    setSelectedCity(selectedOption);
  };
  console.log(isLoading);
  return (
    <>
      <section className='partner-facilities-page main-page-size'>
        <div className='row align-items-center title-sec'>
          <div className='col-lg-12'>
            <h2>Add Partner</h2>
            <ul className='breadcrumbs'>
              <li>
                <a href='#'>
                  partner facilities <BsChevronRight />
                </a>
              </li>
              <li>Add Partner</li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-5 col-md-10'>
            <h3>Partner Information</h3>
            <p>
              Partners are individuals, companies, or organizations that work
              together to achieve common goals. Partnerships can take many
              forms, including joint ventures, collaborations, strategic
              alliances, and more.
            </p>
          </div>
          <div className='col-lg-7'>
            <div className='form-wrap'>
              <form action='' onSubmit={handleSubmit(onSubmit)}>
                <div className='row'>
                  <div className='col-lg-12 col-md-12'>
                    <label htmlFor=''>Sponsor name</label>
                    <input
                      type='text'
                      placeholder='Enter sponsor’s name'
                      name='sponsor_name'
                      {...register('sponsor_name')}
                    />
                  </div>

                  <div className='col-lg-12'>
                    <ul>
                      <li>
                        <label>
                          <input
                            type='radio'
                            id=''
                            value={1}
                            name='subscription_id'
                            {...register('subscription_id')}
                          />
                          Business Light
                        </label>
                        <h5>Customer earn reward</h5>
                        <h6>Users activity Dashboard (15 Days tiral)</h6>
                      </li>
                      <li>
                        <label>
                          <input
                            type='radio'
                            value={2}
                            name='subscription_id'
                            {...register('subscription_id')}
                            id=''
                          />{' '}
                          Business Plus
                        </label>
                        <h5>Customer earn reward</h5>
                        <h6>
                          Can send Alert notifications for users when they don't
                          show off for workout more than a week (or set of
                          interval)
                        </h6>
                      </li>
                      <li>
                        <label>
                          <input
                            type='radio'
                            value={3}
                            name='subscription_id'
                            {...register('subscription_id')}
                            id=''
                          />{' '}
                          Business Pro
                        </label>
                        <h5>Customer earn reward</h5>
                        <h6>Users activity Dashboard (15 Days tiral)</h6>
                      </li>
                    </ul>
                    <label htmlFor=''>Notes</label>
                    <textarea
                      name='notes'
                      id=''
                      {...register('notes')}
                      placeholder='enter you ad description'></textarea>
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <label htmlFor=''>Phone number</label>
                    <input
                      type='text'
                      placeholder='Enter phone number'
                      name='phone'
                      {...register('phone')}
                    />
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <label htmlFor=''>Email</label>
                    <input
                      type='text'
                      placeholder='Enter Email address'
                      name='email'
                      {...register('email')}
                    />
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <label htmlFor=''>Street address</label>
                    <input
                      type='text'
                      placeholder='Enter street address'
                      name='street_address'
                      {...register('street_address')}
                    />
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <label htmlFor=''>Country</label>
                    <Select
                      value={selectedCountry}
                      onChange={handleCountryChange}
                      options={countryOptions}
                    />
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <label htmlFor=''>State</label>
                    <Select
                      value={selectedState}
                      onChange={handleStateChange}
                      options={stateOptions}
                    />
                  </div>
                  <div className='col-lg-6 col-md-6'>
                    <label htmlFor=''>City</label>
                    <Select
                      value={selectedCity}
                      onChange={handleCityChange}
                      options={cityOptions}
                    />
                  </div>
                  <div className='col-lg-6 col-md-6 mt-3'>
                    <label htmlFor=''>Zip Code</label>
                    <input
                      type='text'
                      placeholder='Enter zip code'
                      name='zip_code'
                      {...register('zip_code')}
                    />
                  </div>
                  <div className='col-lg-12'>
                    <button type='submit' disabled={isLoading}>
                      Save
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {isLoading && <SuccessModal title={'Partner Creating'} loader={true} />}
      {/* {!isLoading && <SuccessModal title={'Partner Created'} loader={false} />} */}
    </>
  );
}

export default AddPartner;
