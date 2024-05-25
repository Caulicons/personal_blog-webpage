import { LoginSchema } from '../../schemas/user/login.schema';
import { api } from '../../utils/http';
import Cookies from 'js-cookie';

export const logInto = async (user: LoginSchema) => {
  try {
    const res = await api.post('auth/login', user);
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return Cookies.set('token', res.data.access_token, { expires: 7 });
  } catch (e) {
    console.log(e);
    return false;
  }
};
