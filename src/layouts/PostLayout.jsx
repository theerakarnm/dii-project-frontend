import React from "react";
import pt from "prop-types";

const PostLayout = ({ children }) => {
  return (
    <div className="max-w-lg w-full rounded overflow-hidden shadow-lg">
      {children}
    </div>
  );
};

PostLayout.pt = {
  children: pt.node.isRequired,
};

export default PostLayout;
