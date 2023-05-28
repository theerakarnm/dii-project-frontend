import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HomeForm from '../components/Homeform';
import NotLoginInfo from '../components/NotLoginInfo';
import ModalCard from '../components/Home/ModelCard';
import ModalEdit from '../components/Home/ModelEdit';

import { getCookie } from '../libs/getterSetterCookie';
import HomeStore from '../context/contextStore_home';
import { fetchApi } from '../helpers/fetchApi';
import { useDispatch, useSelector } from 'react-redux';
import { setCardModalData, setIsCardLoading, setIsModelOpen, setEditOpen, setVisible, setHasChange, setPageLoading, setUserData, setOpenModal } from '../redux/actions/commonAction';
import { selectCommon } from '../redux/reducers/commonSlicer';
import { action } from '../redux/reducers/commonSlicer';

const Home = () => {
  const dispatch = useDispatch();
  const cookie = getCookie('login_data');
  const { hasChange } = useSelector(selectCommon);
  // const [cardModalData, setCardModalData] = useState({});
  // const [isCardLoading, setIsCardLoading] = useState(false);
  // const [isModelOpen, setIsModelOpen] = useState(false);
  // const [editOpen, setEditOpen] = useState(false);
  // const [visible, setVisible] = useState(false);
  // const [hasChange, setHasChange] = useState(false);

  const closeModalHandler = () => {
    setIsModelOpen(false);
  };

  const openEdit = () => setEditOpen(true);
  const closeHandler = (isChange = false) => {
    if (isChange) setHasChange(true);
    setVisible(false);
  };

  useEffect(() => {
    dispatch(setPageLoading(true));
    const getUserData = async () => {
      try {
        const result = await fetchApi('get', `api/v1/users/${cookie.username}`, true);
        console.log(result.data.data);
        dispatch(action.setUserData(result.data.data));
      } catch (e) {
        console.error(e);
        dispatch(action.setUserData([]));
      } finally {
        dispatch(action.setPageLoading(false));
      }
    };

    getUserData();
  }, [hasChange]);

  const openModal = async id => {
    try {
      setIsModelOpen(true);
      setIsCardLoading(true);
      const res = await fetchApi('get', `api/v1/posts/individual/${id}`, true);
      setCardModalData(res.data.data);
      setIsCardLoading(false);
    } catch (e) {
      console.error(e);
      return;
    }
  };

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
