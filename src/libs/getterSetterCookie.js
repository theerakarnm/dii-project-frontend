import Cookies from 'js-cookie';

export const getCookie = (key) => {
  const c = Cookies.get(key);
  return c === undefined ? c : JSON.parse(c);
};

export const setCookie = (key, val) => {
  Cookies.set(key, JSON.stringify(val));
};
