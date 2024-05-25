import Cookies from 'js-cookie';

export const logOutUser = async () => {
  Cookies.remove('token');
  window.location.reload();
};
