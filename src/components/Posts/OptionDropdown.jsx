import React from 'react';
import { Dropdown } from '@nextui-org/react';

const OptionDropdown = ({ content }) => {
  const onSelect = (event) => {
    console.log(event);
  };
  return (
    <>
      <Dropdown>
        <Dropdown.Button flat color={'secondary'}></Dropdown.Button>
        <Dropdown.Menu
          color={'secondary'}
          onAction={onSelect}
          aria-label='Static Actions'
        >
          {content.map((item, index) => {
            return (
              <Dropdown.Item
                key={item.split(' ')[0].toLowerCase()}
                color={index === content.length - 1 ? 'error' : 'default'}
              >
                {item}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default OptionDropdown;
