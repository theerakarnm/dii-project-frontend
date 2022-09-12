import React from "react";
import Avatar from "../Avatar";

//TODO : add prop type

const Comment = ({ comment }) => {
  console.log(comment);
  return (
    <>
      <div className="grid grid-cols-12 my-4">
        <div className="flex justify-center items-baseline col-span-2">
          <Avatar url={comment.profileImage} size="2.5" />
        </div>
        <div className="col-span-10">
          <div className=" bg-gray-200 p-2 rounded">
            <p className="break-words">{comment.content}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comment;
