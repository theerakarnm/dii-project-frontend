import React, { useEffect, useState } from 'react';
import { useModal } from '@nextui-org/react';
import FeedStore from '../context/contextStore_feed';

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

const Feed = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstPostLoading, setIsFirstPostLoading] = useState(false);
  const { setVisible, bindings } = useModal();
  const [postId, setPostId] = useState('');
  const [loading, setLoading] = useState(false);
  const [allComment, setAllComment] = useState([]);
  const [alertValue, setAlertValue] = useState({
    isShow: false,
    color: 'green',
    context: '',
  });

  const cookieData = getCookie('login_data');

  useEffect(() => {
    const resData = async () => {
      setIsLoading(true);

      if (!cookieData) {
        return;
      }
      const result = await fetchApi('get', 'api/v1/posts/recent', true);

      setData(result.data.data);
      setIsLoading(false);
    };

    resData();
  }, []);

  if (!cookieData) {
    return <NotLoginInfo />;
  }

  const openAllCommentModal = async (postId) => {
    setVisible(true);
    setLoading(true);
    try {
      const result = await fetchApi(
        'get',
        `api/v1/posts/comments/${postId}`,
        true
      );

      setAllComment(result.data.data);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      return;
    }
  };

  return (
    <>
      <FeedStore.Provider
        value={{
          setAlertValue,
          setData,
          openAllCommentModal,
        }}
      >
        <Navbar nameWhichActive={'Feed'} />
        <Container>
          <Alert
            isShow={alertValue.isShow}
            color={alertValue.color}
            context={alertValue.context}
          />
          <AllCommentModel
            bindings={bindings}
            setVisible={setVisible}
            loading={loading}
            allComment={allComment}
          />
          <div className='flex flex-col gap-5 justify-center items-center'>
            <NewPost
              setIsFirstPostLoading={setIsFirstPostLoading}
              setPost={setData}
            />
            {isLoading ? (
              <ComplexWithAnimation />
            ) : (
              data.map((item, i) => {
                return i === 0 ? (
                  <PostLayout
                    isFirstPostLoading={isFirstPostLoading}
                    key={item.id}
                  >
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
      </FeedStore.Provider>
    </>
  );
};

export default Feed;
