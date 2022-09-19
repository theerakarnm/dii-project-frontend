import Cookies from 'js-cookie';

export const getCookie = (key) => {
  return JSON.parse(Cookies.get(key));
};

export const setCookie = (key, val) => {
  JSON.stringify(Cookies.set(key, val));
};
