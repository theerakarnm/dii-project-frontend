/* This example requires Tailwind CSS v2.0+ */

import React from 'react';
import { getCookie } from '../libs/getterSetterCookie';

const Homeform = () => {
  return (
    <div className='max-w-6xl mx-5 p-10 xl:auto '>
      <div className='grid grid-cols-4 gap-4'>
        <div className='rounded-full w-36 h-36'>
          <img src='/Logowithoutfont.png' alt='logo' />
        </div>
      </div>
    </div>
  );
};

export default Homeform;
