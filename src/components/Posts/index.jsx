import React, { useState, createContext } from 'react';
import pTypes from 'prop-types';

import { Input, Textarea } from '@nextui-org/react';
import Comment from './Comment';
import Avatar from '../Avatar';
import OptionDropdown from './OptionDropdown';
import { getCookie } from '../../libs/getterSetterCookie';
import { Favorite } from '../Utils/Favorite';
import _m from 'moment';
import { fetchApi } from '../../helpers/fetchApi';
import EditPostInput from './EditPostInput';
import ContextStore from '../../context/contextStore';

const props = {
  postData: pTypes.shape({
    id: pTypes.number.isRequired,
    username: pTypes.string.isRequired,
    name: pTypes.string.isRequired,
    profileImage: pTypes.string.isRequired,
    dateTime: pTypes.string.isRequired,
    postContent: pTypes.string.isRequired,
    isLike: pTypes.bool.isRequired,
    likeContent: pTypes.shape({
      likeCount: pTypes.number.isRequired,
      likedBy: pTypes.array.isRequired,
    }),
    imageUrl: pTypes.string,
    comment: pTypes.array,
  }),
};

const Post = ({ postData, openAllCommentModal }) => {
  const cookieData = getCookie('login_data');
  const optionDropdownItem = ['Edit Post', 'Delete Post'];

  const [margin, setMargin] = useState('0.5rem');
  const [isLike, setIsLike] = useState(postData.isLike);
  const [likeCount, setLikeCount] = useState(postData.likeContent.likeCount);
  const [isLikeLoading, setIsLikeLoading] = useState(false);
  const [commentContent, setCommentContent] = useState('');
  const [comment, setComment] = useState(postData.comment);
  const [isLoadingComment, setIsLoadingComment] = useState(false);
  const [content, setContent] = useState(postData.postContent);

  const [isAbleEdit, setIsAbleEdit] = useState(false);

  //TODO : DELETE AND EDIT

  const likeHandler = async () => {
    try {
      setIsLikeLoading(true);
      isLike
        ? setLikeCount((prev) => prev - 1)
        : setLikeCount((prev) => prev + 1);
      setIsLike(!isLike);

      const numSend = isLike ? -1 : 1;

      const res = await fetchApi('put', 'api/v1/posts/like', true, {
        postId: postData.id,
        num: numSend,
      });

      if (res.status !== 200) {
        isLike
          ? setLikeCount((prev) => prev - 1)
          : setLikeCount((prev) => prev + 1);
        setIsLike(!isLike);
        setIsLikeLoading(false);
        throw new Error('failed to like');
      }

      setIsLikeLoading(false);
    } catch (e) {
      console.error(e);
      // TODO : handler error
      return;
    }
  };

  const addCommentHandler = async () => {
    try {
      setCommentContent('');
      setComment((prev) => {
        return [
          {
            name: `${cookieData.firstName} ${cookieData.lastName}`,
            profileImage: cookieData.imageUrl,
            content: commentContent,
            dateTime: _m().fromNow(),
            error: false,
          },
          ...prev,
        ];
      });
      setIsLoadingComment(true);

      const res = await fetchApi('post', 'api/v1/posts/comment/add', true, {
        postId: postData.id,
        content: commentContent,
      });

      if (res.status !== 201) {
        setComment((prev) => (prev[0].error = true));
        setComment((prev) =>
          prev.map((item, idex) => {
            return idex === 0
              ? {
                  ...item,
                  error: true,
                }
              : item;
          })
        );
        throw new Error('failed to comment');
      }

      setIsLoadingComment(false);
    } catch (e) {
      console.log(e);
      setComment((prev) =>
        prev.map((item, idex) => {
          return idex === 0
            ? {
                ...item,
                error: true,
              }
            : item;
        })
      );
      setIsLoadingComment(false);
      return;
    }
  };

  const commentChangeHandler = (e) => {
    setCommentContent(e.target.value);
  };

  const onAction = (key) => {
    switch (key) {
      case 'edit':
        // fetchApi('put', `api/v1/post/${postData.id}`, true);
        setIsAbleEdit(true);
        break;
      case 'delete':
        fetchApi('delete', `api/v1/post/${postData.id}`, true);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <ContextStore.Provider value={postData.id}>
        {postData.imageUrl ? (
          <img className='w-full' src={postData.imageUrl} alt='Content' />
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
              {postData.username === cookieData.username ? (
                <div>
                  <OptionDropdown
                    onAction={onAction}
                    content={optionDropdownItem}
                  />
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          {!isAbleEdit ? (
            <p className='text-gray-700 text-base mb-6 mr-4 mt-4'>{content}</p>
          ) : (
            <>
              <EditPostInput
                setter={{ setIsAbleEdit, setContent }}
                initValue={content}
              />
            </>
          )}
          <div
            style={{
              marginTop: margin,
            }}
            className='transition-all pr-4 flex'
          >
            {isLikeLoading ? (
              <div className='animate-spin'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon icon-tabler icon-tabler-loader'
                  width='44'
                  height='44'
                  viewBox='0 0 24 24'
                  strokeWidth='1'
                  stroke='#6f32be'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <line x1='12' y1='6' x2='12' y2='3' />
                  <line x1='16.25' y1='7.75' x2='18.4' y2='5.6' />
                  <line x1='18' y1='12' x2='21' y2='12' />
                  <line x1='16.25' y1='16.25' x2='18.4' y2='18.4' />
                  <line x1='12' y1='18' x2='12' y2='21' />
                  <line x1='7.75' y1='16.25' x2='5.6' y2='18.4' />
                  <line x1='6' y1='12' x2='3' y2='12' />
                  <line x1='7.75' y1='7.75' x2='5.6' y2='5.6' />
                </svg>
              </div>
            ) : (
              <div onClick={likeHandler} className='w-10 mr-3 cursor-pointer'>
                <Favorite isLiked={isLike} />
              </div>
            )}
            <Input
              onFocus={() => setMargin('2.7rem')}
              onBlur={() => setMargin('0.5rem')}
              fullWidth
              underlined
              labelPlaceholder='Type your Comment...'
              color='default'
              onChange={commentChangeHandler}
              value={commentContent}
              contentRightStyling={{
                cursor: 'pointer',
              }}
              contentRight={
                <div
                  className='w-full h-full cursor-pointer hover:-translate-y-[0.19rem] transition-all px-2'
                  onClick={addCommentHandler}
                >
                  <img
                    className='w-5 h-5'
                    src='/sendIcon.svg'
                    alt='send comment icon'
                  />
                </div>
              }
            />
          </div>
          <div className='mt-2 flex justify-end mr-3'>
            <small className='text-gray-400 text-[0.9rem]'>{`${likeCount} ${
              likeCount > 1 ? 'likes' : 'like'
            }`}</small>
          </div>
          {comment.map((cmt, ind) => {
            return ind === 0 ? (
              <Comment
                key={`${cmt.id}`}
                loading={isLoadingComment}
                comment={cmt}
              />
            ) : (
              <Comment key={`${cmt.id}`} comment={cmt} />
            );
          })}
          {postData.hasMoreComment ? (
            <small
              onClick={openAllCommentModal}
              className='underline cursor-pointer text-sky-500 hover:text-sky-600'
            >
              View all comment
            </small>
          ) : (
            <></>
          )}
        </div>
      </ContextStore.Provider>
    </>
  );
};

Post.pTypes = props;

export default Post;
