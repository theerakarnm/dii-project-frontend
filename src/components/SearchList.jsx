import React from 'react';

const SearchList = ({ userData }) => {
  return (
    <div className='cardGlass rounded-lg min-h-[5rem] shadow px-5 flex justify-start items-center mt-5'>
      <div className='bg-gray-200 rounded-full w-10 h-10'></div>
      <div className='bg-gray-200 ml-3 w-[30%] h-3 rounded-lg'></div>
    </div>
  );
};

export default SearchList;
