import React from 'react';
import Avatar from '../Avatar';

//TODO : add prop type

const Comment = ({ comment }) => {
  // console.log(comment);
  return (
    <>
      <div className='grid grid-cols-12 my-4 mr-4'>
        <div className='flex justify-center items-baseline col-span-2'>
          <Avatar url={comment.profileImage} size='2.5' />
        </div>
        <div className='col-span-10'>
          <div className=' bg-gray-200 p-3 rounded'>
            <div className='flex flex-col'>
              <p className='font-semibold m-0'>{comment.name}</p>
              <span className='text-gray-400 text-xs'>{comment.dateTime}</span>
            </div>
            <p className='break-words mt-2'>{comment.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
