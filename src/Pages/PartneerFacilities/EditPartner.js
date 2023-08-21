/** @format */

import React, { useEffect, useState } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import {
  useFetchPartnersDataQuery,
  useUpdatePartnersMutation,
} from '../../store/api/partnersApi';
import { useForm } from 'react-hook-form';
import SuccessModal from '../../Component/notify/SuccessModal';
import { Country, State, City } from 'country-state-city';
import Select from 'react-select';
import { useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
function EditForm() {
  const currPage = useSelector((state) => state.partner.currPage);

  const { data, isLoading } = useFetchPartnersDataQuery(currPage);
  const [updatePartner, response] = useUpdatePartnersMutation();
  const navigate = useNavigate();
  const userId = useParams();
  let filteredpartner;
  if (data) {
    filteredpartner = data?.data?.filter(
      (partner) => partner?.id === Number(userId.id),
    );
    console.log(filteredpartner[0]);
  }
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

  useEffect(() => {
    if (data && filteredpartner.length) {
      setSelectedCountry(filteredpartner[0].country);
      setSelectedState(filteredpartner[0].state);
      setSelectedCity(filteredpartner[0].city);
    }
  }, []);

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
  const onSubmit = async (data) => {
    const newData = {
      sponsor_name: data.sponsor_name,
      subscription_id: data.subscription_id,
      notes: data.notes,
      phone: data.phone,
      email: data.email,
      street_address: data.street_address,
      country: selectedCountry?.label ?? filteredpartner[0].country,
      state: selectedState?.label ?? filteredpartner[0].state,
      city: selectedCity?.label ?? filteredpartner[0].city,
      zip_code: data.zip_code,
    };
    console.log(newData);
    const updatedData = {
      data: newData,
      id: Number(userId.id),
    };
    await updatePartner(updatedData);
    navigate('/partner');
    reset();
  };
  // console.log(useUpdatePartnersMutation());
  return (
    <>
      {data && (
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
                        defaultValue={filteredpartner[0]?.sponsor_name}
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
                              defaultChecked={
                                filteredpartner[0]?.subscription_id?.id === 1
                              }
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
                              defaultChecked={
                                filteredpartner[0]?.subscription_id?.id === 2
                              }
                              {...register('subscription_id')}
                              id=''
                            />{' '}
                            Business Plus
                          </label>
                          <h5>Customer earn reward</h5>
                          <h6>
                            Can send Alert notifications for users when they
                            don't show off for workout more than a week (or set
                            of interval)
                          </h6>
                        </li>
                        <li>
                          <label>
                            <input
                              type='radio'
                              value={3}
                              name='subscription_id'
                              defaultChecked={
                                filteredpartner[0]?.subscription_id?.id === 3
                              }
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
                        defaultValue={filteredpartner[0]?.notes}
                        {...register('notes')}
                        placeholder='enter you ad description'></textarea>
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <label htmlFor=''>Phone number</label>
                      <input
                        type='text'
                        placeholder='Enter phone number'
                        name='phone'
                        defaultValue={filteredpartner[0]?.phone}
                        {...register('phone')}
                      />
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <label htmlFor=''>Email</label>
                      <input
                        type='text'
                        placeholder='Enter Email address'
                        name='email'
                        defaultValue={filteredpartner[0]?.email}
                        {...register('email')}
                      />
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <label htmlFor=''>Street address</label>
                      <input
                        type='text'
                        placeholder='Enter street address'
                        name='street_address'
                        defaultValue={filteredpartner[0]?.street_address}
                        {...register('street_address')}
                      />
                    </div>

                    <div className='col-lg-6 col-md-6'>
                      <label htmlFor=''>Country</label>
                      <Select
                        // value={selectedCountry}
                        onChange={handleCountryChange}
                        options={countryOptions}
                        defaultValue={
                          filteredpartner[0]
                            ? {
                                value: filteredpartner[0].country,
                                label: filteredpartner[0].country,
                              }
                            : null
                        }
                      />
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <label htmlFor=''>State</label>
                      <Select
                        // value={selectedState}
                        onChange={handleStateChange}
                        options={stateOptions}
                        defaultValue={
                          filteredpartner[0]
                            ? {
                                value: filteredpartner[0].state,
                                label: filteredpartner[0].state,
                              }
                            : null
                        }
                      />
                    </div>
                    <div className='col-lg-6 col-md-6'>
                      <label htmlFor=''>City</label>
                      <Select
                        // value={selectedCity}
                        onChange={handleCityChange}
                        options={cityOptions}
                        defaultValue={
                          filteredpartner[0]
                            ? {
                                value: filteredpartner[0].city,
                                label: filteredpartner[0].city,
                              }
                            : null
                        }
                      />
                    </div>
                    <div className='col-lg-6 col-md-6 mt-3'>
                      <label htmlFor=''>Zip Code</label>
                      <input
                        type='text'
                        placeholder='Enter zip code'
                        name='zip_code'
                        defaultValue={filteredpartner[0]?.zip_code}
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
      )}
      {response.isLoading && (
        <SuccessModal title={'Partner Updating'} loader={false} />
      )}
    </>
  );
}

export default EditForm;
