import { Navbar, Dropdown, Avatar, Text } from '@nextui-org/react';
import Cookies from 'js-cookie';
import { Logo } from './Logo.jsx';
import { Link } from 'react-router-dom';

export default function NavbarComponent({ nameWhichActive }) {
  const collapseItems = [
    {
      name: 'Sign in',
      to: '/login',
    },
    {
      name: 'Sign up',
      to: '/regis',
    },
  ];

  return (
    <>
      <Navbar className='z-[9999] bg-none' variant='floating'>
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
        <Navbar.Content></Navbar.Content>
        <Navbar.Content
          hideIn='xs'
          css={{
            '@xs': {
              w: '30%',
              jc: 'flex-end',
            },
          }}
        >
          <Navbar.Link className='underline'>
            <Link className='flex justify-center items-center' to={'/login'}>
              Sign in
            </Link>
          </Navbar.Link>
          <Navbar.Link
            className='bg-purple-500 px-8 py-4 text-white rounded'
            to={'/regis'}
          >
            <Link className='flex justify-center items-center' to={'/regis'}>
              Sign up
            </Link>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={`${item.name}-${item.to}`}
              activeColor='secondary'
              css={{
                color: index === collapseItems.length - 1 ? '$secondary' : '',
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
