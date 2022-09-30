import React from 'react';
import { useState, useRef, useContext } from 'react';
import { Loading, Modal, User } from '@nextui-org/react';
import { getCookie } from '../../../libs/getterSetterCookie';
import { fetchApi } from '../../../helpers/fetchApi';

const ChangePass = ({ closeHandler }) => {
  const cookie = getCookie('login_data');
  const [value, setValue] = useState({
    pass: '',
    newPass: '',
    newPassConfirm: '',
  });
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const onType = (e) => {
    setErr('');
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      if (value.newPass !== value.newPassConfirm) {
        setErr('password and confirm password not match');
        return;
      }
      setLoading(true);

      const result = await fetchApi(
        'put',
        `api/v1/users/password/reset`,
        true,
        {
          pass: value.pass,
          newPass: value.newPass,
        }
      );
      setLoading(false);

      if (result.status !== 200) throw new Error('error');

      closeHandler(true);
    } catch (e) {
      console.error(e);
      setErr(e?.response?.data?.msg || 'internal error');
      setLoading(false);

      console.error(e);
      return;
    }
  };

  return (
    <div className='flex my-5'>
      <div className='w-full px-10'>
        <form onSubmit={onSubmit}>
          <div className='mb-5'>
            <label
              htmlFor='pass'
              className='mb-3 block text-base font-medium text-purple-400 text-normal'
            >
              Old password
            </label>
            <input
              type='password'
              name='pass'
              id='pass'
              onChange={onType}
              value={value.pass}
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
            <label
              htmlFor='newPass'
              className='mb-3 mt-4 block text-base font-medium text-purple-400 text-normal'
            >
              New password
            </label>
            <input
              type='password'
              name='newPass'
              id='newPass'
              onChange={onType}
              value={value.newPass}
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
            <label
              htmlFor='newPassConfirm'
              className='mb-3 mt-4 block text-base font-medium text-purple-400 text-normal'
            >
              Confirm new password
            </label>
            <input
              type='password'
              name='newPassConfirm'
              id='newPassConfirm'
              onChange={onType}
              value={value.newPassConfirm}
              className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
            />
          </div>
          <div>
            <button
              type='submit'
              className='hover:shadow-form rounded-md bg-purple-400 py-3 px-8 text-base font-semibold text-white outline-none'
            >
              {loading ? <Loading color={'white'} size='sm' /> : 'Submit'}
            </button>
          </div>
        </form>
        <small className='text-red-500'>{!err ? '' : err}</small>
      </div>
    </div>
  );
};

export default ChangePass;
