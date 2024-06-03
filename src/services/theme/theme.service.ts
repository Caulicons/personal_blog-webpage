import { ThemeSchema } from '../../schemas/theme/theme.schema';
import { api, handleServerError } from '../../utils/http';
import Cookies from 'js-cookie';

const token = Cookies.get('token');

const getAll = async () => {
  try {
    const res = await api.get<ThemeSchema[]>('/themes');
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    handleServerError(e);
    return <ThemeSchema[]>{};
  }
};

const getById = async (id: number) => {
  try {
    const res = await api.get<ThemeSchema>(`/themes/${id}`);
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    handleServerError(e);
    return <ThemeSchema>{};
  }
};

const create = async (name: string) => {
  try {
    const res = await api.post<ThemeSchema>(
      '/themes',
      { name },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (res.status !== 201) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    handleServerError(e);
    return <ThemeSchema>{};
  }
};

const update = async (data: ThemeSchema) => {
  try {
    const res = await api.put<ThemeSchema>(`/themes/${data.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    handleServerError(e);
    return <ThemeSchema>{};
  }
};

const exclude = async (id: number) => {
  try {
    const res = await api.delete(`/themes/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    handleServerError(e);
    return <ThemeSchema>{};
  }
};

export const themeService = { getAll, getById, create, update, exclude };
