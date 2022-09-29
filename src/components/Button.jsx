import React from 'react';
import PropType from 'prop-types';

const Button = ({ children, css, w, h }) => {
  const formatCss = `w-${w} h-${h} p-3 cursor-pointer ${css}`;
  return <button className={formatCss}>{children}</button>;
};

export default Button;

Button.PropType = {
  children: PropType.string,
  css: PropType.string,
  w: PropType.string,
  h: PropType.string,
};
