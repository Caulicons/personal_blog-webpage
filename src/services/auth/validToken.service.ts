import Cookies from 'js-cookie';
import { api, handleServerError } from '../../utils/http';
import { UserInfoSchema } from '../../schemas/user/userContext.schema';

export const validatingToken = async (token: string) => {
  try {
    const res = await api.get<UserInfoSchema>('auth/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    Cookies.remove('token');
    handleServerError(e);
    return false;
  }
};
