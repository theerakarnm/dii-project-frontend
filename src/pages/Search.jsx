import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchApi } from '../helpers/fetchApi';

const Search = () => {
  const { context } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getSearchData = async () => {
      try {
        const res = await fetchApi(
          'get',
          `api/v1/users/search?context=${context}`
        );

        setData(res.data.data);
      } catch (e) {
        console.error(e);
        return;
      }
      getSearchData();
    };
  }, []);

  return <div>Search</div>;
};

export default Search;
