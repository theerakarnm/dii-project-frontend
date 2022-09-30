import React from 'react';
import PropType from 'prop-types';

const Avatar = ({ size = '3', url }) => {
  const [className, setClassName] = React.useState(
    `w-[3rem] h-[3rem] object-cover rounded-full`
  );

  return (
    <>
      <img src={url} className={className} alt='profile' />
    </>
  );
};

export default Avatar;

Avatar.PropType = {
  size: PropType.string,
  url: PropType.string,
};
