import { LoginSchema } from '../../schemas/user/login.schema';
import { UserInfoSchema } from '../../schemas/user/userContext.schema';
import { api, handleServerError } from '../../utils/http';
import Cookies from 'js-cookie';

export const logInto = async (user: LoginSchema) => {
  try {
    const res = await api.post<UserInfoSchema & { access_token: string }>(
      'auth/login',
      user,
    );
    if (res.status !== 200) throw new Error(JSON.stringify(res));

    const { access_token, ...userRes } = res.data;
    Cookies.set('token', access_token, { expires: 7 });
    return userRes as UserInfoSchema;
  } catch (e) {
    handleServerError(e);
    return false;
  }
};
