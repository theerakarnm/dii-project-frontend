import { Navbar, Dropdown, Avatar, Text, Input } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Logo } from './Logo.jsx';
import useScreenDimension from '../../hooks/useWindowDimention.jsx';
import { useState } from 'react';

const SearchInput = ({ event: [onSearch, onTyping, searchValue] }) => {
  const [dimension] = useScreenDimension();

  return (
    <Input
      css={{
        width: dimension.width > 960 ? '10rem' : '100%',
      }}
      value={searchValue}
      onChange={onTyping}
      underlined
      placeholder='Search user...'
      color='secondary'
      contentRightStyling={{
        cursor: 'pointer',
      }}
      contentRight={
        <>
          <button
            aria-labelledby='asdfsdaf'
            aria-label='asdfsdaf'
            onClick={onSearch}
            className='w-5 h-5 m-1'>
            <svg
              aria-label='asdfsdaf'
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-search w-5 h-5'
              width='44'
              height='44'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='#6f32be'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path
                stroke='none'
                d='M0 0h24v24H0z'
                fill='none'
              />
              <circle
                cx='10'
                cy='10'
                r='7'
              />
              <line
                x1='21'
                y1='21'
                x2='15'
                y2='15'
              />
            </svg>
          </button>
        </>
      }
    />
  );
};

export default function NavbarComponent({ nameWhichActive, moreRoute = [] }) {
  const user = JSON.parse(Cookies.get('login_data'));

  const [searchValue, setSearchValue] = useState('');

  const onSearch = () => {
    window.location.href = `/search/${searchValue}`;
  };

  const onTyping = e => {
    setSearchValue(e.target.value);
  };

  const navItem = [
    {
      name: 'Home',
      to: '/',
    },
    {
      name: 'Feed',
      to: '/feed',
    },
    {
      name: 'Diary',
      to: '/myDiary',
    },
    ...moreRoute,
  ];
  const collapseItems = [
    ...navItem,
    {
      name: 'My Settings',
      to: '/setting',
    },
    {
      name: 'Log Out',
      to: '/logout',
    },
  ];

  const handlerLogout = () => {
    Cookies.remove('login_data');

    window.location.replace('/login');
  };

  return (
    <>
      <Navbar
        className='z-[9999] bg-none'
        variant='floating'>
        <Navbar.Toggle showIn='sm' />
        <Navbar.Brand
          css={{
            '@xs': {
              w: '12%',
            },
          }}>
          <Link
            className='flex items-center'
            to='/'>
            <Logo />
            <Text
              b
              color='inherit'
              hideIn='sm'>
              AGRI-FLOW
            </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor='secondary'
          hideIn='sm'
          variant='highlight-rounded'>
          {navItem.map(item => {
            if (nameWhichActive === item.name)
              return (
                <Navbar.Link
                  key={`${item.name}navItem`}
                  isActive>
                  <Link
                    className='flex justify-center items-center'
                    to={item.to}>
                    {item.name}
                  </Link>
                </Navbar.Link>
              );
            return (
              <Navbar.Link key={`${item.name}navItem`}>
                <Link
                  className='flex justify-center items-center'
                  to={item.to}>
                  {item.name}
                </Link>
              </Navbar.Link>
            );
          })}
        </Navbar.Content>
        <Navbar.Content
          css={{
            '@xs': {
              w: '12%',
              jc: 'flex-end',
            },
          }}>
          <Navbar.Item hideIn='sm'>
            <SearchInput event={[onSearch, onTyping, searchValue]} />
          </Navbar.Item>
          <Dropdown placement='bottom-right'>
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as='button'
                  color='secondary'
                  size='md'
                  src={user.imageProfile}
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label='User menu actions'
              color='secondary'
              onAction={actionKey => console.log({ actionKey })}>
              <Dropdown.Item
                key='profile'
                css={{ height: '$18' }}>
                <Text
                  b
                  color='inherit'
                  css={{ d: 'flex' }}>
                  Signed in as
                </Text>
                <Text
                  b
                  className='flex text-ellipsis whitespace-nowrap max-w-[10rem] sm:max-w-[13rem] overflow-hidden'>
                  {user.username}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item
                key='logout'
                withDivider
                color='error'>
                <button
                  className='bg-red'
                  onClick={handlerLogout}>
                  Log Out
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={`${item.name}-${item.to}`}
              activeColor='secondary'
              css={{
                color: index === collapseItems.length - 1 ? '$error' : '',
              }}
              isActive={item.name === nameWhichActive}>
              <Link
                color='inherit'
                css={{
                  minWidth: '100%',
                }}
                to={item.to}>
                {item.name}
              </Link>
            </Navbar.CollapseItem>
          ))}

          <Navbar.CollapseItem>
            <SearchInput event={[onSearch, onTyping, searchValue]} />
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
