import React from "react";

import Navbar from "../components/Navbar";
import Container from "../layouts/Container";
import Post from "../components/Posts";
import mockData from "../mocks/postData";
import PostLayout from "../layouts/PostLayout";
import NewPost from "../components/NewPost";

const Feed = () => {
  // TODO : check login

  return (
    <>
      <Navbar nameWhichActive={"Feed"} />
      <Container>
        <div className="flex flex-col gap-5 justify-center items-center">
          <NewPost />

          {mockData.map((item) => {
            return (
              <PostLayout>
                <Post postData={item} />
              </PostLayout>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Feed;
