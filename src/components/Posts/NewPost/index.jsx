import React, { useCallback, useState, useContext } from 'react';
import { Textarea } from '@nextui-org/react';
import ModalDragFile from './ModalDragFile';
import { useDropzone } from 'react-dropzone';

import fileToBase64 from '../../../libs/FileConverter';
import { getCookie } from '../../../libs/getterSetterCookie';
import moment from 'moment/moment';
import FeedStore from '../../../context/contextStore_feed';
import { fetchApi } from '../../../helpers/fetchApi';

import PropType from 'prop-types';

const NewPost = ({ setIsFirstPostLoading, setPost }) => {
  const [margin, setMargin] = useState('0.75rem');
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState('');
  const [textValue, setTextValue] = useState('');
  const [file, setFile] = useState({});

  const textHandler = (event) => {
    setTextValue(event.target.value);
  };

  const shareHandler = async () => {
    const cookieData = getCookie('login_data');
    setTextValue('');
    setImage('');
    setFile({});
    let data = new FormData();

    data.append('textContent', textValue);
    data.append('file', file);

    setIsFirstPostLoading(true);
    setPost((prev) => [
      {
        id: Math.random().toString(36),
        username: cookieData.username,
        name: `${cookieData.firstName} ${cookieData.lastName}`,
        profileImage: `${cookieData.imageUrl}`,
        dateTime: moment().fromNow(),
        postContent: textValue,
        isLike: false,
        likeContent: {
          likeCount: 0,
          likedBy: [],
        },
        imageUrl: image,
        comment: [],
      },
      ...prev,
    ]);

    try {
      await fetchApi('post', 'api/v1/posts/', true, data);

      setIsFirstPostLoading(false);
      console.log('Ok');
    } catch (e) {
      console.error(e);
      console.log('On')
      return;
    }
  };

  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };

  const cancelImage = () => {
    setFile({});
    setImage('');
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    setImage(await fileToBase64(acceptedFiles[acceptedFiles.length - 1]));
  }, []);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <ModalDragFile
        visible={visible}
        closeHandler={closeHandler}
        cancelImage={cancelImage}
        getInputProps={getInputProps}
        getRootProps={getRootProps}
        isDragActive={isDragActive}
        image={image}
      />
      <div
        style={{
          paddingTop: margin,
        }}
        className='bg-white shadow rounded-lg max-w-xl w-full p-3 transition-all duration-300'
      >
        <div>
          <Textarea
            css={{
              width: '100%',
            }}
            className={` ${
              +margin.split('r')[0] > 1 ? 'ring-1 ring-purple-300' : 'ring-0'
            }`}
            labelPlaceholder='Share something about today...'
            status='Share something about today...'
            onFocus={() => setMargin('2.75rem')}
            onBlur={() => setMargin('0.75rem')}
            onChange={textHandler}
            value={textValue}
          />
        </div>
        <hr className=' mt-3' />
        <div className='flex justify-between items-center'>
          <div
            className='h-[2rem] p-1 mt-2 ml-1 cursor-pointer flex items-center text-gray-500 hover:text-purple-400 transition-all'
            onClick={handler}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-photo'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#a905b6'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <line x1='15' y1='8' x2='15.01' y2='8' />
              <rect x='4' y='4' width='16' height='16' rx='3' />
              <path d='M4 15l4 -4a3 5 0 0 1 3 0l5 5' />
              <path d='M14 14l1 -1a3 5 0 0 1 3 0l2 2' />
            </svg>
            <span className='text-xs ml-1 sm:text-sm text-ellipsis whitespace-nowrap max-w-[7rem] sm:max-w-[16rem] overflow-hidden'>
              {!file.name ? 'Insert Image' : file.name}
            </span>
          </div>
          <div className='h-[2.5rem] mt-2 ml-1 cursor-pointer flex items-center text-gray-500 hover:text-purple-400 transition-all'>
            <button
              className='h-full relative inline-flex items-center px-8 py-3 overflow-hidden text-white bg-purple-600 rounded group active:bg-purple-500 focus:outline-none focus:ring'
              onClick={shareHandler}
            >
              <span className='absolute right-0 transition-transform translate-x-full group-hover:-translate-x-4'>
                <svg
                  className='w-5 h-5'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </span>

              <span className='text-sm font-medium transition-all group-hover:mr-4'>
                Share
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

NewPost.PropType = {
  setPost: PropType.func.isRequired,
  setIsFirstPostLoading: PropType.func.isRequired,
};

export default NewPost;
