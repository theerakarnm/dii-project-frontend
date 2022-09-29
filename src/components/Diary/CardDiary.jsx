import React from 'react';
import { Link } from 'react-router-dom';

const CardDiary = ({ diaryData }) => {
  
  return (
    <div className='bg-white rounded-md shadow border-[0.5px] border-purple-200 '>
      <div className='flex flex-col p-4'>
        <div className='flex'>
          <div className='mb-2'>
            <p className='m-0'>
              Written by{' '}
              <span className='font-bold text-2xl ml-1 text-purple-400 hover:text-purple-600 no-underline'>
                <Link  to={`/profile/${diaryData.assignBy}`}>
                  {diaryData.assignBy}
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className='border-t-[1px]  border-purple-200'>
          <img src={diaryData.imageUrl} alt='diary pic' />
        </div>
      </div>
    </div>
  );
};

export default CardDiary;
