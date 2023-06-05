import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HomeForm from '../components/Homeform';
import NotLoginInfo from '../components/NotLoginInfo';
import ModalCard from '../components/Home/ModelCard';
import ModalEdit from '../components/Home/ModelEdit';

import { getCookie } from '../libs/getterSetterCookie';
import { fetchApi } from '../helpers/fetchApi';
import { useDispatch, useSelector } from 'react-redux';
import { selectCommon, commonAction } from '../redux/reducers/commonSlicer';

const Home = () => {
  const dispatch = useDispatch();
  const cookie = getCookie('login_data');
  const { hasChange } = useSelector(selectCommon);

  useEffect(() => {
    dispatch(commonAction.setPageLoading(true));
    const getUserData = async () => {
      try {
        const result = await fetchApi('get', `api/v1/users/${cookie.username}`, true);
        dispatch(commonAction.setUserData(result.data.data));
      } catch (e) {
        console.error(e);
        dispatch(commonAction.setUserData([]));
      } finally {
        dispatch(commonAction.setPageLoading(false));
      }
    };

    getUserData();
  }, [hasChange]);

  if (cookie === undefined)
    return (
      <div className='h-screen'>
        <NotLoginInfo />
      </div>
    );

  return (
    <>
      <Navbar nameWhichActive={'Home'} />
      <ModalCard />
      <ModalEdit />

      <HomeForm />
    </>
  );
};

export default Home;
