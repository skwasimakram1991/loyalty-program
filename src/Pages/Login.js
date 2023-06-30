/** @format */
import React from 'react';

import logo from '../assets/images/logo.svg';
import { FaEyeSlash, FaEye } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';

import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik';
import * as Yup from 'yup';
// import { loginFailure, loginSuccess } from './Features/Auth/authSlice';
import axios from 'axios';
function Login() {
  // const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    // try {
    //   const response = await axios.post('/api/login', values);
    //   const { authenticated, user } = response.data;
    //   if (authenticated) {
    //     dispatch(loginSuccess(user));
    //     console.log(values);
    //   } else {
    //     dispatch(loginFailure('Invalid credentials'));
    //   }
    // } catch (error) {
    //   dispatch(loginFailure('An error occurred'));
    // } finally {
    //   resetForm();
    // }
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string()
      .min(5, 'Password must be at least 5 characters')
      .max(20, 'Password must be less than 20 characters')
      .required('Password is required'),
  });

  return (
    <div>
      <section className='login-page'>
        <div className='wrap'>
          <img src={logo} alt='' />
          <h2>Login</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}>
            <Form>
              <div className='login-row'>
                <label htmlFor=''>Email</label>
                <Field
                  type='email'
                  placeholder='Enter your user name or email here'
                  id='email'
                  name='email'
                  autoComplete='true'
                />
                <ErrorMessage
                  name='email'
                  component='small'
                  className='error'
                />
              </div>
              <div className='login-row'>
                <label htmlFor=''>
                  Password <span>*</span>
                </label>
                <Field
                  type='password'
                  id='password'
                  name='password'
                  placeholder='**********'
                  autoComplete='true'
                />
                <ErrorMessage
                  name='password'
                  component='small'
                  className='error'
                />
              </div>
              <div className='check-box'>
                <input type='checkbox' name='' id='' /> Remember me
              </div>
              <input type='submit' value='Login' />
            </Form>
          </Formik>
        </div>
      </section>
    </div>
  );
}

export default Login;
