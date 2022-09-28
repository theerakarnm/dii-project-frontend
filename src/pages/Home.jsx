import { useState } from 'react';
import Navbar from '../components/Navbar';
import Homeform from '../components/Homeform';
import NotLoginInfo from '../components/NotLoginInfo';
import {
  Avatar,
  Textarea,
  Text,
  Button,
  Modal,
  Card,
  Loading,
  User,
} from '@nextui-org/react';

import { getCookie } from '../libs/getterSetterCookie';
import HomeStore from '../context/contextStore_home';

const Home = () => {
  //TODO : handle login page
  const cookie = getCookie('login_data');
  const [visible, setVisible] = useState(false);
  const [cardImgOpen, setCardImgOpen] = useState(false);
  const [cardTextOpen, setCardTextOpen] = useState(false);

  const [modelImgOpen, setModelImgOpen] = useState(false);
  const [modelTextOpen, setModelTextOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  const handler = () => setVisible(true);
  const closeHandler = () => setVisible(false);

  const openImgModal = () => setModelImgOpen(true);
  const closeImgModal = () => setModelImgOpen(false);
  const openTextModal = () => setModelTextOpen(true);
  const closeTextModal = () => setModelTextOpen(false);

  const openEdit = () => setEditOpen(true);
  const closeEdit = () => setEditOpen(false);

  if (cookie === undefined)
    return (
      <div className='h-screen'>
        <NotLoginInfo />
      </div>
    );

  return (
    <>
      <Navbar nameWhichActive={'Home'} />
      <HomeStore.Provider
        value={{
          visible,
          closeHandler,
          openTextModal,
          closeTextModal,
          openEdit,
          openImgModal,
          closeImgModal,
          handler,
        }}
      >
        {/* edit modal */}

        <Homeform />
      </HomeStore.Provider>
    </>
  );
};

export default Home;
