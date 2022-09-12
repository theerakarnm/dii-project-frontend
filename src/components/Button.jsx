import React from "react";

const Button = ({ children, css, w, h }) => {
  const formatCss = `w-${w} h-${h} p-3 cursor-pointer ${css}`;
  return <button className={formatCss}>{children}</button>;
};

export default Button;
