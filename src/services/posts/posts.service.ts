import { PostSchema } from '../../schemas/post/post.schema';
import { api, handleServerError } from '../../utils/http';

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

export const postService = {
  getAll,
  getById,
};
