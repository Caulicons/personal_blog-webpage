import { FC } from 'react';
import Main from '../../../atoms/main/main.component';
import Container from '../../../atoms/container/container.component';
import Typography from '../../../atoms/typography/typography.component';
import LabeledInput from '../../LabeledInput/labeledInput.component';
import LabeledTextArea from '../../labedTextArea/index.labledTextArea';
import Button from '../../../atoms/button/button.component';

interface PostCreateProps {}

const PostCreate: FC<PostCreateProps> = () => {
  return (
    <Main className="flex min-h-screen flex-col items-center justify-center p-6">
      <Container
        tag="section"
        size="small"
        className="  flex flex-col  items-center justify-center gap-6 text-center"
      >
        <Typography tag="h1" variant="h2" className=" md:text-3xl">
          Where the magic happens 🪄
        </Typography>
        <form className="grid  w-full gap-4">
          <div className="grid w-full gap-4">
            <LabeledInput label="Title" className="border-black" />
            <LabeledTextArea label="Content" />
            <LabeledInput label="Photo" className="border-black" />
            <Button>Send</Button>
          </div>
        </form>
      </Container>
    </Main>
  );
};

export default PostCreate;
