import { useState, useEffect, useContext } from 'react';
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
import HomeStore from '../context/contextStore_home';

const HomeForm = () => {
  const cookie = getCookie('login_data');

  const [userData, setUserData] = useState({
    post: [],
  });
  const [pageLoading, setPageLoading] = useState(false);
  const { handler } = useContext(HomeStore);

  useEffect(() => {
    setPageLoading(true);
    const getUserData = async () => {
      try {
        setPageLoading(true);
        const result = await fetchApi(
          'get',
          `api/v1/users/${cookie.username}`,
          true
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
                  value={userData.bio}
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
          <div className='w-full h-auto grid gap-4 md:grid-rows-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-5 my-8
                          grid-auto-row-max grid-flow-row-dense'>
            {userData.post.map((p) => {
              return <CardHome key={p.id} data={p}></CardHome>;
            })}
          </div>

          {/* Modal card-IMG post */}

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
        </div>
      </div>
    </>
  );
};

export default HomeForm;
