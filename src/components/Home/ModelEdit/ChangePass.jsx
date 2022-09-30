import React from 'react';
import { useState, useRef, useContext } from 'react';
import { Modal, User } from '@nextui-org/react';
import { getCookie } from '../../../libs/getterSetterCookie';
import { fetchApi } from '../../../helpers/fetchApi';

const ChangePass = () => {
  const cookie = getCookie('login_data');
  const [fname, lname, bio] = [useRef(null), useRef(null), useRef(null)];

  const onSave = async () => {
    try {
      const data = {
        fname: fname.current.value(),
        lname: lname.current.value(),
        bio: bio.current.value(),
      };

      if ((!fname, !lname, !bio)) return;

      const result = await fetchApi('put', `api/v1/posts/${''}`, true, data);
    } catch (e) {}
  };

  return (
    <div className=' w- full h-full flex flex-col justify-center items-center'>
      <div className='mt-10'>
        <div className='flex justify-center p-12'>
          <div className='mx-auto w-full'>
            <form>
              <div className='mb-5'>
                <label
                  htmlFor='name'
                  className='mb-3 block text-base font-medium text-purple-400'
                >
                  First Name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  ref={fname}
                  value={`${cookie.firstName}`}
                  className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                />
                <label
                  htmlFor='name'
                  className='mb-3 mt-4 block text-base font-medium text-purple-400'
                >
                  Last Name
                </label>
                <input
                  type='text'
                  name='lastname'
                  id='lastname'
                  ref={lname}
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
                  htmlFor='message'
                  className='mb-3 block text-base font-medium text-purple-400'
                >
                  Bio
                </label>
                <textarea
                  rows={4}
                  name='message'
                  id='message'
                  ref={bio}
                  placeholder='Edit your bio ...'
                  className='w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                  defaultValue={''}
                />
              </div>
              <div>
                <button className='hover:shadow-form rounded-md bg-purple-400 py-3 px-8 text-base font-semibold text-white outline-none'>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePass;
