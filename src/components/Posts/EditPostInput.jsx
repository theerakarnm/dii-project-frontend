import { Textarea } from '@nextui-org/react';
import React from 'react';
import { useState } from 'react';

const EditPostInput = ({ setter, initValue }) => {
  const [value, setValue] = useState(initValue);

  const onType = (e) => {
    setValue(e.target.value);
  };

  const onDiscard = () => {
    setter.setIsAbleEdit(false);
  };

  const onConfirm = () => {
    setter.setIsAbleEdit(false);
    setter.setContent(value);
  };

  return (
    <div className='flex flex-col justify-end w-full pr-3'>
      <Textarea
        css={{
          width: '100%',
        }}
        placeholder='edit here'
        value={value}
        onChange={onType}
        rows={4}
      />
      <div className='flex justify-end'>
        <button
          onClick={onDiscard}
          className='bg-red-400 text-white py-1 px-3 rounded-lg ml-1 mt-2 hover:bg-red-500'
        >
          Discard
        </button>
        <button
          onClick={onConfirm}
          className='bg-sky-400 text-white py-1 px-3 rounded-lg ml-1 mt-2 hover:bg-sky-500'
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default EditPostInput;
