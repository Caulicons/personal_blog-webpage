import { FunctionComponent } from 'react';
import Main from '../../atoms/main/main.component';
import loggedOnly from '../../wrappers/loggedOnly/logged.component';

interface PostsProps {}

const Posts: FunctionComponent<PostsProps> = () => {
  return (
    <Main>
      <h1>Posts</h1>
    </Main>
  );
};

export default loggedOnly(Posts);
