import { FunctionComponent, useEffect, useState } from 'react';
import Main from '../../atoms/main/main.component';
import Container from '../../atoms/container/container.component';
import { PostSchema } from '../../../schemas/post/post.schema';

import Posts from '../../molecules/posts/index.posts';
import { postService } from '../../../services/posts/posts.service';
import Loading from '../../atoms/loading/index.loading';

interface PostsPageProps {}

const PostsPage: FunctionComponent<PostsPageProps> = () => {
  const [posts, setPosts] = useState([] as PostSchema[]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    async function getPosts() {
      setPosts(await postService.getAll());
      setIsLoading(false);
    }
    getPosts();
  }, []);

  return (
    <Main className="flex min-h-screen select-none flex-col items-center gap-4 bg-green-500 p-10">
      {isLoading ? (
        <Loading image={2} />
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
