import React from 'react';
import Avatar from '../Avatar';
import { Loading } from '@nextui-org/react';
import { Link } from 'react-router-dom';

//TODO : add prop type

const Comment = ({ comment, loading = false }) => {
  // console.log(comment);
  return (
    <>
      <div
        className={`grid grid-cols-12 my-4 mr-4 ${
          loading ? 'opacity-[50%]' : ''
        }`}
      >
        <div className='flex justify-center items-baseline col-span-2'>
          <Avatar url={comment.profileImage} size='2.5' />
        </div>
        <div className='col-span-10'>
          <div
            className={` ${
              comment.error ? 'bg-red-200' : 'bg-gray-200'
            } p-3 rounded`}
          >
            <div className='flex justify-between'>
              <div className='flex flex-col'>
                <p className='font-semibold m-0'>
                  <Link to={`/profile/${comment.username}`}>
                    {comment.name}
                  </Link>
                </p>
                <span className='text-gray-400 text-xs'>
                  {comment.dateTime}
                </span>
              </div>
              {loading ? (
                <div>
                  <Loading size='sm' color={'secondary'} />
                </div>
              ) : comment.error ? (
                <svg
                  className='w-7 h-auto'
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon icon-tabler icon-tabler-ban'
                  width='44'
                  height='44'
                  viewBox='0 0 24 24'
                  stroke-width='1'
                  stroke='#ff2825'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <circle cx='12' cy='12' r='9' />
                  <line x1='5.7' y1='5.7' x2='18.3' y2='18.3' />
                </svg>
              ) : (
                <></>
              )}
            </div>
            <p className='break-words mt-2'>{comment.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
