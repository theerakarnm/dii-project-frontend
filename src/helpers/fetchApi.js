import axios from 'axios';
import { getCookie } from '../libs/getterSetterCookie';

export const fetchApi = async (method, path, withAuthHeader = true, body = null) => {
  const baseApiUrl = `${import.meta.env.VITE_API_HOSTNAME}`;
  const apiUrl = `${baseApiUrl}${path}`;
  const cookieData = getCookie('login_data');
  const config = withAuthHeader
    ? {
        headers: {
          Authorization: cookieData.token,
        },
      }
    : {};

  return method === 'get' || method === 'delete' ? await axios[method](apiUrl, config) : await axios[method](apiUrl, body, config);
};

export const fetchApiHelper = (path, options) => {
  const { withAuthHeader = true, body = null } = options;
  return {
    get: async () => await fetchApi('get', path, withAuthHeader),
    post: async () => await fetchApi('post', path, withAuthHeader, body),
    put: async () => await fetchApi('put', path, withAuthHeader, body),
    delete: async () => await fetchApi('delete', path, withAuthHeader),
    patch: async () => await fetchApi('patch', path, withAuthHeader, body),
  };
};
