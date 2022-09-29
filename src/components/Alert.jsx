import React from 'react';
import { useContext } from 'react';
import FeedStore from '../context/contextStore_feed';
import PropType from 'prop-types';
const Alert = ({
  isShow,
  color = 'green',
  context = 'Post has been published!',
}) => {
  const { setAlertValue } = useContext(FeedStore);
  const onCloseAlert = () => {
    setAlertValue((prev) => {
      return {
        ...prev,
        isShow: false,
      };
    });
  };

  return (
    <div
      className={`${
        isShow ? 'flex' : 'hidden'
      } items-center max-w-lg fixed bottom-10 right-[50%] translate-x-1/2 z-50 justify-between p-4 text-${color}-700 border rounded border-${color}-900/10 bg-${color}-50`}
      role='alert'
    >
      <strong className='text-sm font-medium mr-3'>{context}</strong>
      <button onClick={onCloseAlert} className='opacity-90' type='button'>
        <span className='sr-only'> Close </span>
        <svg
          className='w-4 h-4'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div className='hidden'>
        <span className='text-green-700 border-green-900/10 bg-green-50'></span>
        <span className='text-red-700 border-red-900/10 bg-red-50'></span>
        <span className='text-yellow-700 border-yellow-900/10 bg-yellow-50'></span>
      </div>
    </div>
  );
};

export default Alert;

Alert.PropType = {
  isShow: PropType.bool.isRequired,
  color: PropType.string,
  context: PropType.string,
};
