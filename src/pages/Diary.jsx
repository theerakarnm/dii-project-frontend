import Navbar from '../components/Navbar';
import { useState } from 'react';
import { getCookie } from '../libs/getterSetterCookie';
import Drawing from '../components/Drawing';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchApi } from '../helpers/fetchApi';
import ErrorComponent from '../components/ErrorComponent';
import { Loading } from '@nextui-org/react';
import { useDispatch, useSelector } from 'react-redux';
import { commonAction, selectCommon } from '../redux/reducers/commonSlicer';

export default function Diary() {
  const { userId } = useParams();
  const [hasError, setHasError] = useState(false);

  const dispatch = useDispatch();
  const { pageLoading, userData } = useSelector(selectCommon);

  useEffect(() => {
    const getUserData = async () => {
      try {
        dispatch(commonAction.setPageLoading(true));
        const res = await fetchApi('get', `api/v1/users/${userId}`);

        if (res.status === 204) {
          throw new Error('User not found');
        }
        dispatch(commonAction.setUserData(res.data.data));
      } catch (e) {
        setHasError(true);
        return;
      } finally {
        dispatch(commonAction.setPageLoading(false));
      }
    };

    getUserData();
  }, []);

  if (pageLoading) {
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
                  <p className='text-xl font-semibold mb-2'>{`${userData.name}`}</p>
                </div>
                <div>
                  <p className='text-sm mt-1'>{`${new Date().toLocaleDateString('th-TH', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}`}</p>
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
