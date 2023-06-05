import React from 'react';
import pt from 'prop-types';

const PostLayout = ({ isFirstPostLoading, children }) => {
  return <div className={`max-w-xl w-full rounded overflow-hidden shadow-lg ${isFirstPostLoading ? 'opacity-50' : ''}`}>{children}</div>;
};

PostLayout.pt = {
  children: pt.node.isRequired,
};

export default PostLayout;
