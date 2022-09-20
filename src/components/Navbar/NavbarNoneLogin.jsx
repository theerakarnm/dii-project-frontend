import { Navbar, Dropdown, Avatar, Link, Text } from '@nextui-org/react';
import Cookies from 'js-cookie';
import { Logo } from './Logo.jsx';

export default function NavbarComponent({ nameWhichActive }) {
  const collapseItems = [
    {
      name: 'Sign in',
      href: '/#/login',
    },
    {
      name: 'Sign up',
      href: '/#/regis',
    },
  ];

  return (
    <>
      <Navbar variant='sticky'>
        <Navbar.Toggle showIn='xs' />
        <Navbar.Brand
          css={{
            '@xs': {
              w: '12%',
            },
          }}
        >
          <a className='flex items-center' href='/#/'>
            <Logo />
            <Text b color='inherit' hideIn='xs'>
              S-LOG
            </Text>
          </a>
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
          <Navbar.Link className='underline' href={'/#/login'}>
            Sign in
          </Navbar.Link>
          <Navbar.Link
            className='bg-purple-400 px-8 py-4 text-white rounded'
            href={'/#/regis'}
          >
            Sign up
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={`${item.name}-${item.href}`}
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
                href={item.href}
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
