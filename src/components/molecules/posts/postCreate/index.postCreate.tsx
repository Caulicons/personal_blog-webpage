import { FC, useState } from 'react';
import Main from '../../../atoms/main/main.component';
import Container from '../../../atoms/container/container.component';
import Typography from '../../../atoms/typography/typography.component';
import LabeledInput from '../../LabeledInput/labeledInput.component';
import LabeledTextArea from '../../labedTextArea/index.labledTextArea';
import Button from '../../../atoms/button/button.component';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  CreatePostSchema,
  createPostSchema,
} from '../../../../schemas/post/post.create.schema';
import { CircleNotch } from '@phosphor-icons/react';
import LabeledThemeInput from '../../labeledThemeInput/index.labeledThemeInput';
import { postService } from '../../../../services/posts/posts.service';

interface PostCreateProps {}

const PostCreate: FC<PostCreateProps> = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requestErrorMessage, setRequestErrorMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<CreatePostSchema>({
    resolver: zodResolver(createPostSchema),
  });
  const handlePostCreate = async (data: CreatePostSchema) => {
    setIsLoading(true);

    const post = await postService.create(data);
    if (post) navigate(`/posts/${post.id}`);

    setRequestErrorMessage('❌ Failed to create post. Please try again. ');
    setIsLoading(false);
  };

  return (
    <Main className="flex min-h-screen select-none flex-col items-center justify-center p-6">
      <Container
        tag="section"
        size="small"
        className="  flex flex-col  items-center justify-center gap-6 text-center"
      >
        <Typography tag="h1" variant="h2" className=" md:text-3xl">
          Where the magic happens 🪄
        </Typography>
        <form
          onChange={() => {
            if (requestErrorMessage) setRequestErrorMessage('');
          }}
          onSubmit={handleSubmit(handlePostCreate)}
          className="grid  h-full w-full gap-4"
        >
          <div className="grid w-full gap-4">
            <LabeledInput
              label="Title"
              type="text"
              className="border-black"
              error={errors.title?.message || !!requestErrorMessage}
              {...register('title')}
            />
            <LabeledThemeInput
              setValue={setValue}
              label="Theme"
              error={errors.theme?.message || !!requestErrorMessage}
              {...register('theme')}
            />
            <LabeledTextArea
              label="Content"
              className="border-black"
              error={errors.content?.message || !!requestErrorMessage}
              {...register('content')}
            />
            <LabeledInput
              label="Photo"
              className="border-black"
              error={errors.photo?.message || !!requestErrorMessage}
              {...register('photo')}
            />
            {!!requestErrorMessage && (
              <Typography className="text-left text-sm text-red-500">
                {requestErrorMessage}
              </Typography>
            )}
            <Button disabled={!!requestErrorMessage} type="submit">
              {isLoading ? (
                <CircleNotch
                  size={27}
                  className="w-full animate-spin self-center fill-white font-bold"
                />
              ) : (
                'Create'
              )}
            </Button>
          </div>
        </form>
      </Container>
    </Main>
  );
};

export default PostCreate;
