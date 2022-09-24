import React from 'react';
import { Dropdown } from '@nextui-org/react';

export default function DropdownCom({ setColor }) {
  const [selected, setSelected] = React.useState(new Set(['Black']));

  const menuItems = [
    { key: 'Gray', name: 'Gray' },
    { key: 'Red', name: 'Red' },
    { key: 'Blue', name: 'Blue' },
    { key: 'Pink', name: 'Pink' },
    { key: 'Purple', name: 'Purple' },
    { key: 'Yellow', name: 'Yellow' },
  ];

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(', ').replaceAll('_', ' '),
    [selected]
  );

  return (
    <Dropdown>
      <Dropdown.Button
        flat
        className={`bg-${selectedValue.toLowerCase()}-400 hover:bg-${selectedValue.toLowerCase()}-500 text-white`}
        css={{ tt: 'capitalize' }}
      >
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label='Single selection actions'
        color='secondary'
        disallowEmptySelection
        selectionMode='single'
        selectedKeys={selected}
        onSelectionChange={(selection) => {
          setSelected(selection);
          setColor(selection);
        }}
        items={menuItems}
      >
        {(item) => <Dropdown.Item key={item.key}>{item.name}</Dropdown.Item>}
      </Dropdown.Menu>
      <div className='hidden'>
        <span className=' bg-gray-400'></span>
        <span className=' bg-blue-400'></span>
        <span className='bg-black'></span>
        <span className='bg-pink-400'></span>
        <span className='bg-yellow-400'></span>
      </div>
    </Dropdown>
  );
}
