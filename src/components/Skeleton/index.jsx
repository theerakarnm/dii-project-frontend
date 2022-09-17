import React from 'react';

const complexWithAnimation = () => {
  return (
    <div className="flex w-full max-h-full animate-pulse">
      <ul className="mt-5 w-full space-y-3 flex flex-col justify-center items-center">
        <li className="max-w-lg w-full h-48 bg-gray-200 rounded-md" />
        <li className="max-w-lg w-full h-48 bg-gray-200 rounded-md" />
        <li className="max-w-lg w-full h-48 bg-gray-200 rounded-md" />
      </ul>
    </div>
  );
};

export default complexWithAnimation;
