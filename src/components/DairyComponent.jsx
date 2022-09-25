import React from 'react';
import { getCookie } from '../libs/getterSetterCookie';
import Drawing from './Drawing';

const DiaryComponent = () => {
  const cookie = getCookie('login_data');

  return (
    <>
      <div className='flex justify-center bg-white shadow-lg rounded-lg w-full max-w-3xl md:max-w-[40rem] p-3'>
        <div className='flex flex-col md:flex-row items-start px-4 py-6 w-full'>
          <div className='mr-2'>
            <img
              className='w-12 h-12 rounded-full object-cover mr-4 shadow'
              src={`${cookie.imageUrl}`}
              alt='avatar'
            />
          </div>
          <div className='flex flex-col w-full'>
            <div className='flex justify-between'>
              <div>
                <p className='text-xl font-semibold mb-2'>
                  {`${cookie.firstName} ${cookie.lastName}`}
                </p>
              </div>
              <div>
                <p className='text-sm mt-1'>22h ago</p>
              </div>
            </div>
            <div className='w-full min-h-[28rem] '>
              <Drawing />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DiaryComponent;
