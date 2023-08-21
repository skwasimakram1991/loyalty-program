/** @format */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import logo from '../../assets/images/logo.svg';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../store';
import { useNavigate } from 'react-router-dom';
import SuccessModal from '../../Component/notify/SuccessModal';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const path = window.location.pathname;
  console.log(path);
  const { loading, error, adminToken, role } = useSelector(
    (state) => state.auth,
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const newData = {
      data,
      role: 'admin/partner',
    };
    dispatch(userLogin(newData))
      .unwrap()
      .then(() => {
        navigate('/partner-dashboard'); // Navigate to the desired route after successful login
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(data);
  };

  useEffect(() => {
    if (
      adminToken &&
      role === 'sub-backend' &&
      (path === '/login' || path === '/partner/login')
    )
      navigate('/partner-dashboard');
  }, [adminToken, role, path]);

  return (
    <>
      <section className='login-page'>
        <div className='wrap'>
          <img src={logo} alt='' />
          <h2> Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='login-row'>
              <label htmlFor=''>Email</label>
              <input
                type='email'
                placeholder='Enter your user name or email here'
                autoComplete='true'
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address',
                  },
                })}
              />
              {errors.email && (
                <small class='error'>{errors.email.message}</small>
              )}
            </div>
            <div className='login-row'>
              <label htmlFor=''>
                Password <span>*</span>
              </label>
              <input
                type='password'
                name='password'
                placeholder='**********'
                autoComplete='true'
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 8,
                    message: 'Password must be at least 8 characters',
                  },
                })}
              />
              {errors.password && (
                <small class='error'>{errors.password.message}</small>
              )}
            </div>
            <div className='check-box'>
              <input type='checkbox' name='' id='' /> Remember me
            </div>
            <input type='submit' value='Login' />
          </form>
        </div>
      </section>
      {loading && <SuccessModal title={'please wait ...'} />}
      {error && <SuccessModal title={error} />}
    </>
  );
}

export default Login;
