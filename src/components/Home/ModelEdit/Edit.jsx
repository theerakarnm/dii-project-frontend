import React from 'react';
import { useState, useRef, useContext } from 'react';
import { Modal, User } from '@nextui-org/react';
import { getCookie } from '../../../libs/getterSetterCookie';
import { fetchApi } from '../../../helpers/fetchApi';

const Edit = () => {
  const cookie = getCookie('login_data');
  const [value, setValue] = useState({ fname: '', lname: '', bio: '' });

  const onSave = async () => {
    try {
      if ((!value.fname, !value.lname, !value.bio)) return;

      const result = await fetchApi('put', `api/v1/posts/${''}`, true, value);
    } catch (e) {
      console.error(e);
      return;
    }
  };

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='mt-10'>
        <>
          <User
            className='ml-8'
            src={`${cookie.imageUrl}`}
            name={`${cookie.firstName} ${cookie.lastName}`}
          />

          <div className='flex my-5'>
            <div className='w-full px-10'>
              <form>
                <div className='mb-5'>
                  <label
                    htmlFor='fname'
                    className='mb-3 block text-base font-medium text-purple-400'
                  >
                    First Name
                  </label>
                  <input
                    type='text'
                    name='fname'
                    id='fname'
                    value={`${cookie.firstName}`}
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                  <label
                    htmlFor='lname'
                    className='mb-3 mt-4 block text-base font-medium text-purple-400'
                  >
                    Last Name
                  </label>
                  <input
                    type='text'
                    name='lname'
                    id='lname'
                    value={`${cookie.lastName}`}
                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>
                <div className='mb-5'>
                  <label
                    htmlFor='email'
                    className='mb-3 block text-base font-medium text-purple-400 '
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    readOnly
                    value={`${cookie.email}`}
                    className='w-full rounded-md border border-[#e0e0e0] bg-gray-200 py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  />
                </div>

                <div className='mb-5'>
                  <label
                    htmlFor='bio'
                    className='mb-3 block text-base font-medium text-purple-400'
                  >
                    Bio
                  </label>
                  <textarea
                    rows={4}
                    name='bio'
                    id='bio'
                    placeholder='Edit your bio ...'
                    className='w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                    defaultValue={''}
                  />
                </div>
                <div>
                  <button
                    type='submit'
                    className='hover:shadow-form rounded-md bg-purple-400 py-3 px-8 text-base font-semibold text-white outline-none'
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Edit;
