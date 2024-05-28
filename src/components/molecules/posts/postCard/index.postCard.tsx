import { FC } from 'react';
import { PostSchema } from '../../../../schemas/post/post.schema';
import Typography from '../../../atoms/typography/typography.component';
import { Heartbeat } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

interface PostCardProps {
  post: PostSchema;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const month = post.data.toLocaleDateString('en-US', {
    month: 'long',
  });
  const day = post.data.toLocaleDateString('en-US', {
    day: '2-digit',
  });

  const year = post.data.toLocaleDateString('en-US', {
    year: 'numeric',
  });

  const formattedDate = ` ${month} ${day}, ${year}`;
  console.log(post);
  return (
    <div
      key={post.id}
      className="grid min-h-[180px] w-full gap-1 rounded-md border-2 border-gray-300 bg-white p-4"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <img src={post.author.photo} alt="" className="w-6 rounded-full" />
        <Typography variant="p" className="text-sm font-medium text-black">
          {post.author.username}
        </Typography>
        <Typography tag="p" className=" text-xs text-gray-900 ">
          {'-'}
          {formattedDate}
        </Typography>
      </div>
      {/* body */}
      <Link to={`/posts/${post.id}`}>
        <div className="grid grid-cols-[80%_20%] gap-4">
          <Typography tag="h3" className="text-lg font-bold text-black ">
            {post.title}
          </Typography>
        </div>
      </Link>
      {/* Footer */}
      <div className="flex items-center justify-between gap-2">
        <Typography
          tag="p"
          variant="p"
          className="my-auto w-fit cursor-pointer rounded-xl bg-gray-200 p-2 py-1 align-middle text-xs font-light"
        >
          {post.theme.name}
        </Typography>
        <Heartbeat size={27} className=" hover:cursor-pointer" />
      </div>
    </div>
  );
};

export default PostCard;
