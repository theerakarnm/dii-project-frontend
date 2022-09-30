import React from 'react';
import pTypes from 'prop-types';

const props = {
  children: pTypes.node.isRequired,
};

const Container = ({ children }) => {
  return <div className='container mx-auto mt-4'>{children}</div>;
};

Container.pTypes = props;

export default Container;
