import React, { useCallback, useState } from 'react';
import pTypes from 'prop-types';

import { Input } from '@nextui-org/react';
import Comment from './Comment';
import Avatar from '../Avatar';
import OptionDropdown from './OptionDropdown';
import { getCookie } from '../../libs/getterSetterCookie';

const props = {
  postData: pTypes.shape({
    id: pTypes.number.isRequired,
    username: pTypes.string.isRequired,
    name: pTypes.string.isRequired,
    profileImage: pTypes.string.isRequired,
    dateTime: pTypes.string.isRequired,
    postContent: pTypes.string.isRequired,
    imageUrl: pTypes.string,
    comment: pTypes.array,
  }),
};

const Post = ({ postData }) => {
  const [margin, setMargin] = useState('0.5rem');
  const optionDropdownItem = ['Edit Post', 'Delete Post'];
  const cookieData = getCookie('login_data');

  //TODO : DELETE AND EDIT

  return (
    <>
      {postData.imageUrl ? (
        <img className='w-full' src={postData.imageUrl} alt='Content Image' />
      ) : (
        <>
          <div className='w-full sm:w-[1000px]'></div>
        </>
      )}
      <div className='pl-6 pr-2 py-4'>
        <div className='font-normal text-md mb-2'>
          <div className='flex items-start justify-between'>
            <div className='flex items-center'>
              <Avatar url={postData.profileImage} />
              <div className='ml-3 flex flex-col'>
                <span>{postData.name}</span>
                <span className='text-gray-400 text-xs'>
                  {postData.dateTime}
                </span>
              </div>
            </div>
            {postData.username == cookieData.username ? (
              <div>
                <OptionDropdown content={optionDropdownItem} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <p className='text-gray-700 text-base mb-6 mr-4 mt-4'>
          {postData.postContent}
        </p>
        {/* <Divider /> */}
        <div
          style={{
            marginTop: margin,
          }}
          className='transition-all pr-4'
        >
          <Input
            onFocus={() => setMargin('2.7rem')}
            onBlur={() => setMargin('0.5rem')}
            fullWidth
            underlined
            labelPlaceholder='Type your Comment...'
            color='default'
            contentRightStyling={{
              cursor: 'pointer',
            }}
            contentRight={
              <div>
                <img
                  className='cursor-pointer hover:mb-2 transition-all'
                  src='/sendIcon.svg'
                  alt='send comment icon'
                />
              </div>
            }
          />
        </div>
        {postData.comment.map((cmt) => (
          <Comment key={`${cmt.name}-${cmt.dateTime}`} comment={cmt} />
        ))}
      </div>
    </>
  );
};

Post.pTypes = props;

export default Post;
