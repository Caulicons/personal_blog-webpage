import { FC } from 'react';
import { PostSchema } from '../../../../schemas/post/post.schema';
import Typography from '../../../atoms/typography/typography.component';
import { Link } from 'react-router-dom';
import LoadingImagePerfil from '../../../atoms/loadingImagePerfil/index.loadingImage';

interface PostCardProps {
  post: PostSchema;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  const data = new Date(post.data);
  const month = data.toLocaleDateString('en-US', {
    month: 'long',
  });
  const day = data.toLocaleDateString('en-US', {
    day: '2-digit',
  });

  const year = data.toLocaleDateString('en-US', {
    year: 'numeric',
  });

  const formattedDate = ` ${month} ${day}, ${year}`;
  return (
    <div
      key={post.id}
      className="´x grid min-h-[180px] w-full gap-4 rounded-md border-2 border-gray-300 bg-white p-4"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        {post.user.photo ? (
          <img src={post.user.photo} alt="" className="w-6 rounded-full" />
        ) : (
          <LoadingImagePerfil size={24} className="fill-green-600" />
        )}
        <Typography variant="p" className="text-sm font-medium text-black">
          {post.user.username}
        </Typography>
        <Typography tag="p" className=" text-xs text-gray-900 ">
          {'-'}
          {formattedDate}
        </Typography>
      </div>
      {/* body */}
      <Link to={`/posts/${post.id}`}>
        <div
          className={`-center grid items-center justify-between ${post.photo ? ' grid-cols-[70%_30%]' : ''} w-full gap-4`}
        >
          <div className="grid gap-2">
            <Typography tag="h3" className="text-lg font-bold text-black ">
              {post.title}
            </Typography>
            <Typography className="hidden leading-5 md:block">
              {post.content.substring(0, 150)}
              {'...'}
            </Typography>
          </div>
          <img src={post.photo} alt="" className="flex w-fit" />
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
      </div>
    </div>
  );
};

export default PostCard;
