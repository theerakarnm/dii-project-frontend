import { useState } from 'react';
import NavbarNoneLogin from '../components/Navbar/NavbarNoneLogin';
import { Link } from 'react-router-dom';

import { Image, Loading, Text } from '@nextui-org/react';
import { setCookie } from '../libs/getterSetterCookie';
import { fetchApi } from '../helpers/fetchApi';

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
      console.log({ valueInput });

      const res = await fetchApi(
        'post',
        'api/v1/auth/login',
        false,
        valueInput
      );

      console.log(res);

      setBtnLoading(false);
      if (res.status !== 200) {
        setIsError(true);
        return;
      }

      setCookie('login_data', res.data.data);
      window.location.replace('/');
    } catch (e) {
      console.log(e);
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
      <div className='h-screen w-screen pattern-bg'>
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
                    <Text
                      className='text-3xl text-center md:text-4xl mx-4'
                      css={{
                        textGradient: '45deg, $purple600 -20%, $pink600 100%',
                      }}
                      weight='bold'
                    >
                      Sign in to your account
                    </Text>
                  </div>
                </div>
                <div
                  className={`cardLogin w-full h-full flex flex-col p-8 rounded-lg  ${
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
                    <div className='flex justify-center items-center mt-3'>
                      <p>Don't have an account ?</p>
                      <Link
                        to='/regis'
                        className=' text-purple-600 cursor-pointer hover:text-purple-700 hover:font-bold pl-1'
                      >
                        Sign up
                      </Link>
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
