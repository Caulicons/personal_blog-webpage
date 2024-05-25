import Cookies from 'js-cookie';
import { api } from '../../utils/http';

export const validatingToken = async (token: string) => {
  try {
    const res = await api.get('auth/profile', {
      headers: {
        Authorization: token,
      },
    });
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return true;
  } catch (e) {
    console.log(e);
    Cookies.remove('token');
    return false;
  }
};
