import { FunctionComponent, useEffect, useState } from 'react';
import Main from '../../atoms/main/main.component';
import Container from '../../atoms/container/container.component';
import { PostSchema } from '../../../schemas/post/post.schema';

import Posts from '../../molecules/posts/index.posts';
import { getALlPosts } from '../../../services/posts/posts.service';
import Typography from '../../atoms/typography/typography.component';
import { CircleNotch } from '@phosphor-icons/react';

interface PostsPageProps {}

const PostsPage: FunctionComponent<PostsPageProps> = () => {
  const [posts, setPosts] = useState([] as PostSchema[]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    async function getPosts() {
      setPosts(await getALlPosts());
      setIsLoading(false);
    }
    getPosts();
  }, []);

  return (
    <Main className="flex min-h-screen select-none flex-col items-center gap-4 bg-green-500 p-10">
      {isLoading ? (
        <div className="mx-auto h-full select-none text-center">
          <img className="md:w-[500px]" src="/imgs/loading-2.svg" alt="" />
          <Typography variant="h2" className="  text-2xl font-bold">
            Loading, Please Wait...
            <span>
              <CircleNotch
                className="w-full  animate-spin fill-white"
                size={36}
              />
            </span>
          </Typography>
        </div>
      ) : (
        <Container size="small" className="grid gap-4 sm:grid-cols-[65%_35%]">
          <div className="flex w-full flex-col gap-6 rounded-lg  pt-0">
            <div className="w-full rounded-lg border-2 border-gray-300 p-2"></div>
            <Posts posts={posts} />
          </div>
          <div className="hidden h-4/5 w-full rounded-lg border-2 border-gray-300 p-4 sm:block"></div>
        </Container>
      )}
    </Main>
  );
};

export default PostsPage;
