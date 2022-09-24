import { Navbar, Dropdown, Avatar, Link, Text } from '@nextui-org/react';
import Cookies from 'js-cookie';
import { Logo } from './Logo.jsx';

export default function NavbarComponent({ nameWhichActive }) {
  const cookieData = JSON.parse(Cookies.get('login_data'));
  console.log(cookieData);
  const navItem = [
    {
      name: 'Home',
      href: '/#/',
    },
    {
      name: 'Feed',
      href: '/#/feed',
    },
    {
      name: 'Diary',
      href: '/#/diary',
    },
  ];
  const collapseItems = [
    ...navItem,
    {
      name: 'My Settings',
      href: '/#/setting',
    },
    {
      name: 'Log Out',
      href: '/#/logout',
    },
  ];

  const handlerLogout = () => {
    Cookies.remove('login_data');

    window.location.replace('/#/login');
  };

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
        <Navbar.Content
          enableCursorHighlight
          activeColor='secondary'
          hideIn='xs'
          variant='highlight-rounded'
        >
          {navItem.map((item) => {
            if (nameWhichActive === item.name)
              return (
                <Navbar.Link
                  key={`${item.name}navItem`}
                  isActive
                  href={item.href}
                >
                  {item.name}
                </Navbar.Link>
              );
            return (
              <Navbar.Link key={`${item.name}navItem`} href={item.href}>
                {item.name}
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
              key={`${item.name}-${item.href}`}
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
