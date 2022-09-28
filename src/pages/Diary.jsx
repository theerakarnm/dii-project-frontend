import Navbar from '../components/Navbar';
import { useState } from 'react';
import { getCookie } from '../libs/getterSetterCookie';
import Drawing from '../components/Drawing';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchApi } from '../helpers/fetchApi';
import ErrorComponent from '../components/ErrorComponent';
import LoginComponent from '../components/LoginComponent';
import { Loading } from '@nextui-org/react';

export default function Diary() {
  const cookie = getCookie('login_data');
  const { userId } = useParams();
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      try {
        setLoading(true);
        const res = await fetchApi('get', `api/v1/users/${userId}`);

        console.log(res);

        if (res.status === 204) {
          throw new Error('User not found');
        }

        setUserData(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
        setHasError(true);
        return;
      }
    };

    getUserData();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar nameWhichActive={'Diary'} />
        <div className='w-screen h-screen flex justify-center items-center'>
          <Loading />
        </div>
      </>
    );
  }

  if (hasError) {
    return (
      <ErrorComponent
        cause={'User not found'}
        content={'Please check username or id and try again'}
      />
    );
  }

  //TODO : when same user can't write self diary

  return (
    <>
      <Navbar nameWhichActive={'Diary'} />
      <div className='flex justify-center items-center w-screen h-screen'>
        <div className='flex justify-center bg-white shadow-lg rounded-lg w-full max-w-3xl md:max-w-[40rem] p-3'>
          <div className='flex flex-col md:flex-row items-start px-4 py-6 w-full'>
            <div className='mr-2'>
              <img
                className='w-12 h-12 rounded-full object-cover mr-4 shadow'
                src={`${userData.profileUrl}`}
                alt='avatar'
              />
            </div>
            <div className='flex flex-col w-full'>
              <div className='flex justify-between'>
                <div>
                  <p className='text-xl font-semibold mb-2'>
                    {`${userData.name}`}
                  </p>
                </div>
                <div>
                  <p className='text-sm mt-1'>22h ago</p>
                </div>
              </div>
              <div className='w-full min-h-[28rem] '>
                <Drawing assignTo={userId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
