import { useContext } from 'react';
import React from 'react';
import { Loading, Modal } from '@nextui-org/react';
import ModalBody from './ModalBody';
import HomeStore from '../../context/contextStore_home';
import PropType from 'prop-types';
const ModelCard = ({ data, loading }) => {
  const { isModelOpen, closeModalHandler } = useContext(HomeStore);

  const hasImage = !!data?.imageUrl;

  // console.log({ data, hasImage });
  return (
    <div className='w-full h-full max-h-lg'>
      <Modal
        blur
        className={`${
          data?.imageUrl ? 'md:max-w-[80rem]' : 'md:max-w-[50rem]'
        } flex justify-center items-center md:mx-auto mx-[2rem]`}
        aria-labelledby='modal-title'
        open={isModelOpen}
        onClose={closeModalHandler}
        width='100%'
      >
        {loading ? (
          <div className='flex flex-col w-full h-full animate-pulse px-5 py-8'>
            <div className='flex-shrink-0 ml-4 mb-3'>
              <span className='w-12 h-12 block bg-gray-200 rounded-full ' />
            </div>
            <div className='ml-4 mt-2 w-full'>
              <div
                className='h-4 bg-gray-200 rounded-md '
                style={{ width: '40%' }}
              ></div>
              <ul className='mt-5 space-y-3'>
                <li className='w-[97%] h-4 bg-gray-200 rounded-md ' />
                <li className='w-[97%] h-4 bg-gray-200 rounded-md ' />
                <li className='w-[97%] h-4 bg-gray-200 rounded-md ' />
                <li className='w-[97%] h-4 bg-gray-200 rounded-md ' />
              </ul>
            </div>
          </div>
        ) : (
          <ModalBody data={data} hasImage={!!data?.imageUrl} />
        )}
      </Modal>
    </div>
  );
};

ModelCard.PropType = {
  data: PropType.object,
  loading: PropType.bool,
};

export default ModelCard;
