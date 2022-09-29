import React from 'react';
import PropType from 'prop-types';

const ErrorComponent = ({ cause, content }) => {
  return (
    <>
      <div className='h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8'>
        <div className='mx-auto max-w-max'>
          <main className='sm:flex'>
            <p className='text-4xl font-bold tracking-tight text-indigo-600 sm:text-5xl'>
              Error
            </p>
            <div className='sm:ml-6'>
              <div className='sm:border-l sm:border-gray-200 sm:pl-6'>
                <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                  {cause}
                </h1>
                <p className='mt-1 text-base text-gray-500'>{content}</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ErrorComponent;

ErrorComponent.PropType = {
  cause: PropType.string.isRequired,
  content: PropType.string.isRequired,
};
