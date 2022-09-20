import Navbar from '../components/Navbar';
import Homeform from '../components/Homeform';
import NotLoginInfo from '../components/NotLoginInfo';

import { getCookie } from '../libs/getterSetterCookie';

const Home = () => {
  //TODO : handle login page
  const cookie = getCookie('login_data');

  if (cookie === undefined)
    return (
      <div className='h-screen'>
        <NotLoginInfo />
      </div>
    );

  return (
    <>
      <Navbar nameWhichActive={'Home'} />
      <Homeform />
    </>
  );
};

export default Home;
