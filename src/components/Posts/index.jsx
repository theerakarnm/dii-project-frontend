import React, { useEffect, useRef, useState } from "react";
import pTypes from "prop-types";

import { Input } from "@nextui-org/react";
import Comment from "./Comment";
import Avatar from "../Avatar";

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
  const [margin, setMargin] = useState("0.5rem");

  return (
    <>
      {postData.imageUrl ? (
        <img className="w-full" src={postData.imageUrl} alt="Content Image" />
      ) : (
        <></>
      )}
      <div className="px-6 py-4">
        <div className="font-normal text-md mb-2">
          <div className="flex items-center">
            <Avatar url={postData.profileImage} />
            <div className="ml-3 flex flex-col">
              <span>{postData.name}</span>
              <span className="text-gray-400 text-xs">{postData.dateTime}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-700 text-base mb-6">{postData.postContent}</p>
        {/* <Divider /> */}
        <div
          style={{
            marginTop: margin,
          }}
          className="transition-all"
        >
          <Input
            onFocus={() => setMargin("2.7rem")}
            onBlur={() => setMargin("0.5rem")}
            fullWidth
            underlined
            labelPlaceholder="Default"
            color="default"
          />
        </div>
        {postData.comment.map((cmt) => (
          <Comment comment={cmt} />
        ))}
      </div>
    </>
  );
};

Post.pTypes = props;

export default Post;
