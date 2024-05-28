import { FC } from 'react';
import { PostSchema } from '../../../schemas/post/post.schema';
import PostCard from './postCard/index.postCard';

interface PostsProps {
  posts: PostSchema[];
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <div className="flex w-full flex-col gap-4">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Posts;
