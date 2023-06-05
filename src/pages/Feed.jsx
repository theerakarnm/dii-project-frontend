import React, { useEffect, useState } from 'react';

import { getCookie } from '../libs/getterSetterCookie';
import Navbar from '../components/Navbar';
import Container from '../layouts/Container';
import Post from '../components/Posts';
import PostLayout from '../layouts/PostLayout';
import NewPost from '../components/Posts/NewPost';
import ComplexWithAnimation from '../components/Skeleton';
import AllCommentModel from '../components/Posts/AllCommentModel';
import NotLoginInfo from '../components/NotLoginInfo';
import { fetchApi } from '../helpers/fetchApi';
import Alert from '../components/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { selectPost, postAction } from '../redux/reducers/postReducer';

const Feed = () => {
  const { data, isFirstPostLoading } = useSelector(selectPost);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const cookieData = getCookie('login_data');

  useEffect(() => {
    const resData = async () => {
      setIsLoading(true);

      if (!cookieData) {
        return;
      }

      const result = await fetchApi('get', 'api/v1/posts/recent', true);

      dispatch(postAction.setData(result.data.data));
      setIsLoading(false);
    };

    resData();
  }, []);

  if (!cookieData) {
    return <NotLoginInfo />;
  }

  return (
    <>
      <Navbar nameWhichActive={'Feed'} />
      <Container>
        <Alert />
        <AllCommentModel />
        <div className='flex flex-col gap-5 justify-center items-center'>
          <NewPost />
          {isLoading ? (
            <ComplexWithAnimation />
          ) : (
            data.map((item, i) => {
              return i === 0 ? (
                <PostLayout
                  isFirstPostLoading={isFirstPostLoading}
                  key={item.id}>
                  <Post postData={item} />
                </PostLayout>
              ) : (
                <PostLayout key={item.id}>
                  <Post postData={item} />
                </PostLayout>
              );
            })
          )}
        </div>
      </Container>
    </>
  );
};

export default Feed;
