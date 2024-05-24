/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegisterScheme } from '../../components/pages/register/index.register';
import { api } from '../../utils/http';
import Cookies from 'js-cookie';

export const registerUser = async ({
  confirmPassword,
  ...data
}: RegisterScheme) => {
  console.log(data);
  const res = await api.post('/users/create', data);

  if (res.status !== 201) throw new Error(JSON.stringify(res));

  console.log(res);
  console.log(res.status);
  console.log('everything ok');
};

export const loginUser = async (data: object) => {
  // TODO: case the serve is down, this request return a error, and this not work well. To mock the error make login with the local api but with the server offline
  const res = await api.post('/auth/login', data);
  if (res.status !== 200 || !res.data || !res)
    throw new Error(JSON.stringify(res));

  Cookies.set('token', res.data.access_token, { expires: 7 });
};

export const logoutUser = async () => {
  Cookies.remove('token');
  window.location.reload();
};

export const isValidToken = async (token: string) => {
  // TODO: Why if I use without the try catch like the "isValidToken" with fetch work but with axios not work ????
  try {
    const res = await api.get('/auth/profile', {
      headers: { Authorization: token },
    });
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return true;
  } catch {
    return false;
  }
};

/* export const isValidToken = async (token: string) => {
  //TODO: If the serve not work, that i can do ?????????
  const res = await fetch(
    'https://personal-blog-api-cxnr.onrender.com/auth/profile',
    {
      headers: {
        Authorization: token,
      },
    },
  );
  console.log(res);
  console.log(res.status);
  if (res.status !== 200) return false;

  return true;
};
 */
