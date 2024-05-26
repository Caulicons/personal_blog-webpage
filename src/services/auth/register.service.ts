import { RegisterScheme } from '../../schemas/user/register.schema';
import { api, handleServerError } from '../../utils/http';

export const registerUser = async (
  data: Omit<RegisterScheme, 'confirmPassword'>,
) => {
  try {
    const res = await api.post('/users/create', data);
    if (res.status !== 201) throw new Error(JSON.stringify(res));
    return true;
  } catch (e) {
    handleServerError(e);
    return false;
  }
};
