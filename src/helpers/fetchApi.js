import axios from 'axios';
import { getCookie } from '../libs/getterSetterCookie';

export const fetchApi = async (
  method,
  path,
  withAuthHeader = true,
  body = null
) => {
  const baseApiUrl = `${import.meta.env.VITE_API_HOSTNAME}`;
  const apiUrl = `${baseApiUrl}${path}`;
  const cookieData = getCookie('login_data');
  const config = {
    headers: {
      Authorization: cookieData.token,
    },
  };

  if (method === 'get' || method === 'delete') {
    return withAuthHeader
      ? await axios[method](apiUrl, config)
      : await axios[method](apiUrl);
  }

  return withAuthHeader
    ? await axios[method](apiUrl, body, config)
    : await axios[method](apiUrl, body);
};
