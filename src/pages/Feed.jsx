import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { getCookie } from '../libs/getterSetterCookie';
import Navbar from '../components/Navbar';
import Container from '../layouts/Container';
import Post from '../components/Posts';
import PostLayout from '../layouts/PostLayout';
import NewPost from '../components/Posts/NewPost';
import ComplexWithAnimation from '../components/Skeleton';

const Feed = () => {
  // TODO : check login

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFirstPostLoading, setIsFirstPostLoading] = useState(false);

  useEffect(() => {
    const resData = async () => {
      setIsLoading(true);
      const cookieData = getCookie('login_data');

      if (!cookieData) {
        window.location.replace('/#/login');
        return;
      }

      const apiUrl = `${import.meta.env.VITE_API_HOSTNAME}post/recent`;
      const result = await axios.get(apiUrl, {
        headers: {
          Authorization: cookieData.token,
        },
      });
      setData(result.data.data);
      setIsLoading(false);
    };

    resData();
  }, []);

  return (
    <>
      <Navbar nameWhichActive={'Feed'} />
      <Container>
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
    </>
  );
};

export default Feed;
