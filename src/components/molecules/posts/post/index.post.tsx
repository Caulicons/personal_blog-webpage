import { FC, useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Main from '../../../atoms/main/main.component';
import Container from '../../../atoms/container/container.component';
import Typography from '../../../atoms/typography/typography.component';
import { PostSchema } from '../../../../schemas/post/post.schema';
import Button from '../../../atoms/button/button.component';
import {
  UserContext,
  UserContextSchema,
} from '../../../../contexts/user.context';
import { postService } from '../../../../services/posts/posts.service';
import Loading from '../../../atoms/loading/index.loading';
import { CircleNotch } from '@phosphor-icons/react';
import { handleServerError } from '../../../../utils/http';

const Post: FC = () => {
  const { id } = useParams();
  const { user } = useContext(UserContext) as UserContextSchema;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [post, setPost] = useState({} as PostSchema);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loadingDeleteRequest, setLoadingDeleteRequest] =
    useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    async function getPost() {
      const postData = await postService.getById(Number(id));
      if (!postData.id)
        navigate('/404', {
          replace: true,
          state: { message: 'Post not found' },
        });

      setPost(postData);

      setIsLoading(false);
    }
    getPost();
  }, [id, navigate, post.id]);

  if (isLoading) return <Loading />;
  return (
    <Main
      className={`mx-auto flex h-auto min-h-[calc(100vh-60px)] w-full ${isLoading && 'items-center'} justify-center md:p-2 lg:p-6`}
    >
      {/* Modal */}
      <div
        onClick={() => setShowModal(false)}
        className={`fixed  right-0 top-0 flex  h-full w-full select-none items-center justify-center   bg-gray-500/50 ${showModal ? 'visible fixed' : 'invisible hidden'}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="mx-4 flex min-h-20 w-full max-w-[600px] flex-col  justify-center gap-7 rounded-xl bg-white p-6"
        >
          <Typography
            tag="h2"
            variant="h2"
            className="text-center text-xl font-bold text-black"
          >
            You have sure want to delete this post?
          </Typography>{' '}
          <div className="flex w-full justify-center gap-4 ">
            <Button color="error" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button
              variant="primary"
              color="error"
              className="flex min-w-16 justify-center bg-red-400 hover:bg-red-500"
              onClick={async () => {
                setLoadingDeleteRequest(true);
                try {
                  await postService.exclude(Number(id));
                  navigate('/posts');
                } catch (e) {
                  handleServerError(e);
                }
              }}
            >
              {loadingDeleteRequest ? (
                <CircleNotch className="animate-spin self-center" />
              ) : (
                'Delete'
              )}
            </Button>
          </div>
        </div>
      </div>
      <Container
        tag="section"
        className="grid h-full gap-6 lg:grid-cols-[70%_30%]"
      >
        {/* Post */}
        <div className="h-full w-full rounded-3xl shadow-2xl ">
          {post.photo ? (
            <img
              className="bg-ima h-fit w-full md:max-h-[280px] md:rounded-t-3xl"
              src={post?.photo}
            />
          ) : (
            <div className=" h-[150px] w-full  bg-orange-500 md:max-h-[240px] md:rounded-t-3xl" />
          )}
          <div className="grid-row-3 grid gap-4 p-4 md:p-8">
            {/* Head */}
            <div className="grid-row-2 grid gap-4">
              <div className="flex items-center gap-3">
                <img
                  src={post.user.photo}
                  alt=""
                  className="w-10 rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <Typography
                    variant="p"
                    className="text-sm font-medium text-black"
                  >
                    {post.user.username}
                  </Typography>
                  <Typography tag="p" className=" text-xs text-gray-900 ">
                    Posted on
                    {/* {formattedDate} */}
                  </Typography>
                </div>
              </div>
              <Typography tag="h2" className="text-2xl font-bold md:text-4xl">
                {post?.title}
              </Typography>
              <Typography
                tag="p"
                variant="p"
                className="my-auto w-fit cursor-pointer rounded-xl bg-gray-200 p-2 py-1 align-middle text-xs font-light"
              >
                {post.theme?.name}
              </Typography>
            </div>
            {/* Body */}
            <div>
              <Typography
                variant="p"
                className="text-sm font-medium text-black"
              >
                {post.content}
              </Typography>
            </div>
            {/* Comments */}
          </div>
        </div>
        {/* Author Info */}
        <div className="hidden lg:block">
          <div className="rounded-3xl shadow-2xl">
            <div className=" -z-10  h-[36px] w-full rounded-t-xl bg-blue-600" />
            <div className=" -mt-4 flex gap-2 px-6">
              <img
                src={post.user.photo}
                alt=""
                className="w-12 rounded-full"
                width={'40px'}
                height={'40px'}
              />
              <Typography className="self-end text-xl font-bold">
                {post.user?.username}
              </Typography>
            </div>
            <div className="flex flex-col gap-6 px-6 py-8 pt-6">
              {post?.user.id === user?.id ? (
                <div className="flex w-full  gap-4">
                  <Link to={`/posts/${post.id}/edit`} className="w-full">
                    <Button className="w-full">Edit Post</Button>
                  </Link>
                  <Button
                    className="  w-full  bg-red-400 hover:bg-red-500"
                    onClick={() => setShowModal(true)}
                  >
                    Delete Post
                  </Button>
                </div>
              ) : (
                /* TODO: Create a followrs field in the backend */
                <Button className="w-full">Follow</Button>
              )}
              <Typography
                variant="p"
                className="text-justify font-medium text-gray-600"
              >
                {/* TODO: Create a bio in back-end */}
                {/* {post.author.bio} */}A passionate front-end developer with a
                Bachelor's degree from Bahria University. My current tech stack
                includes HTML,CSS,Tailwind,JavaScript, ReactJs, and Currently
                Exploring CssAnimations & Next.js.
              </Typography>
              <div>
                <Typography className="text-sm font-bold">JOINED</Typography>
                <Typography className="text-sm ">TODAY</Typography>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Post;
