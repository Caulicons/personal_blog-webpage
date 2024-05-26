import { FunctionComponent } from 'react';
import Main from '../../atoms/main/main.component';

interface PostsProps {}

const Posts: FunctionComponent<PostsProps> = () => {
  return (
    <Main>
      <h1>Posts</h1>
    </Main>
  );
};

export default Posts;
