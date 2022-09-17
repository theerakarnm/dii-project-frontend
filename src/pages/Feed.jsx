import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Container from '../layouts/Container';
import Post from '../components/Posts';
// import mockData from '../mocks/postData';
import PostLayout from '../layouts/PostLayout';
import NewPost from '../components/Posts/NewPost';
import ComplexWithAnimation from '../components/Skeleton';

const Feed = () => {
  // TODO : check login

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const resData = async () => {
      setIsLoading(true);
      const result = await axios.get('http://localhost:8083/post/popular', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZvdXJ0aDIyMDY0NSIsImVtYWlsIjoiZm91cnRoNDY2NEBnbWFpbC5jb20iLCJpYXQiOjE2NjMyMzEyMjgsImV4cCI6MTY2NDA5NTIyOH0.k_zDfMTKZGwS44LN7n-rFnbVTDiguZb1aXFG0A3K7Eo',
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
          <NewPost />
          {isLoading ? (
            <ComplexWithAnimation />
          ) : (
            data.map((item) => {
              return (
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
