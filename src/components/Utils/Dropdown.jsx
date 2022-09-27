import React from 'react';

const RadioSelf = ({ element, defaultChecked, c, value }) => {
  return (
    <div className='flex'>
      <input
        onClick={c}
        type='radio'
        value={value}
        name='hs-radio-group'
        className='shrink-0 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 '
        id='hs-radio-group-1'
        defaultChecked={defaultChecked}
      />
      <label
        htmlFor='hs-radio-group-1'
        className='text-sm text-gray-500 ml-2 dark:text-gray-400'
      >
        {element}
      </label>
    </div>
  );
};

export default function DropdownCom({ setColor }) {
  const onChange = (v) => {
    console.log(v.target.value);
    setColor(v.target.value);
  };
  const itemList = [
    {
      defCheck: true,
      element: <div className='bg-black w-7 h-4'></div>,
      value: 'black',
    },
    {
      defCheck: false,
      element: <div className='bg-gray-400 w-7 h-4'></div>,
      value: 'gray',
    },
    {
      defCheck: false,
      element: <div className='bg-blue-400 w-7 h-4'></div>,
      value: 'blue',
    },
    {
      defCheck: false,
      element: <div className='bg-pink-400 w-7 h-4'></div>,
      value: 'pink',
    },
    {
      defCheck: false,
      element: <div className='bg-yellow-400 w-7 h-4'></div>,
      value: 'yellow',
    },
    {
      defCheck: false,
      element: <div className='bg-green-400 w-7 h-4'></div>,
      value: 'green',
    },
    {
      defCheck: false,
      element: <div className='bg-orange-400 w-7 h-4'></div>,
      value: 'orange',
    },
  ];
  return (
    <>
      <div className='flex flex-wrap gap-2'>
        {itemList.map((item) => {
          return (
            <RadioSelf
              key={item.value}
              element={item.element}
              defaultChecked={item.defCheck}
              c={onChange}
              value={item.value}
            />
          );
        })}
      </div>
    </>
  );
}
