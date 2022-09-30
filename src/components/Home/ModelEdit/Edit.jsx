import React from 'react';
import { useState, useContext, useCallback } from 'react';
import { Loading, Modal, User } from '@nextui-org/react';
import { getCookie } from '../../../libs/getterSetterCookie';
import { fetchApi } from '../../../helpers/fetchApi';
import HomeStore from '../../../context/contextStore_home';

const Edit = ({ closeHandler }) => {
  const cookie = getCookie('login_data');
  const { userData } = useContext(HomeStore);
  const [loading, setLoading] = useState(false);

  const [value, setValue] = useState({
    fname: userData.name.split(' ')[0],
    lname: userData.name.split(' ')[1],
    bio: userData.bio,
  });

  const onType = (e) => {
    console.log(e.target.name);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onSave = async (e) => {
    try {
      if (!value.fname && !value.lname && !value.bio) return;
      setLoading(true);
      const result = await fetchApi(
        'put',
        `api/v1/users/${cookie.username}`,
        true,
        value
      );

      console.log(result);
      setLoading(false);
      closeHandler(true);
    } catch (e) {
      setLoading(false);
      console.error(e);
      return;
    }
  };

  return (
    <div className='w-full h-full flex flex-col'>
      <div className='mt-10'>
        <User
          className='ml-8'
          src={`${userData.profileUrl}`}
          name={`${userData.name}`}
        />

        <div className='flex my-5'>
          <div className='w-full px-10'>
            <div className='mb-5'>
              <label
                htmlFor='fname'
                className='mb-3 block text-base font-medium text-purple-400'
              >
                First Name
              </label>
              <input
                type='text'
                onChange={onType}
                name='fname'
                id='fname'
                value={value.fname}
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
                onChange={onType}
                value={value.lname}
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
                value={`${userData.email}`}
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
                onChange={onType}
                value={value.bio}
                placeholder='Edit your bio ...'
                className='w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                defaultValue={''}
              />
            </div>
            <div>
              <button
                onClick={onSave}
                type='button'
                className='hover:shadow-form rounded-md bg-purple-400 hover:bg-purple-500 py-3 px-8 text-base font-semibold text-white outline-none transition-all'
              >
                {loading ? <Loading color={'white'} size='sm' /> : 'Submit'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
