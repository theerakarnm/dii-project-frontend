import { Modal, User } from '@nextui-org/react';

import { getCookie } from '../libs/getterSetterCookie';
import HomeStore from '../context/contextStore_home';
import { useContext } from 'react';

import React from 'react';

import { fetchApi } from '../../helpers/fetchApi';

import { useState } from 'react';
import FeedStore from '../../context/contextStore_feed';

const ModelEdit = ({ setter, initValue }) => {
  const cookie = getCookie('login_data');
  const { visible, closeHandler } = useContext(HomeStore);
  const { setAlertValue } = useContext(FeedStore);
  const [values, setValues] = useState(initValue);

  const onType = (e) => {
    setValues(e.target.value);
  };

  const onDiscard = () => {
    setter.setIsAbleEdit(false);
  };

  const onSave = async () => {
    setter.setIsAbleEdit(false);
    setter.setEntireLoading(true);

    try {
      const result = await fetchApi('put', `api/v1/posts/${''}`, true, {
        content: values,
      });

      setter.setEntireLoading(false);
      setter.setContent(values);
      console.log(values);
    } catch (e) {
      setAlertValue({
        isShow: true,
        color: 'red',
        context: 'Profile failed to update',
      });
    }
  };

  return (
    <div className='w-full max-w-lg h-full max-h-lg'>
      <Modal
        closeButton
        blur
        className='md:max-w-[80rem] mx-auto'
        aria-labelledby='modal-title'
        open={visible}
        onClose={closeHandler}
        width='100%'
      >
        <Modal.Body>
          <div className='w-full h-full flex flex-row'>
            <div className='w-[25%] border-2 flex flex-col pt-2'>
              <div className='w-full p-3 hover:font-bold'>Edit Profile</div>
              <div className='w-full p-3 hover:font-bold'>Change Password</div>
            </div>
            <div className='w-[75%] border-2'>
              <div className=' w- full h-full flex flex-col justify-center items-center'>
                <div className='mt-10'>
                  <>
                    <User
                      className='pl-10'
                      src={`${cookie.imageUrl}`}
                      name={`${cookie.firstName} ${cookie.lastName}`}
                    />

                    <div className='flex items-center justify-center p-12'>
                      <div className='mx-auto w-full max-w-[550px]'>
                        <form action='' method='POST'>
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
                              value={`${cookie.lastName}`}
                              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                            />
                          </div>
                          <div className='mb-5'>
                            <label
                              htmlFor='email'
                              className='mb-3 block text-base font-medium text-purple-400'
                            >
                              Email Address
                            </label>
                            <input
                              type='email'
                              name='email'
                              id='email'
                              value={`${cookie.email}`}
                              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
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
                  </>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ModelEdit;
