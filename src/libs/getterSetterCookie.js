import Cookies from 'js-cookie';

export const getCookie = (key) => {
  const c = Cookies.get(key);
  console.log(c);
  return c === undefined ? c : JSON.parse(c);
};

export const setCookie = (key, val) => {
  JSON.stringify(Cookies.set(key, val));
};
