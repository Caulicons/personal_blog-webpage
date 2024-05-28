import { FunctionComponent } from 'react';
import Main from '../../atoms/main/main.component';
import Container from '../../atoms/container/container.component';
import { PostSchema } from '../../../schemas/post/post.schema';

import Posts from '../../molecules/posts/index.posts';

interface PostsPageProps {}

const PostsPage: FunctionComponent<PostsPageProps> = () => {
  const posts: PostSchema[] = [
    {
      id: 1,
      title: 'Lorem ipsum dolor sit amet',
      content: '',
      data: new Date(),
      photo: '/imgs/bg-post-example.avif',
      theme: {
        id: 1,
        name: 'typescript',
      },
      author: {
        id: 1,
        username: 'john_doe',
        email: 'john.doe@gmail.com',
        photo: 'https://picsum.photos/id/1015/100/100',
      },
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet',
      content: '',
      data: new Date(),
      photo: '/imgs/bg-post-example.avif',
      theme: {
        id: 2,
        name: 'typescript',
      },
      author: {
        id: 1,
        username: 'john_doe',
        email: 'john.doe@gmail.com',
        photo: 'https://picsum.photos/id/1015/100/100',
      },
    },

    {
      id: 3,
      title: 'Lorem ipsum dolor sit amet',
      content: '',
      data: new Date(),
      photo: '/imgs/bg-post-example.avif',
      theme: {
        id: 3,
        name: 'typescript',
      },
      author: {
        id: 1,
        username: 'john_doe',
        email: 'john.doe@gmail.com',
        photo: 'https://picsum.photos/id/1015/100/100',
      },
    },
  ];

  return (
    <Main className="flex min-h-screen select-none flex-col items-center gap-4 bg-green-500 p-10">
      <Container size="small" className="grid gap-4 sm:grid-cols-[65%_35%]">
        <div className="flex w-full flex-col gap-6 rounded-lg  pt-0">
          <div className="w-full rounded-lg border-2 border-gray-300 p-2"></div>
          <Posts posts={posts} />
        </div>
        <div className="hidden h-4/5 w-full rounded-lg border-2 border-gray-300 p-4 sm:block"></div>
      </Container>
    </Main>
  );
};

export default PostsPage;
