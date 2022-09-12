import React from "react";
import { Divider, TextField } from "@mui/material";
import pTypes from "prop-types";
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
  console.log(postData);

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
        <Divider />
        <div className="mt-2">
          <TextField
            className="w-full text-sm"
            id="standard-basic"
            label="Comment"
            variant="standard"
            size="small"
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
