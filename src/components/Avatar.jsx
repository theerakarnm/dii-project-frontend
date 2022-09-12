import React, { useEffect } from "react";

const Avatar = ({ size = "3", url }) => {
  const [className, setClassName] = React.useState(
    `w-[3rem] h-[3rem] object-cover rounded-full`
  );

  return (
    <>
      <img src={url} className={className} alt="profile Image" />
    </>
  );
};

export default Avatar;
