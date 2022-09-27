import React from 'react';
import { Link } from 'react-router-dom';

const CardDiary = ({ diaryData }) => {
  return (
    <div className='bg-white rounded-md shadow border-[0.5px] border-gray-50'>
      <div className='flex flex-col p-4'>
        <div className='flex'>
          <div className='mb-2'>
            <p className='m-0'>
              Written by{' '}
              <span className='font-bold text-2xl underline ml-1'>
                <Link to={`/profile/${diaryData.assignBy}`}>
                  {diaryData.assignBy}
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className='border-t-[1px]'>
          <img src={diaryData.imageUrl} alt='diary pic' />
        </div>
      </div>
    </div>
  );
};

export default CardDiary;
