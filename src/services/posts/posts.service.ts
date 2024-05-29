import { CreatePostSchema } from '../../schemas/post/createPost.schema';
import { PostSchema } from '../../schemas/post/post.schema';
import { api, handleServerError } from '../../utils/http';
import Cookies from 'js-cookie';

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
    // Edit this theme later
    const res = await api.post<PostSchema>('/posts', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (res.status !== 201) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    handleServerError(e);
    return <PostSchema>{};
  }
};

export const postService = {
  getAll,
  getById,
  create,
};
