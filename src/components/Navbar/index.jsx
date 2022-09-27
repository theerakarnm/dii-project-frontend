import { Navbar, Dropdown, Avatar, Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { Logo } from './Logo.jsx';

export default function NavbarComponent({ nameWhichActive, moreRoute = [] }) {
  const cookieData = JSON.parse(Cookies.get('login_data'));
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
      to: '/diary',
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
      <Navbar className='z-[9999]' variant='sticky'>
        <Navbar.Toggle showIn='xs' />
        <Navbar.Brand
          css={{
            '@xs': {
              w: '12%',
            },
          }}
        >
          <Link className='flex items-center' to='/'>
            <Logo />
            <Text b color='inherit' hideIn='xs'>
              S-LOG
            </Text>
          </Link>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor='secondary'
          hideIn='xs'
          variant='highlight-rounded'
        >
          {navItem.map((item) => {
            if (nameWhichActive === item.name)
              return (
                <Navbar.Link key={`${item.name}navItem`} isActive>
                  <Link
                    className='flex justify-center items-center'
                    to={item.to}
                  >
                    {item.name}
                  </Link>
                </Navbar.Link>
              );
            return (
              <Navbar.Link key={`${item.name}navItem`}>
                <Link className='flex justify-center items-center' to={item.to}>
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
          }}
        >
          <Dropdown placement='bottom-right'>
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as='button'
                  color='secondary'
                  size='md'
                  src={cookieData.imageUrl}
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label='User menu actions'
              color='secondary'
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key='profile' css={{ height: '$18' }}>
                <Text b color='inherit' css={{ d: 'flex' }}>
                  Signed in as
                </Text>
                <Text
                  b
                  className='flex text-ellipsis whitespace-nowrap max-w-[10rem] sm:max-w-[13rem] overflow-hidden'
                  // color='inherit'
                >
                  {cookieData.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key='settings' withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key='logout' withDivider color='error'>
                <button onClick={handlerLogout}>Log Out</button>
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
              isActive={item.name === nameWhichActive}
            >
              <Link
                color='inherit'
                css={{
                  minWidth: '100%',
                }}
                to={item.to}
              >
                {item.name}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
