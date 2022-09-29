import React from 'react';
import { Dropdown } from '@nextui-org/react';
import { fetchApi } from '../../helpers/fetchApi';

import PropType from 'prop-types';

const OptionDropdown = ({ onAction, content }) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Button flat color={'secondary'}></Dropdown.Button>
        <Dropdown.Menu
          color={'secondary'}
          onAction={onAction}
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

OptionDropdown.PropType = {
  onAction: PropType.func,
  content: PropType.array,
};
