import React, { useState } from 'react';
import axios from 'axios';

import validateEmail from '../libs/validateEmail';
import { Loading } from '@nextui-org/react';

const Signupform = () => {
  const [value, setValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  });

  const initInputError = {
    firstName: {
      error: false,
      msg: '',
    },
    lastName: {
      error: false,
      msg: '',
    },
    email: {
      error: false,
      msg: '',
    },
    username: {
      error: false,
      msg: '',
    },
    password: {
      error: false,
      msg: '',
    },
    confirmPassword: {
      error: false,
      msg: '',
    },
  };

  const [inputError, setInputError] = useState(initInputError);
  const [btnLoading, setBtnLoading] = useState(false);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      setBtnLoading(true);
      console.log(value);
      Object.entries(value).forEach(([key, item]) => {
        if (item.trim() === '') {
          setInputError({
            ...inputError,
            [key]: {
              error: true,
              msg: 'this input is required',
            },
          });
        }
      });
      if (value.password !== value.confirmPassword) {
        setInputError({
          ...inputError,
          password: {
            error: true,
            msg: 'Password not match',
          },
          confirmPassword: {
            error: true,
            msg: 'Password not match',
          },
        });
      }
      if (!validateEmail(value.email)) {
        setInputError({
          ...inputError,
          email: {
            error: true,
            msg: 'Wrong mail format',
          },
        });
      }
      console.log('test');

      const apiUrl = `${import.meta.env.VITE_API_HOSTNAME}auth/register`;
      console.log(apiUrl);

      const res = await axios.post(apiUrl, {
        firstName: value.firstName,
        lastName: value.lastName,
        email: value.email,
        username: value.username,
        password: value.password,
      });

      console.log(res);

      if (res.status !== 201) throw new Error('register failed');
      setBtnLoading(false);
      window.location.replace('/#/login');
    } catch (e) {
      setBtnLoading(false);
      return;
    }
  }

  const onChange = (event) => {
    setInputError(initInputError);
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className='min-h-screen bg-[f9fafe] flex flex-col justify-center'>
      <div className='max-w-xl w-full mx-auto  bg-white p-8 rounded-lg drop-shadow-xl border'>
        {/* Head Sign up */}
        <div className='max-w-md w-full mx-auto mb-[20px]'>
          <div className='text-center font-medium text-3xl'>SIGN UP</div>
        </div>
        {/* from sign up */}
        <form className='space-y-6 mt-4' onSubmit={onSubmit}>
          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='flex items-center w-full md:w-[48%]'>
              <input
                className={`w-full p-2 border mb-6 md:mb-0 border-gray-300 rounded ${
                  inputError.firstName.error ? 'ring-2 ring-red-400' : ''
                }`}
                placeholder='First Name'
                type='text'
                name='firstName'
                id='firstName'
                value={value.firstName}
                onChange={onChange}
              />
              <small className='text-red-500'>{inputError.firstName.msg}</small>
            </div>
            <div className='flex items-center w-full md:w-[48%]'>
              <input
                className={`w-full p-2 border border-gray-300 rounded ${
                  inputError.lastName.error ? 'ring-2 ring-red-400' : ''
                }`}
                placeholder='Last Name'
                type='text'
                name='lastName'
                id='lastName'
                value={value.lastName}
                onChange={onChange}
              />
              <small className='text-red-500'>{inputError.lastName.msg}</small>
            </div>
          </div>

          <div>
            <input
              className={`w-full p-2 border border-gray-300 rounded ${
                inputError.email.error ? 'ring-2 ring-red-400' : ''
              }`}
              placeholder='Email'
              type='email'
              name='email'
              id='email'
              value={value.email}
              onChange={onChange}
            />
            <small className='text-red-500'>{inputError.email.msg}</small>
          </div>
          <div>
            <input
              className={`w-full p-2 border border-gray-300 rounded ${
                inputError.username.error ? 'ring-2 ring-red-400' : ''
              }`}
              placeholder='Username'
              type='text'
              name='username'
              id='username'
              value={value.username}
              onChange={onChange}
            />
            <small className='text-red-500'>{inputError.username.msg}</small>
          </div>
          <div>
            <input
              className={`w-full p-2 border border-gray-300 rounded ${
                inputError.password.error ? 'ring-2 ring-red-400' : ''
              }`}
              placeholder='Password'
              type='password'
              name='password'
              id='password'
              value={value.password}
              onChange={onChange}
            />
            <small className='text-red-500'>{inputError.password.msg}</small>
          </div>
          <div>
            <input
              className={`w-full p-2 border border-gray-300 rounded ${
                inputError.confirmPassword.error ? 'ring-2 ring-red-400' : ''
              }`}
              placeholder='Confirm Password'
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              value={value.confirmPassword}
              onChange={onChange}
            />
            <small className='text-red-500'>
              {inputError.confirmPassword.msg}
            </small>
          </div>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                className='h-4 w-4 text-purple-400 rounded'
                type='checkbox'
              />
              <label className='ml-2 text-sm text-purple-600'>
                Remember Me
              </label>
            </div>
          </div>
          <div>
            <button
              className={`w-full py-2 px-4 ${
                btnLoading ? 'bg-gray-300' : 'bg-purple-500 hover:bg-purple-600'
              } rounded-md text-white text-medium`}
            >
              {btnLoading ? <Loading size='sm' /> : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signupform;
