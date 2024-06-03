import { CreatePostSchema } from '../../schemas/post/post.create.schema';
import { PostSchema } from '../../schemas/post/post.schema';
import { UpdatePostSchema } from '../../schemas/post/post.update.schema';
import { ThemeSchema } from '../../schemas/theme/theme.schema';
import { api, handleServerError } from '../../utils/http';
import Cookies from 'js-cookie';
import { themeService } from '../theme/theme.service';

const token = Cookies.get('token');

const getAll = async () => {
  try {
    const res = await api.get<PostSchema[]>('/posts');
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    handleServerError(e);
    return <PostSchema[]>[];
  }
};

const getById = async (id: number) => {
  try {
    const res = await api.get<PostSchema>(`/posts/${id}`);
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    handleServerError(e);
    return <PostSchema>{};
  }
};

const create = async (data: CreatePostSchema) => {
  try {
    const theme = await checkTheme(data.theme);
    const res = await api.post<PostSchema>(
      '/posts',
      {
        ...data,
        theme: theme?.id,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (res.status !== 201) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    console.log(e);
    handleServerError(e);
    return <PostSchema>{};
  }
};

const update = async (data: UpdatePostSchema) => {
  try {
    const theme = await checkTheme(data.theme);
    const res = await api.put<PostSchema>(
      `/posts/${data.id}`,
      { ...data, theme: theme?.id },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    handleServerError(e);
    return <PostSchema>{};
  }
};

const exclude = async (id: number) => {
  try {
    const res = await api.delete(`/posts/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(res);
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    handleServerError(e);
    return <PostSchema>{};
  }
};

const checkTheme = async (themeName: string) => {
  const themes = await themeService.getAll();
  let theme = themes.find((t: ThemeSchema) => t.name === themeName);

  if (!theme) {
    theme = await themeService.create(themeName);
  }
  return theme;
};

export const postService = {
  getAll,
  getById,
  create,
  update,
  exclude,
};
