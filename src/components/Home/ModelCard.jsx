import React from 'react';
import { Modal } from '@nextui-org/react';
import ModalBody from './ModalBody';
import PropType from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { selectCommon, commonAction } from '../../redux/reducers/commonSlicer';

const ModelCard = () => {
  const dispatch = useDispatch();
  const { isModelOpen, cardModalData: data, isCardLoading: loading } = useSelector(selectCommon);

  return (
    <div className='w-full h-full max-h-lg'>
      <Modal
        blur
        className={`${data?.imageUrl ? 'md:max-w-[80rem]' : 'md:max-w-[50rem]'} flex justify-center items-center md:mx-auto mx-[2rem]`}
        aria-labelledby='modal-title'
        open={isModelOpen}
        onClose={() => {
          dispatch(commonAction.setIsModelOpen(false));
        }}
        width='100%'>
        {loading ? (
          <div className='flex flex-col w-full h-full animate-pulse px-5 py-8'>
            <div className='flex-shrink-0 ml-4 mb-3'>
              <span className='w-12 h-12 block bg-gray-200 rounded-full ' />
            </div>
            <div className='ml-4 mt-2 w-full'>
              <div
                className='h-4 bg-gray-200 rounded-md '
                style={{ width: '40%' }}></div>
              <ul className='mt-5 space-y-3'>
                <li className='w-[97%] h-4 bg-gray-200 rounded-md ' />
                <li className='w-[97%] h-4 bg-gray-200 rounded-md ' />
                <li className='w-[97%] h-4 bg-gray-200 rounded-md ' />
                <li className='w-[97%] h-4 bg-gray-200 rounded-md ' />
              </ul>
            </div>
          </div>
        ) : (
          <ModalBody
            data={data}
            hasImage={!!data?.imageUrl}
          />
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
