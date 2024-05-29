import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PostSchema } from '../../../../schemas/post/post.schema';
import { postService } from '../../../../services/posts/posts.service';
import Button from '../../../atoms/button/button.component';
import Container from '../../../atoms/container/container.component';
import Loading from '../../../atoms/loading/index.loading';
import Main from '../../../atoms/main/main.component';
import Typography from '../../../atoms/typography/typography.component';
import LabeledInput from '../../LabeledInput/labeledInput.component';
import LabeledTextArea from '../../labedTextArea/index.labledTextArea';

interface PostEditProps {}

const PostEdit: FC<PostEditProps> = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(!!id);
  const [post, setPost] = useState({} as PostSchema);

  useEffect(() => {
    setPost({} as PostSchema);
    if (id) {
      (async () => {
        setPost(await postService.getById(Number(id)));
        setIsLoading(false);
      })();
    }
  }, [id]);

  return (
    <Main className="flex min-h-screen flex-col items-center justify-center p-6">
      <Container
        tag="section"
        size="small"
        className="  flex flex-col  items-center justify-center gap-6 text-center"
      >
        <Typography tag="h1" variant="h2" className=" md:text-3xl">
          Update your beauty post 👋
        </Typography>
        {isLoading ? (
          <Loading message="Loading your beauty post..." />
        ) : (
          <form className="grid  w-full gap-4">
            <div className="grid w-full gap-4">
              <LabeledInput
                value={post.title}
                label="Title"
                className="border-black"
              />
              <LabeledTextArea value={post.content} label="Content" />
              <LabeledInput label="Photo" className="border-black" />
              <Button>Send</Button>
            </div>
          </form>
        )}
      </Container>
    </Main>
  );
};

export default PostEdit;
