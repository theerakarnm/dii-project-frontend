import { useState, useEffect } from 'react';
import { getCookie } from '../libs/getterSetterCookie';
import NotLoginInfo from '../components/NotLoginInfo';
import { fetchApi } from '../helpers/fetchApi';
import { Link } from 'react-router-dom';
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

import ErrorComponent from '../components/ErrorComponent';
import CardHome from '../components/Home/Card';
import ModelCard from '../components/Home/ModelCard';

const HomeForm = () => {
  const cookie = getCookie('login_data');

  const [visible, setVisible] = useState(false);
  const [cardImgOpen, setCardImgOpen] = useState(false);
  const [cardTextOpen, setCardTextOpen] = useState(false);

  const [modelImgOpen, setModelImgOpen] = useState(false);
  const [modelTextOpen, setModelTextOpen] = useState(false);

  const [editOpen, setEditOpen] = useState(false);
  const [userData, setUserData] = useState({
    post: [],
  });
  const [pageLoading, setPageLoading] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    const getUserData = async () => {
      try {
        setPageLoading(true);
        const result = await fetchApi(
          'get',
          `api/v1/users/${cookie.username}`,
          false
        );
        setUserData(result.data.data);
        console.log(result.data.data);
        setPageLoading(false);
      } catch (e) {
        setPageLoading(false);
        console.error(e);
        setUserData([]);
      }
    };

    getUserData();
  }, []);

  const handler = () => setVisible(true);
  const closeHandler = () => setVisible(false);

  const openImgCard = () => setCardImgOpen(true);
  const closeCardImg = () => setCardImgOpen(false);
  const openTextCard = () => setCardTextOpen(true);
  const closeCardText = () => setCardTextOpen(false);

  const openImgModal = () => setModelImgOpen(true);
  const closeImgModal = () => setModelImgOpen(false);
  const openTextModal = () => setModelTextOpen(true);
  const closeTextModal = () => setModelTextOpen(false);

  const openEdit = () => setEditOpen(true);
  const closeEdit = () => setEditOpen(false);

  if (!cookie) {
    return <NotLoginInfo />;
  }

  if (!userData) {
    return <ErrorComponent />;
  }

  if (pageLoading) {
    return (
      <>
        <div className='flex justify-center items-center w-screen h-screen'>
          <Loading />
        </div>
      </>
    );
  }

  return (
    <>
      <div className='h-screen w-screen flex justify-center items-center '>
        <div className='max-w-5xl w-full h-full flex flex-col m-auto'>
          <div className=' w-full  grid grid-cols-3 md:gap-4 gap-0 items-center my-3 p-2 '>
            <div className=''>
              <dir>
                <Text
                  h1
                  className='md:text-[2rem] text-[1.5rem]'
                  weight='bold'
                  css={{
                    textGradient: '45deg, $purple600 -20%, $pink600 100%',
                  }}
                >
                  {`${userData.name}`}
                </Text>
                <Text
                  className='md:text-[1.3rem] text-[0.8rem]'
                  css={{
                    textGradient: '45deg, $purple600 -20%, $pink600 100%',
                  }}
                  weight='light'
                >
                  {`${userData.email}`}
                </Text>
              </dir>

              <div className=''></div>
            </div>

            <div className=' flex justify-center items-center '>
              <div className='md:h-[12rem] md:w-[12rem] w-[7rem] h-[7rem]'>
                <Avatar
                  className='w-full h-full'
                  src={`${userData.profileUrl}`}
                  color='secondary'
                  bordered
                />
              </div>
            </div>

            <div className='flex flex-col justify-center items-end md:p-2'>
              <div className='w-full flex justify-end items-end mb-2'>
                <Button
                  auto
                  className='text-purple-600 border-solid border-purple-300 border-[1px] px-2
                                        hover:bg-purple-400 hover:text-white '
                  onClick={handler}
                >
                  Edit Profile
                </Button>
              </div>

              <div className='w-full'>
                <Textarea
                  width='100%'
                  bordered
                  color='secondary'
                  labelPlaceholder='Add your Bio'
                  value=' '
                />
              </div>

              <div className='w-full flex flex-row justify-around items-center mt-5 '>
                <div>
                  <Text
                    css={{
                      textGradient: '45deg, $purple600 -20%, $pink600 100%',
                    }}
                    weight='bold'
                  >
                    <span className='text-2xl'>{`${userData.postCount}`}</span>{' '}
                    post
                  </Text>
                </div>
                <div>
                  <Text
                    css={{
                      textGradient: '45deg, $purple600 -20%, $pink600 100%',
                    }}
                    weight='bold'
                  >
                    <span className='text-2xl'>{`${userData.diaryCount}`}</span>{' '}
                    diary
                  </Text>
                </div>
              </div>
            </div>
          </div>

          <div className=' w-full h-[2px] bg-gradient-to-r p-[1px] from-[#7928ca] to-[#ff0080]'></div>

          {/* card home page */}
          <div className='w-full  flex justify-center md:pt-5 md:pb-2 md:my-2 '>
            <div className='w-[25%] flex justify-center items-center'>
              <div className='w-full flex justify-center items-center opacity-50 hover:opacity-100'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-border-all '
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <rect x={4} y={4} width={16} height={16} rx={2}></rect>
                    <line x1={4} y1={12} x2={20} y2={12}></line>
                    <line x1={12} y1={4} x2={12} y2={20}></line>
                  </svg>
                </div>
                <div className='font-bold mx-1 text-[1.3rem] '>Post</div>
              </div>

              <div className='w-full flex justify-center items-center opacity-50 hover:opacity-100 '>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-notebook'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
                    <path d='M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18'></path>
                    <line x1='13' y1='8' x2='15' y2='8'></line>
                    <line x1='13' y1='12' x2='15' y2='12'></line>
                  </svg>
                </div>
                <div className='font-bold mx-1 text-[1.3rem] '>
                  <Link to='myDiary'>Diary</Link>
                </div>
              </div>
            </div>
          </div>

          {/* body */}

          <div className='w-full h-full grid gap-2 md:grid-rows-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-5 mt-5'>
            {userData.post.map((p) => {
              return (
                <CardHome
                  key={p.id}
                  data={p}
                  openImgCard={openImgCard}
                  openTextCard={openTextCard}
                ></CardHome>
              );
            })}
          </div>

          {/* Modal card-IMG post */}
          {/* <div className='w-full h-full max-h-lg'>
            <Modal
              blur
              className='md:max-w-[80rem]  flex justify-center items-center md:mx-auto mx-[2rem]'
              aria-labelledby='modal-title'
              open={cardImgOpen}
              onClose={closeCardImg}
              width='100%'
            >
              <Modal.Header className='m-0 p-0 w-full h-full pt-4 pl-4'>
                <div className='w-full flex justify-between'>
                  <div className='w-full  flex justify-start items-center'>
                    <div className='min-h-lg'>
                      <Avatar
                        src={`${cookie.imageUrl}`}
                        color='secondary'
                        bordered
                      />
                    </div>
                    <div className='pl-2'>
                      <Text
                        h1
                        className='md:text-[1.3rem] text-[1rem] font-[Nunito]'
                        weight='bold'
                        css={{
                          textGradient: '45deg, $purple600 -20%, $pink600 100%',
                        }}
                      >
                        {`${cookie.firstName} ${cookie.lastName}`}
                      </Text>
                    </div>
                  </div>
                  <div className='w-full flex justify-end items-center'>
                    <Button
                      auto
                      onClick={openEdit}
                      className='text-purple-600 text-xl'
                    >
                      ...
                    </Button>
                  </div>
                </div>
              </Modal.Header>

              <Modal.Body className='h-full w-full flex justify-center items-center m-0 px-5 md:pb-[1.3rem] '>
                <div className='w-full h-full md:max-h-[40rem] max-h-auto flex md:flex-row flex-col'>
                  <div className='md:max-w-[60%] w-full  flex flex-col'>
                    <div className='w-full h-full flex justify-center md:min-h-[30rem] min-h-[15rem] items-center bg-black rounded-lg '>
                      <img
                        className='w-full md:max-h-full rounded-lg'
                        src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                        alt='modal'
                      />
                    </div>
                  </div>
                  <div className='w-full '>
                    <div className='w-full h-[90%] border pl-4 pt-2'>
                      comment area
                    </div>
                    <div className='w-[98%] h-[10%] bottom-0 flex justify-center items-center '>
                      <div className='w-[95%] pl-5'>
                        <input
                          type='text'
                          placeholder='Type your Comment...'
                          className='w-full h-full text-[1.2rem] p-2  border-b-2 border-purple-400 focus:outline-none'
                        />
                      </div>
                      <div className='flex justify-center items-center md:w-[5%] '>
                        <img
                          className='cursor-pointer hover:mb-2 transition-all md:w-[80%]'
                          src='/sendIcon.svg'
                          alt='send comment icon'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div> */}


          {/* {userData.post.map((data) => {
            console.log({datanp : data});
              return (
                <ModelCard
                  key={data.id}
                  data={data}
                  
                  openImgModal={openImgModal}
                  openTextModal={openTextModal}

                  closeImgModal={closeImgModal}
                  closeTextModal={closeTextModal}
                ></ModelCard>
              );
            })} */}
         

          {/* Modal edit profile */}
          <div className='w-full max-w-lg h-full max-h-lg'>
            <Modal
              closeButton
              blur
              className='md:max-w-[80rem] mx-auto'
              aria-labelledby='modal-title'
              open={visible}
              onClose={closeHandler}
              width='100%'
            >
              <Modal.Body>
                <div className='w-full h-full flex flex-row'>
                  <div className='w-[25%] border-2 flex flex-col pt-2'>
                    <div className='w-full p-3 hover:font-bold'>
                      Edit Profile
                    </div>
                    <div className='w-full p-3 hover:font-bold'>
                      Change Password
                    </div>
                  </div>
                  <div className='w-[75%] border-2'>
                    <div className=' w- full h-full flex flex-col justify-center items-center'>
                      <div className='mt-10'>
                        <>
                          <User
                            className='pl-10'
                            src={`${cookie.imageUrl}`}
                            name={`${cookie.firstName} ${cookie.lastName}`}
                          />

                          <div className='flex items-center justify-center p-12'>
                            <div className='mx-auto w-full max-w-[550px]'>
                              <form action='' method='POST'>
                                <div className='mb-5'>
                                  <label
                                    htmlFor='name'
                                    className='mb-3 block text-base font-medium text-purple-400'
                                  >
                                    First Name
                                  </label>
                                  <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    value={`${cookie.firstName}`}
                                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                                  />
                                  <label
                                    htmlFor='name'
                                    className='mb-3 mt-4 block text-base font-medium text-purple-400'
                                  >
                                    Last Name
                                  </label>
                                  <input
                                    type='text'
                                    name='lastname'
                                    id='lastname'
                                    value={`${cookie.lastName}`}
                                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                                  />
                                </div>
                                <div className='mb-5'>
                                  <label
                                    htmlFor='email'
                                    className='mb-3 block text-base font-medium text-purple-400'
                                  >
                                    Email Address
                                  </label>
                                  <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    value={`${cookie.email}`}
                                    className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                                  />
                                </div>

                                <div className='mb-5'>
                                  <label
                                    htmlFor='message'
                                    className='mb-3 block text-base font-medium text-purple-400'
                                  >
                                    Bio
                                  </label>
                                  <textarea
                                    rows={4}
                                    name='message'
                                    id='message'
                                    placeholder='Edit your bio ...'
                                    className='w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'
                                    defaultValue={''}
                                  />
                                </div>
                                <div>
                                  <button className='hover:shadow-form rounded-md bg-purple-400 py-3 px-8 text-base font-semibold text-white outline-none'>
                                    Save
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>

          {/* Model edit post */}
          <div className=''>
            <Modal
              className=''
              aria-labelledby='modal-title'
              open={editOpen}
              onClose={closeEdit}
            >
              <Modal.Body className='m-0 p-0'>
                <div className='w-full h-full'>
                  <div className='w-full flex justify-center py-2 border-b-[0.5px] border-gray-300'>
                    Edit Post
                  </div>
                  <div className='w-full flex justify-center py-2 border-b-[0.5px] border-gray-300 text-red-700'>
                    Delete Post
                  </div>
                  <div
                    className='w-full flex justify-center py-2 border-b-[0.5px] border-gray-300'
                    onClick={closeEdit}
                  >
                    Cancel
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeForm;
