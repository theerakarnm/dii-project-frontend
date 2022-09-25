import React from 'react';
import { useParams } from 'react-router-dom';
import { getCookie } from '../libs/getterSetterCookie';
import NotLoginInfo from '../components/NotLoginInfo';
import { fetchApi } from '../helpers/fetchApi';
import Navbar from '../components/Navbar';
import Container from '../layouts/Container';

const Profile = () => {
  const { userId } = useParams();

  const cookieData = getCookie('login_data');

  if (!cookieData) {
    return <NotLoginInfo />;
  }

  return (
    <>
      <Navbar
        nameWhichActive={'Profile'}
        moreRoute={[
          {
            name: 'Profile',
            to: `/profile/${userId}`,
          },
        ]}
      />
      <Container></Container>
    </>
  );
};

export default Profile;
