import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCookie } from '../libs/getterSetterCookie';
import { fetchApi } from '../helpers/fetchApi';
import Navbar from '../components/Navbar';
import { Avatar, Textarea, Text, Button, Loading } from '@nextui-org/react';
import ErrorComponent from '../components/ErrorComponent';
import CardHome from '../components/Home/Card';
import HomeStore from '../context/contextStore_home';
import ModelCard from '../components/Home/ModelCard';

const Profile = () => {
  const { userId } = useParams();
  const cookie = getCookie('login_data');

  const [editOpen, setEditOpen] = useState(false);
  const [userData, setUserData] = useState({
    post: [],
  });
  const [pageLoading, setPageLoading] = useState(false);
  const [cardModalData, setCardModalData] = useState({});
  const [isCardLoading, setIsCardLoading] = useState(false);
  const [isModelOpen, setIsModelOpen] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    const getUserData = async () => {
      try {
        setPageLoading(true);
        const result = await fetchApi('get', `api/v1/users/${userId}`, true);
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

  const openModal = async (id) => {
    try {
      setIsModelOpen(true);
      setIsCardLoading(true);
      console.log({ id });
      const res = await fetchApi('get', `api/v1/posts/individual/${id}`);
      setCardModalData(res.data.data);
      setIsCardLoading(false);
    } catch (e) {
      console.error(e);
      return;
    }
  };

  const closeModalHandler = () => {
    setIsModelOpen(false);
  };

  const openEdit = () => setEditOpen(true);
  const closeEdit = () => setEditOpen(false);

  if (!userData) {
    return (
      <ErrorComponent
        cause={'User not found'}
        content={'Please check username again'}
      />
    );
  }

  if (pageLoading) {
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
        <div className='flex justify-center items-center w-screen h-screen'>
          <Loading />
        </div>
      </>
    );
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
      <HomeStore.Provider
        value={{
          openModal,
          closeModalHandler,
          openEdit,
          isModelOpen,
          editOpen,
          cardModalData,
        }}
      >
        <ModelCard data={cardModalData} loading={isCardLoading} />
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
                    h1
                    className='md:text-[1.3rem] text-[0.8rem]  md:ml-5 ml-2'
                    css={{
                      textGradient: '45deg, $purple600 -20%, $pink600 100%',
                    }}
                    weight='bold'
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
                <div className='w-full'>
                  <Text>{userData.bio}fix fix this ui</Text>
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

                <div className='w-full flex justify-center items-center opacity-50 hover:opacity-100'>
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
                    {userId !== cookie.username ? (
                      <Link to={`/diary/${userId}`}>Diary</Link>
                    ) : (
                      <Link to={`/myDiary`}>Diary</Link>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* body */}

            <div
              className='w-full h-auto grid gap-4 md:grid-rows-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-5 my-8
                          grid-auto-row-max grid-flow-row-dense'
            >
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

            {/* Modal edit profile */}
          </div>
        </div>
      </HomeStore.Provider>
    </>
  );
};

export default Profile;
