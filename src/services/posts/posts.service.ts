import { PostSchema } from '../../schemas/post/post.schema';
import { api, handleServerError } from '../../utils/http';

export const getALlPosts = async () => {
  try {
    const res = await api.get<PostSchema[]>('/posts');
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    handleServerError(e);
    return <PostSchema[]>[];
  }
};

export const getById = async (id: number) => {
  try {
    const res = await api.get<PostSchema>(`/posts/${id}`);
    console.log(res);
    if (res.status !== 200) throw new Error(JSON.stringify(res));
    return res.data;
  } catch (e) {
    handleServerError(e);
    return <PostSchema>{};
  }
};
