import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchApi } from '../helpers/fetchApi';
import Navbar from '../components/Navbar';
import Container from '../layouts/Container';
import Avatar from '../components/Avatar';

const Search = () => {
  const { context } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getSearchData = async () => {
      try {
        setLoading(true);
        const res = await fetchApi('get', `api/v1/users/search/${context}`);

        setData(res.data.data);
        console.log(res.data.data);
        setLoading(false);
      } catch (e) {
        console.error(e);
        setLoading(false);
        return;
      }
    };
    getSearchData();
  }, []);

  if (loading) {
    return (
      <>
        <Navbar
          nameWhichActive={'Search'}
          moreRoute={[
            {
              name: 'Search',
              to: `/search/${context}`,
            },
          ]}
        />
        <Container>
          {new Array(5).map((v) => {
            return (
              <div className='bg-gray-100 rounded-lg min-h-[5rem] shadow px-5 flex justify-start items-center animate-pulse'>
                <div className='bg-gray-200 rounded-full w-10 h-10'></div>
                <div className='bg-gray-200 ml-3 w-[30%] h-3 rounded-lg'></div>
              </div>
            );
          })}
        </Container>
      </>
    );
  }

  if (data.length === 0) {
    return (
      <>
        <Navbar
          nameWhichActive={'Search'}
          moreRoute={[
            {
              name: 'Search',
              to: `/search/${context}`,
            },
          ]}
        />
        <div className='mt-8 w-screen flex justify-center items-center'>
          <h1 className='text-[3rem] font-bold text-purple-600'>
            User not found
          </h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar
        nameWhichActive={'Search'}
        moreRoute={[
          {
            name: 'Search',
            to: `/search/${context}`,
          },
        ]}
      />

      <Container>
        {data.map((user) => (
          <div>
            <Link
              className='cardGlass rounded-lg min-h-[5rem] shadow px-5 flex justify-start items-center mt-5'
              to={`/profile/${user.username}`}
            >
              <div className='rounded-full w-10 h-10'>
                <Avatar size='2.5rem' url={user.avatar} />
              </div>
              <div className='ml-4 mt-2 text-sm sm:text-md md:text-lg'>
                <span>{`${user.fname} ${user.lname}`}</span>
              </div>
              <div className='ml-2 mt-2 text-xs sm:text-md md:text-lg'>
                <span className='text-gray-400'>{`( ${user.username} )`}</span>
              </div>
            </Link>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Search;
