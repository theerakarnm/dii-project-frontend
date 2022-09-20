import { useState } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';
import Cookies from 'js-cookie';
// dotenv.config;
import NavbarNoneLogin from '../components/Navbar/NavbarNoneLogin';
import { Text } from '@nextui-org/react';

import { Image, Loading } from '@nextui-org/react';

const LoginComponent = () => {
  const [valueInput, setValueInput] = useState({
    username: '',
    password: '',
  });
  const [isError, setIsError] = useState(false);
  const [globalError, setGlobalError] = useState('');
  const [btnLoading, setBtnLoading] = useState(false);

  async function onSubmit(event) {
    try {
      event.preventDefault();
      setBtnLoading(true);
      console.log(valueInput);

      const apiUrl = `${import.meta.env.VITE_API_HOSTNAME}auth/login`;

      const res = await axios.post(apiUrl, valueInput);

      setBtnLoading(false);
      if (res.status !== 200) {
        setIsError(true);
        return;
      }

      Cookies.set('login_data', JSON.stringify(res.data.data));
      window.location.replace('/');
    } catch (e) {
      setGlobalError(`${e.response.statusText} : ${e.response.data.msg}`);
      setBtnLoading(false);
      return;
    }
  }

  const onChangeHandle = (event) => {
    setGlobalError('');
    setValueInput({
      ...valueInput,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div className='h-screen w-screen'>
        <NavbarNoneLogin />
        <div className='flex justify-center items-center'>
          <div className='max-w-xl w-full bg-[f9fafe] flex flex-col justify-center items-center m-auto'>
            <div className='w-full flex flex-col m-5'>
              <div className=''>
                <Image
                  width={'10rem'}
                  height={'10rem'}
                  src='/Logowithoutfont.png'
                  alt='Your Company'
                />
              </div>

              <form onSubmit={onSubmit}>
                <div className='w-full p-2 rounded '>
                  <div className='flex flex-col justify-center items-center pb-6'>
                    <h1 className='text-3xl mx-4 sm:text-4xl font-bold text-center'>
                      Sign in to your account
                    </h1>
                  </div>
                </div>
                <div
                  className={`bg-white w-full h-full flex flex-col p-8 rounded-lg  ${
                    !globalError ? 'shadow-xl' : 'shadow-red-400 shadow-lg'
                  }`}
                >
                  <div className='w-full p-2  rounded my-5'>
                    <div className='flex flex-col justify-center items-center my-10`'>
                      <input
                        className={`w-full p-3 border rounded text-[1.25rem] ${
                          isError ? 'ring-2 ring-red-400' : ''
                        }`}
                        type='text'
                        name='username'
                        id='username'
                        onChange={onChangeHandle}
                        value={valueInput.username}
                        placeholder='Username'
                      />
                      {isError ? (
                        <div className='flex justify-start w-full pt-1 '>
                          <small className='text-left text-red-400'>
                            {isError}
                          </small>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div className='flex flex-col justify-center items-center my-12'>
                      <input
                        className='w-full p-3 border rounded text-[1.25rem]'
                        type='password'
                        name='password'
                        id='password'
                        value={valueInput.password}
                        placeholder='Password'
                        onChange={onChangeHandle}
                      />
                    </div>

                    <div className='flex flex-col justify-center items-center mt-10'>
                      <button
                        className={`w-full flex justify-center items-center p-3 transition-all ${
                          btnLoading
                            ? 'bg-gray-300'
                            : 'bg-purple-500 hover:bg-purple-600'
                        }   text-white rounded text-[1.25rem]`}
                        name='bt_submit'
                        id='bt_submit'
                        type='submit'
                      >
                        {btnLoading ? <Loading size='sm' /> : 'Sign in'}
                      </button>
                    </div>
                    <div className='flex flex-col justify-center items-center mt-3'>
                      <p>
                        Don't have an account ?
                        <a
                          href='/#/regis'
                          className=' text-purple-600 cursor-pointer hover:text-purple-700 hover:font-bold pl-1'
                        >
                          Sign up
                        </a>
                      </p>
                    </div>
                    <div className='flex justify-center mt-3'>
                      <small className='text-red-500 text-lg font-bold'>
                        {globalError}
                      </small>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
